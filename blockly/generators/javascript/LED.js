'use strict';

goog.provide('Blockly.JavaScript.LED');

goog.require('Blockly.JavaScript');


// If any new block imports any library, add that library name here.
Blockly.JavaScript.addReservedWords('LED');

Blockly.JavaScript['sensor_led'] = function(block) {
    var dropdown_led = block.getFieldValue('LED');
    var dropdown_color = block.getFieldValue('COLOR');
    var dropdown_level = block.getFieldValue('LEVEL');
    // TODO: Assemble JavaScript into code variable.
    var code = '{\"block\":\"sensorled\",\"which\":\"' + dropdown_led + '\",\"color\":\"' + dropdown_color + '\",\"level\":\"' + dropdown_level + '\"}';
    return code;
};

Blockly.JavaScript['bot_led'] = function(block) {
    var dropdown_led = block.getFieldValue('LED');
    var dropdown_color = block.getFieldValue('COLOR');
    var dropdown_level = block.getFieldValue('LEVEL');
    // TODO: Assemble JavaScript into code variable.
    var code = '{\"block\":\"matataboteye\",\"which\":\"' + dropdown_led + '\",\"color\":\"' + dropdown_color + '\",\"level\":\"' + dropdown_level + '\"}';
    return code;
};
Blockly.JavaScript['sensor_ledcyc'] = function(block) {
    var colour_12 = block.getFieldValue('12');
    var colour_1 = block.getFieldValue('1');
    var colour_2 = block.getFieldValue('2');
    var colour_11 = block.getFieldValue('11');
    var colour_3 = block.getFieldValue('3');
    var colour_10 = block.getFieldValue('10');
    var colour_4 = block.getFieldValue('4');
    var colour_9 = block.getFieldValue('9');
    var colour_5 = block.getFieldValue('5');
    var colour_6 = block.getFieldValue('6');
    var colour_7 = block.getFieldValue('7');
    var colour_8 = block.getFieldValue('8');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.JavaScript['sensor_ledposition'] = function(block) {
    var dropdown_1 = block.getFieldValue('POSITION');
    var colour_1 = block.getFieldValue('COLOR');
    var dropdown_2 = block.getFieldValue('BRIGHTNESS');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};


Blockly.JavaScript['sensor_ledallrgb'] = function(block) {
    var number_r = block.getFieldValue('R');
    var number_g = block.getFieldValue('G');
    var number_b = block.getFieldValue('B');
    // TODO: Assemble JavaScript into code variable.
    var code = '...\n';
    return code;
};

Blockly.JavaScript['sensor_ledall'] = function(block) {
    var dropdown_color = block.getFieldValue('COLOR');
    var dropdown_level = block.getFieldValue('LEVEL');
    // TODO: Assemble JavaScript into code variable.
    var code = '...\n';
    return code;
};
Blockly.JavaScript['sensor_ledrgb'] = function(block) {
    var dropdown_led = block.getFieldValue('LED');
    var number_r = block.getFieldValue('R');
    var number_g = block.getFieldValue('G');
    var number_b = block.getFieldValue('B');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};
Blockly.JavaScript['sensor_ledpositionrgb'] = function(block) {
    var dropdown_position = block.getFieldValue('POSITION');
    var number_r = block.getFieldValue('R');
    var number_g = block.getFieldValue('G');
    var number_b = block.getFieldValue('B');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};
Blockly.JavaScript['bot_eyergb'] = function(block) {
    var dropdown_led = block.getFieldValue('LED');
    var number_r = block.getFieldValue('R');
    var number_g = block.getFieldValue('G');
    var number_b = block.getFieldValue('B');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};
Blockly.JavaScript['sensor_ledanimation'] = function(block) {
    var dropdown_animation = block.getFieldValue('ANIMATION');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};
Blockly.JavaScript['matatabot_ledclear'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};
Blockly.JavaScript['sensor_ledclear'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};
Blockly.JavaScript['sensor_ledpositionrgb_input'] = function(block) {
    var value_position = Blockly.JavaScript.valueToCode(block, 'POSITION', Blockly.JavaScript.ORDER_ATOMIC);
    var value_color = Blockly.JavaScript.valueToCode(block, 'COLOR', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.JavaScript['bot_eyergb_input'] = function(block) {
    var dropdown_led = block.getFieldValue('LED');
    var value_color = Blockly.JavaScript.valueToCode(block, 'COLOR', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};