'use strict';

/**
 * Lookup for names of supported languages.  Keys should be in ISO 639 format.
 */
Main.LANGUAGE_NAME = {
    'de': 'Deutsch',
    'en': 'English',
    'es': 'Español',
    'fr': 'Français',
    'it': 'Italiano',
    'ja': '日本語',
    'ko': '한국어',
    'pt-br': 'Português Brasileiro',
    'pt-pt': 'Português',
    'ru': 'Русский',
    'th': 'ภาษาไทย',
    'tr': 'Türkçe',
    'uk': 'Українська',
    'zh-hans': '简体中文',
    'zh-hant': '繁體中文'
};

/**
 * Blockly's main workspace.
 * @type {Blockly.WorkspaceSvg}
 */
Main.workspace = null;

/**
 * Extracts a parameter from the URL.
 * If the parameter is absent default_value is returned.
 * @param {string} name The name of the parameter.
 * @param {string} defaultValue Value to return if parameter not found.
 * @return {string} The parameter value or the default value if not found.
 */
Main.getStringParamFromUrl = function(name, defaultValue) {
    var val = location.search.match(new RegExp('[?&]' + name + '=([^&]+)'));
    return val ? decodeURIComponent(val[1].replace(/\+/g, '%20')) : defaultValue;
};

/**
 * Get the language of this user from the URL.
 * @return {string} User's language.
 */
Main.getLang = function() {
    var lang = Main.getStringParamFromUrl('lang', '');
    if (Main.LANGUAGE_NAME[lang] === undefined) {
        // Default to English.
        // lang = 'zh-hans';
        lang = 'en';
    }
    return lang;
};

/**
 * Load blocks saved on App Engine Storage or in session/local storage.
 * @param {string} defaultXml Text representation of default blocks.
 */
Main.loadBlocks = function(defaultXml) {
    return;
};

/**
 * Save the blocks and reload with a different language.
 */
Main.changeLanguage = function() {
    // Store the blocks for the duration of the reload.
    // MSIE 11 does not support sessionStorage on file:// URLs.
    if (window.sessionStorage) {
        var xml = Blockly.Xml.workspaceToDom(Main.workspace);
        var text = Blockly.Xml.domToText(xml);
        window.sessionStorage.loadOnceBlocks = text;
    }

    var languageMenu = document.getElementById('languageMenu');
    var newLang = encodeURIComponent(
        languageMenu.options[languageMenu.selectedIndex].value);
    var search = window.location.search;
    if (search.length <= 1) {
        search = '?lang=' + newLang;
    } else if (search.match(/[?&]lang=[^&]*/)) {
        search = search.replace(/([?&]lang=)[^&]*/, '$1' + newLang);
    } else {
        search = search.replace(/\?/, '?lang=' + newLang + '&');
    }

    window.location = window.location.protocol + '//' +
        window.location.host + window.location.pathname + search;
};

/**
 * Bind a function to a button's click event.
 * On touch enabled browsers, ontouchend is treated as equivalent to onclick.
 * @param {!Element|string} el Button element or ID thereof.
 * @param {!Function} func Event handler to bind.
 */
Main.bindClick = function(el, func) {
    if (typeof el == 'string') {
        el = document.getElementById(el);
    }
    el.addEventListener('click', func, true);
    //el.addEventListener('touchend', func, true);
    //2018年12月25日20:08:52 GTY注释 导致每个按钮被触发两次，不知道为啥这么设计
};

/**
 * Load the Prettify CSS and JavaScript.
 */
Main.importPrettify = function() {
    var script = document.createElement('script');
    // script.setAttribute('src', 'https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js');
    script.setAttribute('src', 'run_prettify.js');
    document.head.appendChild(script);
};

/**
 * Compute the absolute coordinates and dimensions of an HTML element.
 * @param {!Element} element Element to match.
 * @return {!Object} Contains height, width, x, and y properties.
 * @private
 */
Main.getBBox_ = function(element) {
    var height = element.offsetHeight;
    var width = element.offsetWidth;
    var x = 0;
    var y = 0;
    do {
        x += element.offsetLeft;
        y += element.offsetTop;
        element = element.offsetParent;
    } while (element);
    return {
        height: height,
        width: width,
        x: x,
        y: y
    };
};

