'use strict';

goog.provide('Blockly.JavaScript.motion');

goog.require('Blockly.JavaScript');


// If any new block imports any library, add that library name here.
Blockly.JavaScript.addReservedWords('motion');

Blockly.JavaScript['motion_left_optimize'] = function(block) {
    var dropdown_angle = block.getFieldValue('ANGLE');
    var statements_do1 = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '{\"block\":\"optimizeleft\",\"angle\":\"' + dropdown_angle + '\",\"option\":\"'+ statements_do1 + '\"}';
    return code;
  };
  
  Blockly.JavaScript['motion_right_optimize'] = function(block) {
    var dropdown_angle = block.getFieldValue('ANGLE');
    var statements_do1 = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '{\"block\":\"optimizeright\",\"angle\":\"' + dropdown_angle + '\",\"option\":\"'+ statements_do1 + '\"}';
    return code;
  };
  
  Blockly.JavaScript['motion_straight_optimize'] = function(block) {
    var value_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable
      var code = '{\"block\":\"optimizeline\",\"option\":\"' + value_name + '\"}';
      return code;
  };
  Blockly.JavaScript['motion_test_optimize'] = function(block) {
      var value_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable
      var code = '{\"block\":\"optimizetest\",\"option\":\"' + value_name + '\"}';
      return code;
  };
  
  Blockly.JavaScript['motion_backward'] = function(block) {
    var number_step = block.getFieldValue('STEP');
    // TODO: Assemble JavaScript into code variable.
    var code = '{\"block\":\"movebackward\",\"step\":\"' + number_step + '\"}';
    return code;
  };
  
  Blockly.JavaScript['motion_forward'] = function(block) {
    var number_step = block.getFieldValue('STEP');
    // TODO: Assemble JavaScript into code variable.
      var code = '{\"block\":\"moveforward\",\"step\":\"' + number_step + '\"}';
      return code;
  };
  
  Blockly.JavaScript['motion_turnleft'] = function(block) {
    var dropdown_angle = block.getFieldValue('ANGLE');
    // TODO: Assemble JavaScript into code variable.
      var code = '{\"block\":\"turnleft\",\"angle\":\"' + dropdown_angle + '\"}';
      return code;
  };
  
  Blockly.JavaScript['motion_turnright'] = function(block) {
    var dropdown_angle = block.getFieldValue('ANGLE');
    // TODO: Assemble JavaScript into code variable.
      var code = '{\"block\":\"turnright\",\"angle\":\"' + dropdown_angle + '\"}';
      return code;
  };


  Blockly.JavaScript['motion_do_action'] = function(block) {
    var dropdown_action_list = block.getFieldValue('ACTION_LIST');
    // TODO: Assemble JavaScript into code variable.
    var code = '{\"block\":\"doaction\",\"number\":\"' + dropdown_action_list + '\"}';
    return code;
};

Blockly.JavaScript['motion_length'] = function(block) {
  var dropdown_name = block.getFieldValue('DIRECTION');
  var number_name = block.getFieldValue('LENGTH');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['motion_spin'] = function(block) {
  var dropdown_name = block.getFieldValue('DIRECTION');
  var angle_angel = block.getFieldValue('ANGEL');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['motion_emotion'] = function(block) {
  var dropdown_name = block.getFieldValue('EMOTION');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['motion_spinangle'] = function(block) {
  var number_angel = block.getFieldValue('ANGEL');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['motion_length_input'] = function(block) {
  var dropdown_dir = block.getFieldValue('dir');
  var value_input = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...\n';
  return code;
};

Blockly.JavaScript['motion_spinangle_input'] = function(block) {
  var value_input = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...\n';
  return code;
};