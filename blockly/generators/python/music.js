'use strict';

goog.provide('Blockly.Python.music');

goog.require('Blockly.Python');


// If any new block imports any library, add that library name here.
Blockly.Python.addReservedWords('music');

Blockly.Python['music_playsong'] = function(block) {
    var dropdown_song_list = block.getFieldValue('MUSIC_LIST');
    // TODO: Assemble Python into code variable.
    var code = 'matatabot.speaker.play_melody_until_done(\"' + dropdown_song_list + '\")\n';
    return code;
};

Blockly.Python['music_do_dance'] = function(block) {
    var dropdown_dance_list = block.getFieldValue('DANCE_LIST');
    // TODO: Assemble Python into code variable.
    var code = 'matatabot.emotion.dance(\"' + dropdown_dance_list + '\")\n';
    return code;
};

Blockly.Python['music_playmelody'] = function(block) {
    var dropdown_melody_list = block.getFieldValue('MELODY_LIST');
    // TODO: Assemble Python into code variable.
    var code = 'matatabot.speaker.play_melody(\"' + dropdown_melody_list + '\")\n';
    return code;
};

Blockly.Python['music_alto'] = function(block) {
    var dropdown_tone_list = block.getFieldValue('TONE_LIST');
    var dropdown_meter = block.getFieldValue('METER');
    // TODO: Assemble Python into code variable.
    var meter_temp = 0;
    if (dropdown_meter == "random") {
        meter_temp = Math.round(Math.random() * 5 + 1) * 500;
    } else {
        meter_temp = Number(dropdown_meter);
    }
    var code = 'matatabot.speaker.play_note(\"' + dropdown_tone_list + '\", ' + meter_temp + ')\n';
    return code;
};

Blockly.Python['music_treble'] = function(block) {
    var dropdown_tone_list = block.getFieldValue('TONE_LIST');
    var dropdown_meter = block.getFieldValue('METER');
    // TODO: Assemble Python into code variable.
    var meter_temp = 0;
    if (dropdown_meter == "random") {
        meter_temp = Math.round(Math.random() * 5 + 1) * 500;
    } else {
        meter_temp = Number(dropdown_meter);
    }
    var code = 'matatabot.speaker.play_note(\"' + dropdown_tone_list + '\", ' + meter_temp + ')\n';
    return code;
};

Blockly.Python['volume_set'] = function(block) {
    var number_name = block.getFieldValue('VOL');
    // TODO: Assemble Python into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};