/**
 * User's language (e.g. "en").
 * @type {string}
 */
Main.LANG = Main.getLang();

/**
 * List of tab names.
 * @private
 */
Main.TABS_ = ['blocks'];

Main.selected = 'blocks';

/**
 * Attempt to generate the code and display it in the UI, pretty printed.
 * @param generator {!Blockly.Generator} The generator to use.
 * @param prettyPrintType {string} The file type key for the pretty printer.
 */
Main.attemptCodeGeneration = function(generator, prettyPrintType) {
    var content = document.getElementById('content_' + Main.selected);
    content.textContent = '';
    if (Main.checkAllGeneratorFunctionsDefined(generator)) {
        var code = generator.workspaceToCode(Main.workspace);

        content.textContent = code;
        if (typeof PR.prettyPrintOne == 'function') {
            code = content.textContent;
            code = PR.prettyPrintOne(code, prettyPrintType);
            content.innerHTML = code;
        }
    }
};

/**
 * Check whether all blocks in use have generator functions.
 * @param generator {!Blockly.Generator} The generator to use.
 */
Main.checkAllGeneratorFunctionsDefined = function(generator) {
    var blocks = Main.workspace.getAllBlocks(false);
    var missingBlockGenerators = [];
    for (var i = 0; i < blocks.length; i++) {
        var blockType = blocks[i].type;
        if (!generator[blockType]) {
            if (missingBlockGenerators.indexOf(blockType) === -1) {
                missingBlockGenerators.push(blockType);
            }
        }
    }

    var valid = missingBlockGenerators.length == 0;
    if (!valid) {
        var msg = 'The generator code for the following blocks not specified for ' +
            generator.name_ + ':\n - ' + missingBlockGenerators.join('\n - ');
        Blockly.alert(msg); // Assuming synchronous. No callback.
    }
    return valid;
};

/**
 * Initialize Blockly.  Called on page load.
 */
Main.init = function() {
    Main.initLanguage();

    // The toolbox XML specifies each category name using Blockly's messaging
    // format (eg. `<category name="%{BKY_CATLOGIC}">`).
    // These message keys need to be defined in `Blockly.Msg` in order to
    // be decoded by the library. Therefore, we'll use the `MSG` dictionary that's
    // been defined for each language to import each category name message
    // into `Blockly.Msg`.
    // TODO: Clean up the message files so this is done explicitly instead of
    // through this for-loop.
    for (var messageKey in MSG) {
        if (messageKey.indexOf('cat') == 0) {
            Blockly.Msg[messageKey.toUpperCase()] = MSG[messageKey];
        }
    }

    // Construct the toolbox XML, replacing translated variable names.
    var toolboxText = document.getElementById('toolbox').outerHTML;
    toolboxText = toolboxText.replace(/(^|[^%]){(\w+)}/g,
        function(m, p1, p2) { return p1 + MSG[p2]; });
    var toolboxXml = Blockly.Xml.textToDom(toolboxText);
    Main.workspace = Blockly.inject('blocklyDiv', {
        grid: {
            spacing: 35,
            length: 6,
            // colour: '#fff9f2',
            colour: '#FFA64C',
            snap: true
        },
        media: '../media/',
        scrollbars: true,
        toolbox: toolboxXml,
        trashcan: false,
        horizontalLayout: false,
        maxBlocks: Infinity,
        zoom: {
            controls: false,
            wheel: true,
            startScale: 1.1,
            maxScale: 1.1,
            minScale: 0.9,
            scaleSpeed: 1
        }

    });

    window.addEventListener('load', Main.init);
    // Add to reserved word list: Local variables in execution environment (runJS)
    // and the infinite loop detection function.
    Blockly.JavaScript.addReservedWords('code,timeouts,checkTimeout');

    Main.loadBlocks('');

    if ('BlocklyStorage' in window) {
        // Hook a save function onto unload.
        BlocklyStorage.backupOnUnload(Main.workspace);
    }

    Blockly.svgResize(Main.workspace);
    // Lazy-load the syntax-highlighting.
    window.setTimeout(Main.importPrettify, 1);
    Main.workspace.addChangeListener(Blockly.Events.disableOrphans);
    try {
        if (Main.isAndroidDevice()) {
            var result = prompt("js://webview?type=init&msg=init_finisih");
        } else {
            window.webkit.messageHandlers.init.postMessage('init finisih');
        }
    } catch (e) {
        alert(MSG['init fail ' + e]);
    }

};

