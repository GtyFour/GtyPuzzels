'use strict';

goog.provide('Blockly.Python.LED');

goog.require('Blockly.Python');


// If any new block imports any library, add that library name here.
Blockly.Python.addReservedWords('LED');

Blockly.Python['sensor_led'] = function(block) {
    var dropdown_led = block.getFieldValue('LED');
    var dropdown_color = block.getFieldValue('COLOR');
    var dropdown_level = block.getFieldValue('LEVEL');
    // TODO: Assemble Python into code variable.
    var code = '...\n';
    switch (dropdown_led) {
        case "plus":
            code = 'controller.leds.show_next(\"' + dropdown_color + '\",' + dropdown_level + ')\n';
            break;
        case "minus":
            code = 'controller.leds.show_previous(\"' + dropdown_color + '\",' + dropdown_level + ')\n';
            break;
        case "all":
            code = 'controller.leds.show_all(\"' + dropdown_color + '\",' + dropdown_level + ')\n';
            break;
        default:
            code = '...\n';
    }

    return code;
};

Blockly.Python['sensor_ledcyc'] = function(block) {
    var colour_12 = block.getFieldValue('12');
    var colour_1 = block.getFieldValue('1');
    var colour_2 = block.getFieldValue('2');
    var colour_11 = block.getFieldValue('11');
    var colour_3 = block.getFieldValue('3');
    var colour_10 = block.getFieldValue('10');
    var colour_4 = block.getFieldValue('4');
    var colour_9 = block.getFieldValue('9');
    var colour_5 = block.getFieldValue('5');
    var colour_8 = block.getFieldValue('8');
    var colour_7 = block.getFieldValue('7');
    var colour_6 = block.getFieldValue('6');
    // TODO: Assemble Python into code variable.
    var code = 'controller.leds.show_ring(\"' + colour_1 + '\",\"' + colour_2 + '\",\"' + colour_3 + '\",\"' + colour_4 + '\",\"' + colour_5 + '\",\"' + colour_6 + '\",\"' + colour_7 + '\",\"' + colour_8 + '\",\"' + colour_9 + '\",\"' + colour_10 + '\",\"' + colour_11 + '\",\"' + colour_12 + '\")\n';
    return code;
};

Blockly.Python['sensor_ledposition'] = function(block) {
    var dropdown_1 = block.getFieldValue('POSITION');
    var colour_1 = block.getFieldValue('COLOR');
    var dropdown_2 = block.getFieldValue('BRIGHTNESS');
    // TODO: Assemble Python into code variable.
    var code = '...\n';
    var number_r = 'R';
    var number_g = 'G';
    var number_b = 'B';
    switch (colour_1) {
        case "white":
            number_r = '255';
            number_g = '255';
            number_b = '255';
            break;
        case "red":
            number_r = '255';
            number_g = '0';
            number_b = '0';
            break;
        case "yellow":
            number_r = '255';
            number_g = '255';
            number_b = '0';
            break;
        case "green":
            number_r = '0';
            number_g = '255';
            number_b = '0';
            break;
        case "blue":
            number_r = '0';
            number_g = '0';
            number_b = '255';
            break;
        case "purple":
            number_r = '255';
            number_g = '0';
            number_b = '255';
            break;
        case "black":
            number_r = '0';
            number_g = '0';
            number_b = '0';
            break;
        default:
            code = '...\n';
    }

    var br = 0;
    if (dropdown_2 == "random") {
        br = Math.round(Math.random() * 5 + 1);
    } else {
        br = Number(dropdown_2);
    }
    var brightness = br * br * br;
    brightness = brightness / 216;

    number_r = Math.round(number_r * brightness);
    number_g = Math.round(number_g * brightness);
    number_b = Math.round(number_b * brightness);

    switch (dropdown_1) {
        case "0":
            code = 'controller.leds.show_all(\"' + colour_1 + '\",\"' + dropdown_2 + '\")\n';
            break;
        default:
            code = 'controller.leds.show_single(' + dropdown_1 + ',' + number_r + ',' + number_g + ',' + number_b + ')\n';
    }
    return code;
};


Blockly.Python['sensor_ledallrgb'] = function(block) {
    var number_r = block.getFieldValue('R');
    var number_g = block.getFieldValue('G');
    var number_b = block.getFieldValue('B');
    // TODO: Assemble Python into code variable.
    var code = 'matatabot.led.show_all(' + number_r + ',' + number_g + ',' + number_b + ')\n';
    return code;
};

