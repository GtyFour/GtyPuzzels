'use strict';

goog.provide('Blockly.Python.motion');

goog.require('Blockly.Python');


// If any new block imports any library, add that library name here.
Blockly.Python.addReservedWords('motion');
Blockly.Python['motion_backward'] = function(block) {
    var number_step = block.getFieldValue('STEP');
    // TODO: Assemble Python into code variable.
    var code = 'matatabot.motion.backward(\"' + number_step + '\")\n';
    return code;
};

Blockly.Python['motion_forward'] = function(block) {
    var number_step = block.getFieldValue('STEP');
    // TODO: Assemble Python into code variable.
    var code = 'matatabot.motion.forward(\"' + number_step + '\")\n';
    return code;
};

Blockly.Python['motion_turnleft'] = function(block) {
    var dropdown_angle = block.getFieldValue('ANGLE');
    // TODO: Assemble Python into code variable.
    var code = 'matatabot.motion.turn_left(\"' + dropdown_angle + '\")\n';
    return code;
};

Blockly.Python['motion_turnright'] = function(block) {
    var dropdown_angle = block.getFieldValue('ANGLE');
    // TODO: Assemble Python into code variable.
    var code = 'matatabot.motion.turn_right(\"' + dropdown_angle + '\")\n';
    return code;
};
Blockly.Python['motion_left_optimize'] = function(block) {
    var dropdown_angle = block.getFieldValue('ANGLE');
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = '...\n';
    return code;
};

Blockly.Python['motion_right_optimize'] = function(block) {
    var dropdown_angle = block.getFieldValue('ANGLE');
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = '...\n';
    return code;
};

Blockly.Python['motion_straight_optimize'] = function(block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = '...\n';
    //    if value_name {
    //        code = '60_01'+'_00'
    //    }else{
    //        code = '60_01'+'_01'
    //    }
    return code;
};
Blockly.Python['motion_test_optimize'] = function(block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = '...\n';
    //    if value_name {
    //        code = '60_01'+'_00'
    //    }else{
    //        code = '60_01'+'_01'
    //    }
    return code;
};

Blockly.Python['motion_length'] = function(block) {
    var dropdown_name = block.getFieldValue('DIRECTION');
    var number_name = block.getFieldValue('LENGTH');
    // TODO: Assemble Python into code variable.
    var code = '...\n';
    switch (dropdown_name) {
        case "forward":
            code = 'matatabot.motion.forward(' + number_name + ')\n';
            break;
        case "backward":
            code = 'matatabot.motion.backward(' + number_name + ')\n';
            break;
        default:
            code = '...\n';
    }
    return code;
};
Blockly.Python['motion_do_action'] = function(block) {
    var dropdown_action_list = block.getFieldValue('ACTION_LIST');
    // TODO: Assemble Python into code variable.
    var code = 'matatabot.emotion.action(\"' + dropdown_action_list + '\")\n';
    return code;
};
Blockly.Python['motion_spin'] = function(block) {
    var dropdown_name = block.getFieldValue('DIRECTION');
    var angle_angel = block.getFieldValue('ANGEL');
    // TODO: Assemble Python into code variable.
    var code = '...\n';
    switch (dropdown_name) {
        case "clockwise":
            code = 'matatabot.motion.turn_right(' + angle_angel + ')\n';
            break;
        case "counterclockwise":
            code = 'matatabot.motion.turn_left(' + angle_angel + ')\n';
            break;
        default:
            code = '...\n';
    }
    return code;
};

Blockly.Python['motion_emotion'] = function(block) {
    var dropdown_name = block.getFieldValue('EMOTION');
    // TODO: Assemble Python into code variable.
    var code = '...\n';
    switch (dropdown_name) {
        case "look_around":
            code = 'matatabot.emotion.look_around()\n';
            break;
        case "smile":
            code = 'matatabot.emotion.smile()\n';
            break;
        case "wow":
            code = 'matatabot.emotion.wow()\n';
            break;
        case "naughty":
            code = 'matatabot.emotion.naughty()\n';
            break;
        case "hello":
            code = 'matatabot.emotion.hello()\n';
            break;
        case "proud":
            code = 'matatabot.emotion.proud()\n';
            break;
        case "yummy":
            code = 'matatabot.emotion.yummy()\n';
            break;
        case "uh_oh":
            code = 'matatabot.emotion.uh_oh()\n';
            break;
        case "hurt":
            code = 'matatabot.emotion.hurt()\n';
            break;
        case "shiver":
            code = 'matatabot.emotion.shiver()\n';
            break;
        case "startle":
            code = 'matatabot.emotion.startle()\n';
            break;
        case "zzz":
            code = 'matatabot.emotion.zzz()\n';
            break;
        case "wake_up":
            code = 'matatabot.emotion.wake_up()\n';
            break;
        case "sleepy":
            code = 'matatabot.emotion.sleepy()\n';
            break;
        case "dizzy":
            code = 'matatabot.emotion.dizzy()\n';
            break;
        case "goodbye":
            code = 'matatabot.emotion.goodbye()\n';
            break;
        case "no":
            code = 'matatabot.emotion.no()\n';
            break;
        case "yes":
            code = 'matatabot.emotion.yes()\n';
            break;
        case "angry":
            code = 'matatabot.emotion.angry()\n';
            break;
        case "crying":
            code = 'matatabot.emotion.crying()\n';
            break;
        default:
            code = '...\n';
    }
    return code;
};

Blockly.Python['motion_spinangle'] = function(block) {
    var number_angel = block.getFieldValue('ANGEL');
    // TODO: Assemble Python into code variable.
    var code = '...\n';
    code = 'matatabot.motion.move_angle(' + number_angel + ')\n';
    return code;
};
Blockly.Python['motion_length_input'] = function(block) {
    var value_input = Blockly.Python.valueToCode(block, 'input', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = '...\n';

    code = 'matatabot.motion.move_position(' + value_input + ')\n';
    return code;
};

Blockly.Python['motion_spinangle_input'] = function(block) {
    var value_input = Blockly.Python.valueToCode(block, 'input', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = '...\n';
    code = 'matatabot.motion.move_angle(' + value_input + ')\n';
    return code;
};