/**
 * Initialize the page language.
 */
Main.initLanguage = function() {
    // Set the HTML's language and direction.
    document.dir = 'ltr';
    document.head.parentElement.setAttribute('lang', Main.LANG);

    // Sort languages alphabetically.
    var languages = [];
    for (var lang in Main.LANGUAGE_NAME) {
        languages.push([Main.LANGUAGE_NAME[lang], lang]);
    }
    var comp = function(a, b) {
        // Sort based on first argument ('English', 'Русский', '简体字', etc).
        if (a[0] > b[0]) return 1;
        if (a[0] < b[0]) return -1;
        return 0;
    };
    languages.sort(comp);
};

/**
 * Execute the user's Main.
 * Just a quick and dirty eval.  Catch infinite loops.
 */
Main.runJS = function() {
    Blockly.JavaScript.INFINITE_LOOP_TRAP = '  checkTimeout();\n';
    var timeouts = 0;
    var checkTimeout = function() {
        if (timeouts++ > 1000000) {
            throw MSG['timeout'];
        }
    };
    var code = Blockly.JavaScript.workspaceToCode(Main.workspace);
    var code_run;
    // alert(code);
    Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
    try {
        if (Main.isAndroidDevice()) {
            code_run = prompt("js://webview?type=runcode&msg=" + code + "");
        } else {
            window.webkit.messageHandlers.runMain.postMessage(code);
        }
        // alert(code_run);
        // eval(code_run);
    } catch (e) {
        alert(MSG['badCode ' + e]);
    }

    try {
        if (Main.isAndroidDevice()) {
            var result = prompt("js://webview?type=codeend&msg=codeend");
        } else {
            window.webkit.messageHandlers.codeend.postMessage("codeend");
        }
    } catch (e) {
        alert(MSG['codeend fail ' + e]);
    }
};

Main.runPython = function() {
    Blockly.JavaScript.INFINITE_LOOP_TRAP = '  checkTimeout();\n';
    var timeouts = 0;
    var checkTimeout = function() {
        if (timeouts++ > 1000000) {
            throw MSG['timeout'];
        }
    };
    var code = Blockly.Python.workspaceToCode(Main.workspace);
    var code_run;
    // alert(code);
    Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
    try {
        if (Main.isAndroidDevice()) {
            code_run = prompt("js://webview?type=runcodePy&msg=" + code + "");
        } else {
            window.webkit.messageHandlers.runcodePy.postMessage(code);
        }
        // alert(code_run);
        // eval(code_run);
    } catch (e) {
        alert(MSG['badCode ' + e]);
    }

    try {
        if (Main.isAndroidDevice()) {
            var result = prompt("js://webview?type=codeend&msg=codeend");
        } else {
            window.webkit.messageHandlers.codeend.postMessage("codeend");
        }
    } catch (e) {
        alert(MSG['codeend fail ' + e]);
    }
};
//GTY创建于2018年12月27日18:14:41 发送请求：保存当前代码
Main.sensor = function() {
    try {

        if (Main.isAndroidDevice()) {
            var result = prompt("js://webview?type=sensor&msg=sensor");
        } else {
            window.webkit.messageHandlers.sensor.postMessage('sensor');
        }
    } catch (e) {
        alert(MSG['sensor fail ' + e]);
    }
};

//GTY创建于2019年01月07日22:21:24 发送请求：保存当前代码
Main.savecode = function() {
    //    let xml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
    var xml = Blockly.Xml.workspaceToDom(Main.workspace);
    var text = Blockly.Xml.domToText(xml);
    try {
        if (Main.isAndroidDevice()) {
            var result = prompt("js://webview?type=savecode&msg=" + text);
        } else {
            window.webkit.messageHandlers.saveMain.postMessage(text);
        }
    } catch (e) {
        alert(MSG['savecode fail ' + e]);
    }
};

