'use strict';

goog.provide('Blockly.JavaScript.music');

goog.require('Blockly.JavaScript');


// If any new block imports any library, add that library name here.
Blockly.JavaScript.addReservedWords('music');

Blockly.JavaScript['music_playsong'] = function(block) {
    var dropdown_music_list = block.getFieldValue('MUSIC_LIST');
    // TODO: Assemble JavaScript into code variable.
    var code = '{\"block\":\"playmusic\",\"number\":\"' + dropdown_music_list + '\"}';
    return code;
  };
Blockly.JavaScript['music_do_dance'] = function(block) {
    var dropdown_dance_list = block.getFieldValue('DANCE_LIST');
    // TODO: Assemble JavaScript into code variable.
    var code = '{\"block\":\"dodance\",\"number\":\"' + dropdown_dance_list + '\"}';
    return code;
};

Blockly.JavaScript['music_playmelody'] = function(block) {
    var dropdown_melody_list = block.getFieldValue('MELODY_LIST');
    // TODO: Assemble JavaScript into code variable.
    var code = '{\"block\":\"playmelody\",\"number\":\"' + dropdown_melody_list + '\"}';
    return code;
};

Blockly.JavaScript['music_alto'] = function(block) {
    var dropdown_tone_list = block.getFieldValue('TONE_LIST');
    var dropdown_meter = block.getFieldValue('METER');
    // TODO: Assemble JavaScript into code variable.
    var code = '{\"block\":\"playalto\",\"tone\":\"' + dropdown_tone_list + '\",\"meter\":\"'+ dropdown_meter + '\"}';
    return code;
};

Blockly.JavaScript['music_treble'] = function(block) {
    var dropdown_tone_list = block.getFieldValue('TONE_LIST');
    var dropdown_meter = block.getFieldValue('METER');
    // TODO: Assemble JavaScript into code variable.
    var code = '{\"block\":\"playtreble\",\"tone\":\"' + dropdown_tone_list + '\",\"meter\":\"'+ dropdown_meter + '\"}';
    return code;
};

Blockly.JavaScript['volume_set'] = function(block) {
    var number_name = block.getFieldValue('VOL');
    // TODO: Assemble JavaScript into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  

