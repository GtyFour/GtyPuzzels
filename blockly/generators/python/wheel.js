'use strict';

goog.provide('Blockly.Python.wheel');

goog.require('Blockly.Python');


// If any new block imports any library, add that library name here.
Blockly.Python.addReservedWords('wheel');

Blockly.Python['wheel_control'] = function(block) {
    var dropdown_wheel = block.getFieldValue('WHEEL');
    var dropdown_direction = block.getFieldValue('DIRECTION');
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble Python into code variable.
    var code = '...\n';
    return code;
};

Blockly.Python['both_wheel_control'] = function(block) {
    var dropdown_direction = block.getFieldValue('DIRECTION');
    var dropdown_speed = block.getFieldValue('SPEED');
    // TODO: Assemble Python into code variable.
    var code = '...\n';
    return code;
};

Blockly.Python['wheel_stop_origin'] = function(block) {
    var dropdown_wheel = block.getFieldValue('WHEEL');
    // TODO: Assemble Python into code variable.
    var code = '...\n';
    return code;
};

Blockly.Python['wheel_control_new'] = function(block) {
    var dropdown_lspeed = block.getFieldValue('lspeed');
    var dropdown_rspeed = block.getFieldValue('rspeed');
    // TODO: Assemble Python into code variable.
    var code = '...\n';
    return code;
};
Blockly.Python['wheel_control_new_left'] = function(block) {
    var dropdown_lspeed = block.getFieldValue('lspeed');
    // TODO: Assemble Python into code variable.
    var code = '...\n';
    return code;
};
Blockly.Python['wheel_control_new_right'] = function(block) {
    var dropdown_rspeed = block.getFieldValue('rspeed');
    // TODO: Assemble Python into code variable.
    var code = '...\n';
    return code;
};

Blockly.Python['wheel_speed'] = function(block) {
    var dropdown_1 = block.getFieldValue('WHICH');
    var dropdown_2 = block.getFieldValue('DIR');
    var dropdown_3 = block.getFieldValue('SPEED');
    // TODO: Assemble Python into code variable.
    var code = '...\n';
    return code;
};
Blockly.Python['wheel_stop'] = function(block) {
    var dropdown_name = block.getFieldValue('WHICH');
    // TODO: Assemble Python into code variable.
    var code = 'matatabot.motion.stop(\"' + dropdown_name + '\")\n';
    return code;
};
Blockly.Python['wheel_speedall'] = function(block) {
    var dropdown_ldir = block.getFieldValue('ldir');
    var dropdown_lspeed = block.getFieldValue('lspeed');
    var dropdown_rdir = block.getFieldValue('rdir');
    var dropdown_rspeed = block.getFieldValue('rspeed');
    var left_speed, right_speed;
    var code = '...';
    if (dropdown_rspeed == "gear_null") {
        if (dropdown_lspeed == "gear_null") {
            code = '\n';
            return code;
        } else {
            switch (dropdown_ldir) {
                case "forward":
                    if (dropdown_lspeed == "random") {
                        left_speed = "gear_random";
                    } else {
                        left_speed = dropdown_lspeed;
                    }
                    break;
                case "backward":
                    if (dropdown_lspeed == "random") {
                        left_speed = "backgear_random";
                    } else {
                        left_speed = 'back' + dropdown_lspeed;
                    }
                    break;
                default:
                    left_speed = '0';
            }
            code = 'matatabot.motion.move_left_speed(\"' + left_speed + '\")\n';
            return code;
        }
    } else {
        if (dropdown_lspeed == "gear_null") {
            switch (dropdown_rdir) {
                case "forward":
                    if (dropdown_rspeed == "random") {
                        right_speed = "gear_random";
                    } else {
                        right_speed = dropdown_rspeed;
                    }
                    break;
                case "backward":
                    if (dropdown_rspeed == "random") {
                        right_speed = "backgear_random";
                    } else {
                        right_speed = 'back' + dropdown_rspeed;
                    }
                    break;
                default:
                    right_speed = '0';
            }
            code = 'matatabot.motion.move_right_speed(\"' + right_speed + '\")\n';
            return code;
        } else {
            switch (dropdown_ldir) {
                case "forward":
                    if (dropdown_lspeed == "random") {
                        left_speed = "gear_random";
                    } else {
                        left_speed = dropdown_lspeed;
                    }
                    break;
                case "backward":
                    if (dropdown_lspeed == "random") {
                        left_speed = "backgear_random";
                    } else {
                        left_speed = 'back' + dropdown_lspeed;
                    }
                    break;
                default:
                    left_speed = '0';
            }
            switch (dropdown_rdir) {
                case "forward":
                    if (dropdown_rspeed == "random") {
                        right_speed = "gear_random";
                    } else {
                        right_speed = dropdown_rspeed;
                    }
                    break;
                case "backward":
                    if (dropdown_rspeed == "random") {
                        right_speed = "backgear_random";
                    } else {
                        right_speed = 'back' + dropdown_rspeed;
                    }
                    break;
                default:
                    right_speed = '0';
            }
            // TODO: Assemble Python into code variable.
            code = 'matatabot.motion.move_speed(\"' + left_speed + '\",\"' + right_speed + '\")\n';
            return code;
        }
    }

};
//147 = 10cm
Blockly.Python['wheel_speedallcm'] = function(block) {
    var number_lspeed = block.getFieldValue('lspeed');
    var number_rspeed = block.getFieldValue('rspeed');
    // TODO: Assemble Python into code variable.
    var code = 'matatabot.motion.move_speed(' + number_lspeed + ',' + number_rspeed + ')\n';
    return code;
};
Blockly.Python['wheel_speedallcms'] = function(block) {
    var number_lspeed = block.getFieldValue('lspeed');
    var number_rspeed = block.getFieldValue('rspeed');
    var number_name = block.getFieldValue('TIME');
    // TODO: Assemble Python into code variable.
    var code = '...\n';
    return code;
};
Blockly.Python['wheel_speedallcm_input'] = function(block) {
    var value_lspeed = Blockly.Python.valueToCode(block, 'lspeed', Blockly.Python.ORDER_ATOMIC);
    var value_rspeed = Blockly.Python.valueToCode(block, 'rspeed', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.

    var code = '...';
    code = 'matatabot.motion.move_speed(' + value_lspeed + ',' + value_rspeed + ')\n';
    return code;
};