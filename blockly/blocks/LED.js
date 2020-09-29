'use strict';

goog.provide('Blockly.Blocks.LED'); // Deprecated
goog.provide('Blockly.Constants.LED'); // deprecated, 2018 April 5

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Constants.LED.HUE = 285;

Blockly.defineBlocksWithJsonArray([{
        "type": "bot_led",
        "message0": "%6 %4 %5 %{BKY_LED_BOTEYE}",
        "args0": [{
                "type": "field_dropdown",
                "name": "LED",
                "options": [
                    [
                        "%{BKY_DIR_LEFT}",
                        "left"
                    ],
                    [
                        "%{BKY_DIR_RIGHT}",
                        "right"
                    ],
                    [
                        "%{BKY_DIR_ALL}",
                        "all"
                    ]
                ]
            },
            {
                "type": "field_dropdown",
                "name": "COLOR",
                "options": [
                    [
                        "%{BKY_MATA_COLOR_WHITE}",
                        "white"
                    ],
                    [
                        "%{BKY_MATA_COLOR_RED}",
                        "red"
                    ],
                    [
                        "%{BKY_MATA_COLOR_YELLOW}",
                        "yellow"
                    ],
                    [
                        "%{BKY_MATA_COLOR_GREEN}",
                        "green"
                    ],
                    [
                        "%{BKY_MATA_COLOR_BLUE}",
                        "blue"
                    ],
                    [
                        "%{BKY_MATA_COLOR_PURPLE}",
                        "purple"
                    ],
                    [
                        "%{BKY_MATA_COLOR_BLACK}",
                        "black"
                    ]
                ]
            },
            {
                "type": "field_dropdown",
                "name": "LEVEL",
                "options": [
                    [
                        "1",
                        "1"
                    ],
                    [
                        "2",
                        "2"
                    ],
                    [
                        "3",
                        "3"
                    ],
                    [
                        "4",
                        "4"
                    ],
                    [
                        "5",
                        "5"
                    ],
                    [
                        "6",
                        "6"
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
                "src": "../icons/right_eye.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            }, {
                "type": "field_image",
                "src": "../icons/left_eye.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
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
        "colour": "#8222C3",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "bot_eyergb_input",
        "message0": "%{BKY_LED_BOTEYE_INPUT}",
        "args0": [{
                "type": "field_image",
                "src": "../icons/right_eye.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "field_image",
                "src": "../icons/left_eye.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "field_dropdown",
                "name": "LED",
                "options": [
                    [
                        "%{BKY_DIR_LEFT}",
                        "left"
                    ],
                    [
                        "%{BKY_DIR_RIGHT}",
                        "right"
                    ],
                    [
                        "%{BKY_DIR_ALL}",
                        "all"
                    ]
                ]
            },
            {
                "type": "input_value",
                "name": "COLOR",
                "check": "Colour"
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
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#8222C3",
        "tooltip": "",
        "helpUrl": ""
    }, {
        "type": "sensor_ledposition",
        "message0": "%{BKY_LED_SENSOR_POSITION}",
        "args0": [{
                "type": "field_image",
                "src": "../icons/controller.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "field_dropdown",
                "name": "POSITION",
                "options": [
                    [
                        "%{BKY_LED_SENSOR_POSITION_1}",
                        "1"
                    ],
                    [
                        "%{BKY_LED_SENSOR_POSITION_2}",
                        "2"
                    ],
                    [
                        "%{BKY_LED_SENSOR_POSITION_3}",
                        "3"
                    ],
                    [
                        "%{BKY_LED_SENSOR_POSITION_4}",
                        "4"
                    ],
                    [
                        "%{BKY_LED_SENSOR_POSITION_5}",
                        "5"
                    ],
                    [
                        "%{BKY_LED_SENSOR_POSITION_6}",
                        "6"
                    ],
                    [
                        "%{BKY_LED_SENSOR_POSITION_7}",
                        "7"
                    ],
                    [
                        "%{BKY_LED_SENSOR_POSITION_8}",
                        "8"
                    ],
                    [
                        "%{BKY_LED_SENSOR_POSITION_9}",
                        "9"
                    ],
                    [
                        "%{BKY_LED_SENSOR_POSITION_10}",
                        "10"
                    ],
                    [
                        "%{BKY_LED_SENSOR_POSITION_11}",
                        "11"
                    ],
                    [
                        "%{BKY_LED_SENSOR_POSITION_12}",
                        "12"
                    ],
                    [
                        "%{BKY_LED_SENSOR_POSITION_ALL}",
                        "0"
                    ]
                ]
            },
            {
                "type": "field_dropdown",
                "name": "COLOR",
                "options": [
                    [
                        "%{BKY_MATA_COLOR_WHITE}",
                        "white"
                    ],
                    [
                        "%{BKY_MATA_COLOR_RED}",
                        "red"
                    ],
                    [
                        "%{BKY_MATA_COLOR_YELLOW}",
                        "yellow"
                    ],
                    [
                        "%{BKY_MATA_COLOR_GREEN}",
                        "green"
                    ],
                    [
                        "%{BKY_MATA_COLOR_BLUE}",
                        "blue"
                    ],
                    [
                        "%{BKY_MATA_COLOR_PURPLE}",
                        "purple"
                    ],
                    [
                        "%{BKY_MATA_COLOR_BLACK}",
                        "black"
                    ]
                ]
            },
            {
                "type": "field_dropdown",
                "name": "BRIGHTNESS",
                "options": [
                    [
                        "1",
                        "1"
                    ],
                    [
                        "2",
                        "2"
                    ],
                    [
                        "3",
                        "3"
                    ],
                    [
                        "4",
                        "4"
                    ],
                    [
                        "5",
                        "5"
                    ],
                    [
                        "6",
                        "6"
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
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#8222C3",
        "tooltip": "",
        "helpUrl": ""
    }, {
        "type": "sensor_ledpositionrgb_input",
        "message0": "%{BKY_LED_SENSOR_INPUT}",
        "args0": [{
                "type": "field_image",
                "src": "../icons/controller.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "input_value",
                "name": "POSITION",
                "check": "Number",
                "precision": 1
            },
            {
                "type": "input_value",
                "name": "COLOR",
                "check": "Colour"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#8222C3",
        "tooltip": "",
        "helpUrl": ""
    }, {
        "type": "sensor_ledcyc",
        "message0": "%{BKY_LED_SENSOR_LEDCYC}",
        "args0": [{
                "type": "field_image",
                "src": "../icons/controller.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "field_image",
                "src": "../icons/null.svg",
                "width": 18,
                "height": 15,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "field_colour",
                "name": "12",
                "colour": "#990000"
            },
            {
                "type": "field_colour",
                "name": "1",
                "colour": "#ff0000"
            },
            {
                "type": "field_colour",
                "name": "2",
                "colour": "#ff6666"
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "field_colour",
                "name": "11",
                "colour": "#ffff00"
            },
            {
                "type": "field_image",
                "src": "../icons/null.svg",
                "width": 94,
                "height": 15,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "field_colour",
                "name": "3",
                "colour": "#66ff99"
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "field_colour",
                "name": "10",
                "colour": "#ffcc66"
            },
            {
                "type": "field_image",
                "src": "../icons/null.svg",
                "width": 94,
                "height": 15,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "field_colour",
                "name": "4",
                "colour": "#33cc00"
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "field_colour",
                "name": "9",
                "colour": "#cc9933"
            },
            {
                "type": "field_image",
                "src": "../icons/null.svg",
                "width": 94,
                "height": 15,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "field_colour",
                "name": "5",
                "colour": "#006600"
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "field_image",
                "src": "../icons/null.svg",
                "width": 18,
                "height": 15,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "field_colour",
                "name": "8",
                "colour": "#33ccff"
            },
            {
                "type": "field_colour",
                "name": "7",
                "colour": "#3333ff"
            },
            {
                "type": "field_colour",
                "name": "6",
                "colour": "#000099"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#8222C3",
        "tooltip": "",
        "helpUrl": ""
    }, {
        "type": "sensor_ledanimation",
        "message0": "%{BKY_LED_SENSOR_ANIMATION}",
        "args0": [{
                "type": "field_image",
                "src": "../icons/controller.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "field_dropdown",
                "name": "ANIMATION",
                "options": [
                    [
                        "%{BKY_LED_SENSOR_ANIMATION_SPOONDRIFT}",
                        "spoondrift"
                    ],
                    [
                        "%{BKY_LED_SENSOR_ANIMATION_RAINBOW}",
                        "rainbow"
                    ],
                    [
                        "%{BKY_LED_SENSOR_ANIMATION_METEOR}",
                        "meteor"
                    ],
                    [
                        "%{BKY_LED_SENSOR_ANIMATION_FIREFLY}",
                        "firefly"
                    ],
                    [
                        "%{BKY_LED_SENSOR_ANIMATION_COLORWIPE}",
                        "colorwipe"
                    ],
                    [
                        "%{BKY_LED_SENSOR_ANIMATION_BREATHE}",
                        "breathe"
                    ]
                ]
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#8222C3",
        "tooltip": "",
        "helpUrl": ""
    }, {
        "type": "matatabot_ledclear",
        "message0": "%{BKY_LED_BOTEYE_ALL_OFF}",
        "args0": [{
            "type": "field_image",
            "src": "../icons/bot.svg",
            "width": 18,
            "height": 18,
            "alt": "*",
            "flipRtl": false
        }],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#8222C3",
        "tooltip": "",
        "helpUrl": ""
    }, {
        "type": "sensor_ledclear",
        "message0": "%{BKY_LED_SENSOR_ALL_OFF}",
        "args0": [{
            "type": "field_image",
            "src": "../icons/controller.svg",
            "width": 18,
            "height": 18,
            "alt": "*",
            "flipRtl": false
        }],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#8222C3",
        "tooltip": "",
        "helpUrl": ""
    }
]);