//TJL创建于2020年02月10日 提供给安卓的通信接口
Main.toHexString = function(text) {
    let temp;
    let r = '';
    for (let val of text) {
        temp = val.codePointAt(0).toString(16);
        while (temp.length < 4)
            temp = '0' + temp;
        r += '\\u' + temp;
    };
    return r;
}
Main.getCode = function() {
        var xml = Blockly.Xml.workspaceToDom(Main.workspace);
        var text = Blockly.Xml.domToText(xml);
        var r = Main.toHexString(text);
        return r;
    }
    //GTY创建于2019年01月07日12:51:36 发送请求：停止当前代码
Main.stopcode = function() {
    try {

        if (Main.isAndroidDevice()) {
            var result = prompt("js://webview?type=stopcode&msg=stopcode");
        } else {
            window.webkit.messageHandlers.stopMain.postMessage('stopcode');
        }
    } catch (e) {
        alert(MSG['stopcode fail ' + e]);
    }
};
//GTY创建于2019年01月07日23:36:18 发送请求：读取保存的代码文件
Main.checkcode = function() {
    try {
        if (Main.isAndroidDevice()) {
            var result = prompt("js://webview?type=checkcode&msg=checkcode");
        } else {
            window.webkit.messageHandlers.checkMain.postMessage('checkcode');
        }
    } catch (e) {
        alert(MSG['checkcode fail ' + e]);
    }
};
//GTY创建于2019年01月08日01:10:39 发送请求：删除保存的代码文件
Main.deletecode = function() {
    try {
        if (Main.isAndroidDevice()) {
            var result = prompt("js://webview?type=deletecode&msg=deletecode");
        } else {
            window.webkit.messageHandlers.deleteMain.postMessage('deletecode');
        }
    } catch (e) {
        alert(MSG['deletecode fail ' + e]);
    }
};

//GTY创建于2018年12月27日18:15:08 发送请求：读取保存的代码
Main.loadcode = function() {
    let workspace = Blockly.getMainWorkspace();
    workspace.clear();
    //    if (button.blocklyXml) {
    //        Blockly.Xml.domToWorkspace(button.blocklyXml, workspace);
    //    }
    try {
        if (Main.isAndroidDevice()) {
            var result = prompt("js://webview?type=loadcode&msg=loadcode");
        } else {
            window.webkit.messageHandlers.loadMain.postMessage('loadcode');
        }
        //发出请求，调出picker页面，点击返回后，对Xml进行封装，并调动js执行
    } catch (e) {
        alert(MSG['loadcode fail ' + e]);
    }
};

//GTY创建于2018年12月27日18:04:15 发送请求：通过蓝牙连接小车
Main.helpbtn = function() {
    try {
        if (Main.isAndroidDevice()) {
            var result = prompt("js://webview?type=helpbtn&msg=helpbtn");
        } else {
            window.webkit.messageHandlers.helpbtn.postMessage('helpbtn');
        }
    } catch (e) {
        alert(MSG['helpbtn fail ' + e]);
    }
};
//GTY创建于2018年12月27日18:04:15 发送请求：通过蓝牙连接小车
Main.connectbot = function() {
    try {
        if (Main.isAndroidDevice()) {
            var result = prompt("js://webview?type=connectbot&msg=connect");
        } else {
            window.webkit.messageHandlers.connectbot.postMessage('connect');
        }
    } catch (e) {
        alert(MSG['connect fail ' + e]);
    }
};
/**
 * Discard all blocks from the workspace.
 */
