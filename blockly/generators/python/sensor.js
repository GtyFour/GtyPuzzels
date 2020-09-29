'use strict';

goog.provide('Blockly.Python.sensor');

goog.require('Blockly.Python');


// If any new block imports any library, add that library name here.
Blockly.Python.addReservedWords('sensor');

Blockly.Python['sensor_origin'] = function(block) {
    var dropdown_condition = block.getFieldValue('CONDITION');
    // TODO: Assemble Python into code variable.
    var code = 'controller.event.wait_until(\"' + dropdown_condition + '\")\n';
    return code;
};

Blockly.Python['sensor_send_data'] = function(block) {
    var dropdown_number = block.getFieldValue('NUMBER');
    var br = 0;
    if (dropdown_number == "random") {
        br = Math.round(Math.random() * 5 + 1);
    } else {
        br = Number(dropdown_number);
    }
    // TODO: Assemble Python into code variable.
    var code = 'controller.message.send(' + br + ')\n';
    return code;
};

Blockly.Python['sensor_wait_data'] = function(block) {
    var dropdown_number = block.getFieldValue('NUMBER');
    // TODO: Assemble Python into code variable.
    var code = 'controller.message.wait(\"' + dropdown_number + '\")\n';
    return code;
};

Blockly.Python['get_channel_rgb'] = function(block) {
    var dropdown_name = block.getFieldValue('CHANNEL');
    // TODO: Assemble Python into code variable.
    var color;
    if (dropdown_name == 'G') {
        color = 'green';
    } else if (dropdown_name == 'R') {
        color = 'red';
    } else if (dropdown_name == 'B') {
        color = 'blue';
    }
    var code = 'controller.sensor.get_rgb_value(\"' + color + '\")';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['get_axis'] = function(block) {
    var dropdown_name = block.getFieldValue('AXIS');
    // TODO: Assemble Python into code variable.
    var code = 'controller.motion_sensor.get_acceleration(\"' + dropdown_name + '\")';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['get_angle'] = function(block) {
    var dropdown_name = block.getFieldValue('ANGLE');
    // TODO: Assemble Python into code variable.
    var code = '...';
    switch (dropdown_name) {
        case "pitch":
            code = 'controller.motion_sensor.get_pitch()';
            break;
        case "roll":
            code = 'controller.motion_sensor.get_roll()';
            break;
        case "yaw":
            code = 'controller.motion_sensor.get_yaw()';
            break;
        default:
            code = '...\n';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};




Blockly.Python['accelerate_check'] = function(block) {
    var dropdown_condition = block.getFieldValue('CONDITION');
    // TODO: Assemble Python into code variable.
    var code = '...';
    switch (dropdown_condition) {
        case "shake":
            code = 'controller.motion_sensor.is_shaked()';
            break;
        case "tilted_left":
            code = 'controller.motion_sensor.is_tilted_left()';
            break;
        case "tilted_right":
            code = 'controller.motion_sensor.is_tilted_right()';
            break;
        case "tilted_forward":
            code = 'controller.motion_sensor.is_tilted_forward()';
            break;
        case "tilted_backward":
            code = 'controller.motion_sensor.is_tilted_backward()';
            break;
        case "fall":
            code = 'controller.motion_sensor.is_fall()';
            break;
        case "face_up":
            code = 'controller.motion_sensor.is_halo_up()';
            break;
        case "face_down":
            code = 'controller.motion_sensor.is_halo_down()';
            break;
        default:
            code = '...\n';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['rgb_check'] = function(block) {
    var dropdown_condition = block.getFieldValue('CONDITION');
    // TODO: Assemble Python into code variable.
    var code = "...";
    switch (dropdown_condition) {
        case "red":
            code = 'controller.color_sensor.is_red()';
            break;
        case "yellow":
            code = 'controller.color_sensor.is_yellow()';
            break;
        case "white":
            code = 'controller.color_sensor.is_white()';
            break;
        case "blue":
            code = 'controller.color_sensor.is_blue()';
            break;
        case "green":
            code = 'controller.color_sensor.is_green()';
            break;
        case "purple":
            code = 'controller.color_sensor.is_purple()';
            break;
        case "black":
            code = 'controller.color_sensor.is_black()';
            break;
        default:
            code = '...\n';
    }
    // var code = 'controller.color_sensor.is_color(\"' + dropdown_condition + '\")';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['btn_check'] = function(block) {
    var dropdown_condition = block.getFieldValue('CONDITION');
    // TODO: Assemble Python into code variable.
    var code = "...";
    switch (dropdown_condition) {
        case "forward":
            code = 'controller.button.is_forward_btn_pressed()';
            break;
        case "backward":
            code = 'controller.button.is_backward_btn_pressed()';
            break;
        case "turnleft":
            code = 'controller.button.is_turnleft_btn_pressed()';
            break;
        case "turnright":
            code = 'controller.button.is_turnright_btn_pressed()';
            break;
        case "play":
            code = 'controller.button.is_play_btn_pressed()';
            break;
        case "delete":
            code = 'controller.button.is_delete_btn_pressed()';
            break;
        case "music":
            code = 'controller.button.is_music_btn_pressed()';
            break;
        default:
            code = '...\n';
    }
    // var code = 'controller.button.is_pressed(\"' + dropdown_condition + '\")';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['sound_check'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'controller.sound_sensor.is_sound_detected()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['bump_check'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'controller.infrared_sensor.is_obstacle_ahead()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['data_check'] = function(block) {
    var dropdown_condition = block.getFieldValue('CONDITION');
    // TODO: Assemble Python into code variable.
    var code = "...";
    switch (dropdown_condition) {
        case "1":
            code = 'controller.message.is_data_one_received()';
            break;
        case "2":
            code = 'controller.message.is_data_two_received()';
            break;
        case "3":
            code = 'controller.message.is_data_three_received()';
            break;
        case "4":
            code = 'controller.message.is_data_four_received()';
            break;
        case "5":
            code = 'controller.message.is_data_five_received()';
            break;
        case "6":
            code = 'controller.message.is_data_six_received()';
            break;
        default:
            code = '...\n';
    }
    // var code = 'controller.message.is_receive(\"' + dropdown_condition + '\")';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['get_brightness'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'controller.color_sensor.get_light_strength()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['get_shaking_value'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'controller.motion_sensor.get_shaked_strength()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['brightness_check'] = function(block) {
    var dropdown_condition = block.getFieldValue('CONDITION');
    // TODO: Assemble Python into code variable.
    var code = "...";
    switch (dropdown_condition) {
        case "brightness":
            code = 'controller.color_sensor.is_bright()';
            break;
        case "darkness":
            code = 'controller.color_sensor.is_dark()';
            break;
        default:
            code = '...\n';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    var order = Blockly.Python.ORDER_FUNCTION_CALL;
    return [code, order];
};
// Blockly.Python['sensor_waituntil'] = function (block) {
//   var value_name = Blockly.Python.valueToCode(block, 'UNTIL', Blockly.Python.ORDER_FUNCTION_CALL);
//   // TODO: Assemble Python into code variable.
//   // var conditionCode = Blockly.Python.statementToCode(block, 'CONDITION');
//   var def = "from controller.func import func";
//   Blockly.Python.definitions_[def] = def;
//   var func_name = "";
//   switch (value_name) {
//     case 'controller.button.is_pressed("forward")':
//       func_name = 'forward';
//       break;
//     case 'controller.button.is_pressed("turnleft")':
//       func_name = 'turnleft';
//       break;
//     case 'controller.button.is_pressed("turnright")':
//       func_name = 'turnright';
//       break;
//     case 'controller.button.is_pressed("backward")':
//       func_name = 'backward';
//       break;
//     case 'controller.button.is_pressed("play")':
//       func_name = 'play';
//       break;
//     case 'controller.button.is_pressed("delete")':
//       func_name = 'delete';
//       break;
//     case 'controller.button.is_pressed("music")':
//       func_name = 'music';
//       break;
//     case 'controller.color_sensor.is_color("white")':
//       func_name = 'white';
//       break;
//     case 'controller.color_sensor.is_color("red")':
//       func_name = 'red';
//       break;
//     case 'controller.color_sensor.is_color("yellow")':
//       func_name = 'yellow';
//       break;
//     case 'controller.color_sensor.is_color("green")':
//       func_name = 'green';
//       break;
//     case 'controller.color_sensor.is_color("blue")':
//       func_name = 'blue';
//       break;
//     case 'controller.color_sensor.is_color("pink")':
//       func_name = 'pink';
//       break;
//     case 'controller.color_sensor.is_color("black")':
//       func_name = 'black';
//       break;
//     default: func_name = 'null';
//   }
//   var code = '';
//   if (func_name == 'null'){
//     code = 'controller.sensor.wait_until(' + value_name + ')\n';
//   }else{
//     code = 'func_' + func_name + '=func(' + value_name + ',\"'+func_name+'\")\ncontroller.sensor.wait_until(func_' + func_name + ')\n';
//   }
//   return code;
// };
Blockly.Python['sensor_waituntil'] = function(block) {
    var value_name = Blockly.Python.valueToCode(block, 'UNTIL', Blockly.Python.ORDER_FUNCTION_CALL);
    // TODO: Assemble Python into code variable.
    // var conditionCode = Blockly.Python.statementToCode(block, 'CONDITION');
    if (value_name == '') {
        value_name = 'None';
    } else {

        value_name = value_name.replace("()", "");　
    }
    var code = 'controller.sensor.wait_until(' + value_name + ')\n';
    return code;
};
Blockly.Python['clear_check'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'controller.infrared_sensor.is_not_obstacle_ahead()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['get_data'] = function(block) {
    var code = 'controller.message.recived()';
    // TODO: Assemble Python into code variable.
    return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['check_data'] = function(block) {
    var dropdown_number = block.getFieldValue('NUMBER');
    // TODO: Assemble Python into code variable.
    var br = 0;
    if (dropdown_number == "random") {
        br = Math.round(Math.random() * 5 + 1);
    } else {
        br = Number(dropdown_number);
    }
    var code = 'controller.message.wait_' + String(br) + '()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};