'use strict';

goog.provide('Blockly.JavaScript.wheel');

goog.require('Blockly.JavaScript');


// If any new block imports any library, add that library name here.
Blockly.JavaScript.addReservedWords('wheel');

Blockly.JavaScript['wheel_control'] = function(block) {
    var dropdown_wheel = block.getFieldValue('WHEEL');
    var dropdown_direction = block.getFieldValue('DIRECTION');
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '{\"block\":\"wheel\",\"which\":\"' + dropdown_wheel + '\",\"dirction\":\"' + dropdown_direction + '\",\"speed\":\"' + dropdown_name + '\"}';
    return code;
};

Blockly.JavaScript['both_wheel_control'] = function(block) {
    var dropdown_direction = block.getFieldValue('DIRECTION');
    var dropdown_speed = block.getFieldValue('SPEED');
    // TODO: Assemble JavaScript into code variable.
    var code = '{\"block\":\"wheelboth\",\"which\":\"both\",\"dirction\":\"' + dropdown_direction + '\",\"speed\":\"' + dropdown_speed + '\"}';
    return code;
};

Blockly.JavaScript['wheel_stop_origin'] = function(block) {
    var dropdown_wheel = block.getFieldValue('WHEEL');
    // TODO: Assemble JavaScript into code variable.
    var code = '{\"block\":\"wheelstop\",\"which\":\"' + dropdown_wheel + '\"}';
    return code;
};

Blockly.JavaScript['wheel_control_new'] = function(block) {
    var dropdown_lspeed = block.getFieldValue('lspeed');
    var dropdown_rspeed = block.getFieldValue('rspeed');
    // TODO: Assemble JavaScript into code variable.
    var code = '{\"block\":\"wheelnew\",\"lspeed\":\"' + dropdown_lspeed + '\",\"rspeed\":\"' + dropdown_rspeed + '\"}';
    return code;
};

Blockly.JavaScript['wheel_control_new_left'] = function(block) {
    var dropdown_lspeed = block.getFieldValue('lspeed');
    // TODO: Assemble JavaScript into code variable.
    var code = '{\"block\":\"wheelnew\",\"lspeed\":\"' + dropdown_lspeed + '\",\"rspeed\":\"15\"}';
    return code;
};

Blockly.JavaScript['wheel_control_new_right'] = function(block) {
    var dropdown_rspeed = block.getFieldValue('rspeed');
    // TODO: Assemble JavaScript into code variable.
    var code = '{\"block\":\"wheelnew\",\"lspeed\":\"15\",\"rspeed\":\"' + dropdown_rspeed + '\"}';
    return code;
};

Blockly.JavaScript['wheel_speed'] = function(block) {
    var dropdown_1 = block.getFieldValue('WHICH');
    var dropdown_2 = block.getFieldValue('DIR');
    var dropdown_3 = block.getFieldValue('SPEED');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};
Blockly.JavaScript['wheel_stop'] = function(block) {
    var dropdown_name = block.getFieldValue('WHICH');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};
Blockly.JavaScript['wheel_speedall'] = function(block) {
    var dropdown_ldir = block.getFieldValue('LDIR');
    var dropdown_lspeed = block.getFieldValue('LSPEED');
    var dropdown_rdir = block.getFieldValue('RDIR');
    var dropdown_rspeed = block.getFieldValue('RSPEED');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};
Blockly.JavaScript['wheel_speedallcm'] = function(block) {
    var number_lspeed = block.getFieldValue('lspeed');
    var number_rspeed = block.getFieldValue('rspeed');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};
Blockly.JavaScript['wheel_speedallcms'] = function(block) {
    var number_lspeed = block.getFieldValue('lspeed');
    var number_rspeed = block.getFieldValue('rspeed');
    var number_name = block.getFieldValue('TIME');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};
Blockly.JavaScript['wheel_speedallcm_input'] = function(block) {
    var value_lspeed = Blockly.JavaScript.valueToCode(block, 'lspeed', Blockly.JavaScript.ORDER_ATOMIC);
    var value_rspeed = Blockly.JavaScript.valueToCode(block, 'rspeed', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...\n';
    return code;
};