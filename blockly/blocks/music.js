'use strict';

goog.provide('Blockly.Blocks.music'); // Deprecated
goog.provide('Blockly.Constants.Music'); // deprecated, 2018 April 5

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Constants.Music.HUE = 307;

Blockly.defineBlocksWithJsonArray([{
        "type": "music_playsong",
        "message0": "%3 %2 %{BKY_MUSIC_PLAY_SONG}",
        "args0": [{
                "type": "field_dropdown",
                "name": "MUSIC_LIST",
                "options": [
                    [
                        "%{BKY_MUSIC_SONG_1}",
                        "music1"
                    ],
                    [
                        "%{BKY_MUSIC_SONG_2}",
                        "music2"
                    ],
                    [
                        "%{BKY_MUSIC_SONG_3}",
                        "music3"
                    ],
                    [
                        "%{BKY_MUSIC_SONG_4}",
                        "music4"
                    ],
                    [
                        "%{BKY_MUSIC_SONG_5}",
                        "music5"
                    ],
                    [
                        "%{BKY_MUSIC_SONG_6}",
                        "music6"
                    ],
                    [{
                            "src": "../icons/random.svg",
                            "width": 16,
                            "height": 16,
                            "alt": "*"
                        },
                        "random"
                    ]
                ]
            }, {
                "type": "field_image",
                "src": "../icons/music.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "field_image",
                "src": "../icons/bot.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#8222C3",
        "tooltip": "",
        "helpUrl": ""
    }, {
        "type": "music_do_dance",
        "message0": "%3 %2 %{BKY_MUSIC_DO_DANCE}",
        "args0": [{
                "type": "field_dropdown",
                "name": "DANCE_LIST",
                "options": [
                    [
                        "%{BKY_MUSIC_DANCE_1}",
                        "dance1"
                    ],
                    [
                        "%{BKY_MUSIC_DANCE_2}",
                        "dance2"
                    ],
                    [
                        "%{BKY_MUSIC_DANCE_3}",
                        "dance3"
                    ],
                    [
                        "%{BKY_MUSIC_DANCE_4}",
                        "dance4"
                    ],
                    [
                        "%{BKY_MUSIC_DANCE_5}",
                        "dance5"
                    ],
                    [
                        "%{BKY_MUSIC_DANCE_6}",
                        "dance6"
                    ],
                    [{
                            "src": "../icons/random.svg",
                            "width": 16,
                            "height": 16,
                            "alt": "*"
                        },
                        "random"
                    ]
                ]
            }, {
                "type": "field_image",
                "src": "../icons/dance.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "field_image",
                "src": "../icons/bot.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#8222C3",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "music_playmelody",
        "message0": "%3 %2 %{BKY_MUSIC_PLAY_MELODY}",
        "args0": [{
                "type": "field_dropdown",
                "name": "MELODY_LIST",
                "options": [
                    [
                        "%{BKY_MUSIC_MELODY_1}",
                        "melody1"
                    ],
                    [
                        "%{BKY_MUSIC_MELODY_2}",
                        "melody2"
                    ],
                    [
                        "%{BKY_MUSIC_MELODY_3}",
                        "melody3"
                    ],
                    [
                        "%{BKY_MUSIC_MELODY_4}",
                        "melody4"
                    ],
                    [
                        "%{BKY_MUSIC_MELODY_5}",
                        "melody5"
                    ],
                    [
                        "%{BKY_MUSIC_MELODY_6}",
                        "melody6"
                    ],
                    [
                        "%{BKY_MUSIC_MELODY_7}",
                        "melody7"
                    ],
                    [
                        "%{BKY_MUSIC_MELODY_8}",
                        "melody8"
                    ],
                    [
                        "%{BKY_MUSIC_MELODY_9}",
                        "melody9"
                    ],
                    [
                        "%{BKY_MUSIC_MELODY_10}",
                        "melody10"
                    ]
                ]
            }, {
                "type": "field_image",
                "src": "../icons/melody.svg",
                "width": 36,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "field_image",
                "src": "../icons/bot.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#EE8A3A",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "music_alto",
        "message0": "%4 %3 %{BKY_MUSIC_PLAY_ALTO}",
        "args0": [{
                "type": "field_dropdown",
                "name": "TONE_LIST",
                "options": [
                    [
                        "%{BKY_MUSIC_TONE_1}",
                        "C3"
                    ],
                    [
                        "%{BKY_MUSIC_TONE_2}",
                        "D3"
                    ],
                    [
                        "%{BKY_MUSIC_TONE_3}",
                        "E3"
                    ],
                    [
                        "%{BKY_MUSIC_TONE_4}",
                        "F3"
                    ],
                    [
                        "%{BKY_MUSIC_TONE_5}",
                        "G3"
                    ],
                    [
                        "%{BKY_MUSIC_TONE_6}",
                        "A3"
                    ],
                    [
                        "%{BKY_MUSIC_TONE_7}",
                        "B3"
                    ]
                ]
            },
            {
                "type": "field_dropdown",
                "name": "METER",
                "options": [
                    [
                        "%{BKY_MUSIC_METER_1}",
                        "500"
                    ],
                    [
                        "%{BKY_MUSIC_METER_2}",
                        "1000"
                    ],
                    [
                        "%{BKY_MUSIC_METER_3}",
                        "1500"
                    ],
                    [
                        "%{BKY_MUSIC_METER_4}",
                        "2000"
                    ],
                    [
                        "%{BKY_MUSIC_METER_5}",
                        "2500"
                    ],
                    [
                        "%{BKY_MUSIC_METER_6}",
                        "3000"
                    ],
                    [{
                            "src": "../icons/random.svg",
                            "width": 16,
                            "height": 16,
                            "alt": "*"
                        },
                        "random"
                    ]
                ]
            }, {
                "type": "field_image",
                "src": "../icons/alto.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "field_image",
                "src": "../icons/bot.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#EE8A3A",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "music_treble",
        "message0": "%4 %3 %{BKY_MUSIC_PLAY_TREBLE}",
        "args0": [{
                "type": "field_dropdown",
                "name": "TONE_LIST",
                "options": [
                    [
                        "%{BKY_MUSIC_TONE_1}",
                        "C4"
                    ],
                    [
                        "%{BKY_MUSIC_TONE_2}",
                        "D4"
                    ],
                    [
                        "%{BKY_MUSIC_TONE_3}",
                        "E4"
                    ],
                    [
                        "%{BKY_MUSIC_TONE_4}",
                        "F4"
                    ],
                    [
                        "%{BKY_MUSIC_TONE_5}",
                        "G4"
                    ],
                    [
                        "%{BKY_MUSIC_TONE_6}",
                        "A4"
                    ],
                    [
                        "%{BKY_MUSIC_TONE_7}",
                        "B4"
                    ]
                ]
            },
            {
                "type": "field_dropdown",
                "name": "METER",
                "options": [
                    [
                        "%{BKY_MUSIC_METER_1}",
                        "500"
                    ],
                    [
                        "%{BKY_MUSIC_METER_2}",
                        "1000"
                    ],
                    [
                        "%{BKY_MUSIC_METER_3}",
                        "1500"
                    ],
                    [
                        "%{BKY_MUSIC_METER_4}",
                        "2000"
                    ],
                    [
                        "%{BKY_MUSIC_METER_5}",
                        "2500"
                    ],
                    [
                        "%{BKY_MUSIC_METER_6}",
                        "3000"
                    ],
                    [{
                            "src": "../icons/random.svg",
                            "width": 16,
                            "height": 16,
                            "alt": "*"
                        },
                        "random"
                    ]
                ]
            }, {
                "type": "field_image",
                "src": "../icons/treble.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "field_image",
                "src": "../icons/bot.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#EE8A3A",
        "tooltip": "",
        "helpUrl": ""
    }, {
        "type": "volume_set",
        "message0": "%3 %1 设置音量 %2 %%",
        "args0": [{
                "type": "field_image",
                "src": "../icons/vol.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "field_number",
                "name": "VOL",
                "value": 70,
                "min": 0,
                "max": 100,
                "precision": 1
            }, {
                "type": "field_image",
                "src": "../icons/bot.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#EE8A3A",
        "tooltip": "",
        "helpUrl": ""
    }
]);