Blockly.Python['sensor_ledall'] = function(block) {
    var dropdown_color = block.getFieldValue('COLOR');
    var dropdown_level = block.getFieldValue('LEVEL');
    // TODO: Assemble Python into code variable.
    var code = '...\n';
    return code;
};
Blockly.Python['sensor_ledrgb'] = function(block) {
    var dropdown_led = block.getFieldValue('LED');
    var number_r = block.getFieldValue('R');
    var number_g = block.getFieldValue('G');
    var number_b = block.getFieldValue('B');
    // TODO: Assemble Python into code variable.
    var code = 'controller.leds.show_single(' + dropdown_led + ',' + number_r + ',' + number_g + ',' + number_b + ')\n';
    return code;
};
Blockly.Python['sensor_ledpositionrgb'] = function(block) {
    var dropdown_position = block.getFieldValue('POSITION');
    var number_r = block.getFieldValue('R');
    var number_g = block.getFieldValue('G');
    var number_b = block.getFieldValue('B');
    // TODO: Assemble Python into code variable.
    var code = 'controller.leds.show_single(\"' + dropdown_position + '\",' + number_r + ',' + number_g + ',' + number_b + ')\n';
    return code;
};

Blockly.Python['bot_led'] = function(block) {
    var dropdown_led = block.getFieldValue('LED');
    var dropdown_color = block.getFieldValue('COLOR');
    var dropdown_level = block.getFieldValue('LEVEL');
    // TODO: Assemble Python into code variable.
    var number_r = 'R';
    var number_g = 'G';
    var number_b = 'B';
    switch (dropdown_color) {
        case "white":
            number_r = '255';
            number_g = '255';
            number_b = '255';
            break;
        case "red":
            number_r = '255';
            number_g = '0';
            number_b = '0';
            break;
        case "yellow":
            number_r = '255';
            number_g = '255';
            number_b = '0';
            break;
        case "green":
            number_r = '0';
            number_g = '255';
            number_b = '0';
            break;
        case "blue":
            number_r = '0';
            number_g = '0';
            number_b = '255';
            break;
        case "purple":
            number_r = '255';
            number_g = '0';
            number_b = '255';
            break;
        case "black":
            number_r = '0';
            number_g = '0';
            number_b = '0';
            break;
        default:
            code = '...\n';
    }
    var br = 0;
    if (dropdown_level == "random") {
        br = Math.round(Math.random() * 5 + 1);
    } else {
        br = Number(dropdown_level);
    }
    var brightness = br * br * br;
    brightness = brightness / 216;

    number_r = Math.round(number_r * brightness);
    number_g = Math.round(number_g * brightness);
    number_b = Math.round(number_b * brightness);

    var code = '...';
    switch (dropdown_led) {
        case "all":
            code = 'matatabot.leds.show_all(' + number_r + ',' + number_g + ',' + number_b + ')\n';
            break;
        case "left":
            code = 'matatabot.leds.show_single(\"left\",' + number_r + ',' + number_g + ',' + number_b + ')\n';
            break;
        case "right":
            code = 'matatabot.leds.show_single(\"right\",' + number_r + ',' + number_g + ',' + number_b + ')\n';
            break;
        default:
            code = '...\n';
    }
    return code;
};
Blockly.Python['bot_eyergb'] = function(block) {
    var dropdown_led = block.getFieldValue('LED');
    var number_r = block.getFieldValue('R');
    var number_g = block.getFieldValue('G');
    var number_b = block.getFieldValue('B');
    // TODO: Assemble Python into code variable.
    var code = '...';
    switch (dropdown_led) {
        case "all":
            code = 'matatabot.leds.show_all(' + number_r + ',' + number_g + ',' + number_b + ')\n';
            break;
        case "left":
            code = 'matatabot.leds.show_single(\"left\",' + number_r + ',' + number_g + ',' + number_b + ')\n';
            break;
        case "right":
            code = 'matatabot.leds.show_single(\"right\",' + number_r + ',' + number_g + ',' + number_b + ')\n';
            break;
        default:
            code = '...\n';
    }
    return code;
};
Blockly.Python['sensor_ledanimation'] = function(block) {
    var dropdown_animation = block.getFieldValue('ANIMATION');
    // TODO: Assemble Python into code variable.
    var code = 'controller.leds.show_animation(\"' + dropdown_animation + '\")\n';
    return code;
};
Blockly.Python['matatabot_ledclear'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'matatabot.leds.clear()\n';
    return code;
};
Blockly.Python['sensor_ledclear'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'controller.leds.clear()\n';
    return code;
};
Blockly.Python['sensor_ledpositionrgb_input'] = function(block) {
    var value_position = Blockly.Python.valueToCode(block, 'POSITION', Blockly.Python.ORDER_ATOMIC);
    var value_color = Blockly.Python.valueToCode(block, 'COLOR', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = '...';
    code = 'controller.leds.show_single_hex(' + value_position + ',' + value_color + ')\n';
    return code;
};

Blockly.Python['bot_eyergb_input'] = function(block) {
    var dropdown_led = block.getFieldValue('LED');
    var value_color = Blockly.Python.valueToCode(block, 'COLOR', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = '...';
    switch (dropdown_led) {
        case "all":
            code = 'matatabot.leds.show_all_hex(' + value_color + ')\n';
            break;
        case "left":
            code = 'matatabot.leds.show_single_hex(\"left\",' + value_color + ')\n';
            break;
        case "right":
            code = 'matatabot.leds.show_single_hex(\"right\",' + value_color + ')\n';
            break;
        default:
            code = '...\n';
    }
    return code;
};