Main.discard = function() {

    // Main.workspace.clear();
    //GTY修改于2018年12月27日18:00:44 全清按钮

    var blocks_cur = Main.workspace.getAllBlocks(true)
    Blockly.Events.getGroup(true);
    for (var i = 0; i < blocks_cur.length; i++) {

        if (blocks_cur[i].type != 'main_block') {
            blocks_cur[i].dispose();
        }
    }
    Blockly.Events.getGroup(false);

    // var blocklyDiv_1 = first_block.getChildren(true);
    // // var count = Main.workspace.getAllBlocks(false).length;
    // if (blocklyDiv_1.length == 0) {
    //     return
    // } else {
    //     Blockly.Xml.clearWorkspaceAndLoadFromXml(Blockly.Xml.textToDom('<xml><block type="main_block" deletable="false" movable="false" x="20" y="20"></block></xml>'), Main.workspace);
    // }
    // 原逻辑，2个块以上会询问是否清理
    // if (count < 3 ||
    //     window.confirm(Blockly.Msg['DELETE_ALL_BLOCKS'].replace('%1', count))) {
    //     Main.workspace.clear();
    //     if (window.location.hash) {
    //         window.location.hash = '';
    //     }
    // }
};
Main.SetToCenter = function() {
    Main.workspace.scrollCenter()
}
Main.RedTest = function() {
    document.getElementById('move_cat').style.expanded = true;
}
Main.YellowTest = function() {
    document.getElementById('move_cat').style.expanded = false;
}
Main.getwscodes = function() {
    //    let xml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
    var xml = Blockly.Xml.workspaceToDom(Main.workspace);
    var text = Blockly.Xml.domToText(xml);
    try {
        if (Main.isAndroidDevice()) {
            var result = prompt("js://webview?type=getwscodes&msg=" + text);
        } else {
            window.webkit.messageHandlers.getwscodes.postMessage(text);
        }
    } catch (e) {
        alert(MSG['getwscodes fail ' + e]);
    }
};
// Load the Code demo's language strings.
document.write('<script src="../msg_code/' + Main.LANG + '.js"></script>\n');
// Load Blockly's language strings.
document.write('<script src="../msg/js/' + Main.LANG + '.js"></script>\n');

Main.Undo = function() {

    Blockly.Events.getGroup(true);
    Main.workspace.undo();
    Blockly.Events.getGroup(false);
    // var count = Main.workspace.getAllBlocks(false).length;
    // if (count == 0) {
    //     Main.workspace.undo();
}

Main.Redo = function() {
    Blockly.Events.getGroup(true);
    Main.workspace.undo(true);
    Blockly.Events.getGroup(false);
    // var count = Main.workspace.getAllBlocks(false).length;
    // if (count == 0) {
    //     Main.workspace.undo(true);
    // }
}
window.addEventListener('load', Main.init);
Main.SetLanguage = function(newLang) {

        // if (window.sessionStorage) {
        //   var xml = Blockly.Xml.workspaceToDom(Main.workspace);
        //   var text = Blockly.Xml.domToText(xml);
        //   window.sessionStorage.loadOnceBlocks = text;
        // }
        var search = window.location.search;
        if (search.length <= 1) {
            search = '?lang=' + newLang;
        } else if (search.match(/[?&]lang=[^&]*/)) {
            search = search.replace(/([?&]lang=)[^&]*/, '$1' + newLang);
        } else {
            search = search.replace(/\?/, '?lang=' + newLang + '&');
        }

        window.location = window.location.protocol + '//' +
            window.location.host + window.location.pathname + search;

    }
    /**
     * 判断终端设备类型 add by hardy 2019-9-28 11:18:28
     */
Main.isAndroidDevice = function() {
    //　var u = navigator.userAgent;
    //return isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    //  return isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (/Android/i.test(navigator.userAgent)) {
        return true;
    } else {
        return false;
    }
}
Main.setWorkSpaceMainBlock = function() {
    Blockly.Events.getGroup(true);
    Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom('<xml><block type="main_block" deletable="false" editable="false" movable="false" x="20" y="20"></block></xml>'), Main.workspace);
    Blockly.Events.getGroup(false);
    Main.workspace.clearUndo();
}
Main.setBotBlockEnable = function() {

}
Main.setBotBlockDisable = function() {

}
Main.setControllerBlockEnable = function() {

}
Main.setWorkSpace = function(blocks_xml) {
    var blocks = Blockly.Xml.textToDom(blocks_xml);
    var blocks_res = blocks.getElementsByTagName("block")[0].getElementsByTagName("next")[0];
    // var blocks_res = blocks.removeChild(main_block);
    Blockly.Xml.domToWorkspace(blocks_res, Main.workspace);
}
Main.setWorkSpaceInitWithProject = function(blocks_xml) {
    Blockly.Events.getGroup(true);
    var blocks = Blockly.Xml.textToDom(blocks_xml);
    Blockly.Xml.domToWorkspace(blocks, Main.workspace);
    Blockly.Events.getGroup(false);
    Main.workspace.clearUndo();
}

Main.stay = function() {
    Main.workspace.set
}