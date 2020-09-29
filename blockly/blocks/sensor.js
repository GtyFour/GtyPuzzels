'use strict';

goog.provide('Blockly.Blocks.sensor'); // Deprecated
goog.provide('Blockly.Constants.Sensor'); // deprecated, 2018 April 5

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Constants.Sensor.HUE = 181;

Blockly.defineBlocksWithJsonArray([{
        "type": "sensor_origin",
        "message0": "%3 %2 %{BKY_SENSOR_WAIT_EVENT}",
        "args0": [{
                "type": "field_dropdown",
                "name": "CONDITION",
                "options": [
                    [
                        "%{BKY_SENSOR_EVENT_1}",
                        "1"
                    ],
                    [
                        "%{BKY_SENSOR_EVENT_2}",
                        "2"
                    ],
                    [
                        "%{BKY_SENSOR_EVENT_3}",
                        "3"
                    ],
                    [
                        "%{BKY_SENSOR_EVENT_4}",
                        "4"
                    ],
                    [
                        "%{BKY_SENSOR_EVENT_5}",
                        "5"
                    ],
                    [
                        "%{BKY_SENSOR_EVENT_6}",
                        "6"
                    ],
                    [
                        "%{BKY_SENSOR_EVENT_7}",
                        "7"
                    ],
                    [
                        "%{BKY_SENSOR_EVENT_8}",
                        "8"
                    ],
                    [
                        "%{BKY_SENSOR_EVENT_9}",
                        "9"
                    ],
                    [
                        "%{BKY_SENSOR_EVENT_10}",
                        "10"
                    ]
                ]
            }, {
                "type": "field_image",
                "src": "../icons/sensor.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "field_image",
                "src": "../icons/controller.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#89D9E4", //Blockly.Constants.Sensor.HUE,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "sensor_send_data",
        "message0": "%3 %2 %{BKY_SENSOR_SEND_DATA}",
        "args0": [{
                "type": "field_dropdown",
                "name": "NUMBER",
                "options": [
                    [
                        "%{BKY_SENSOR_DATA_1}",
                        "1"
                    ],
                    [
                        "%{BKY_SENSOR_DATA_2}",
                        "2"
                    ],
                    [
                        "%{BKY_SENSOR_DATA_3}",
                        "3"
                    ],
                    [
                        "%{BKY_SENSOR_DATA_4}",
                        "4"
                    ],
                    [
                        "%{BKY_SENSOR_DATA_5}",
                        "5"
                    ],
                    [
                        "%{BKY_SENSOR_DATA_6}",
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
                "src": "../icons/send.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "field_image",
                "src": "../icons/controller.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#89D9E4",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "sensor_wait_data",
        "message0": "%3 %2 %{BKY_SENSOR_WAIT_DATA}",
        "args0": [{
                "type": "field_dropdown",
                "name": "NUMBER",
                "options": [
                    [
                        "%{BKY_SENSOR_DATA_1}",
                        "1"
                    ],
                    [
                        "%{BKY_SENSOR_DATA_2}",
                        "2"
                    ],
                    [
                        "%{BKY_SENSOR_DATA_3}",
                        "3"
                    ],
                    [
                        "%{BKY_SENSOR_DATA_4}",
                        "4"
                    ],
                    [
                        "%{BKY_SENSOR_DATA_5}",
                        "5"
                    ],
                    [
                        "%{BKY_SENSOR_DATA_6}",
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
                "src": "../icons/recive.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "field_image",
                "src": "../icons/controller.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#89D9E4",
        "tooltip": "",
        "helpUrl": ""
    }, {
        "type": "get_channel_rgb",
        "message0": "%{BKY_SENSOR_GET_CHANNEL_COLOR}",
        "args0": [{
                "type": "field_image",
                "src": "../icons/rgb.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "field_dropdown",
                "name": "CHANNEL",
                "options": [
                    [
                        "%{BKY_SENSOR_CHANNEL_R}",
                        "R"
                    ],
                    [
                        "%{BKY_SENSOR_CHANNEL_G}",
                        "G"
                    ],
                    [
                        "%{BKY_SENSOR_CHANNEL_B}",
                        "B"
                    ]
                ]
            },
            {
                "type": "field_image",
                "src": "../icons/controller.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            }
        ],
        "output": "Number",
        "colour": "#3B7FF8",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "get_axis",
        "message0": "%{BKY_SENSOR_GET_AXIS}",
        "args0": [{
                "type": "field_image",
                "src": "../icons/axis.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "field_dropdown",
                "name": "AXIS",
                "options": [
                    [
                        "X",
                        "x"
                    ],
                    [
                        "Y",
                        "y"
                    ],
                    [
                        "Z",
                        "z"
                    ]
                ]
            },
            {
                "type": "field_image",
                "src": "../icons/controller.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            }
        ],
        "output": "Number",
        "colour": "#3B7FF8",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "accelerate_check",
        "message0": "%{BKY_SENSOR_CHECK_ACCELERATER}",
        "args0": [{
                "type": "field_image",
                "src": "../icons/accelerate.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "field_dropdown",
                "name": "CONDITION",
                "options": [
                    [
                        "%{BKY_SENSOR_CONDITION_ACCE_SHAKE}",
                        "shake"
                    ],
                    [
                        "%{BKY_SENSOR_CONDITION_ACCE_TILTED_LEFT}",
                        "tilted_left"
                    ],
                    [
                        "%{BKY_SENSOR_CONDITION_ACCE_TILTED_RIGHT}",
                        "tilted_right"
                    ],
                    [
                        "%{BKY_SENSOR_CONDITION_ACCE_TILTED_FORWARD}",
                        "tilted_forward"
                    ],
                    [
                        "%{BKY_SENSOR_CONDITION_ACCE_TILTED_BACKWARD}",
                        "tilted_backward"
                    ],
                    [
                        "%{BKY_SENSOR_CONDITION_ACCE_FALL}",
                        "fall"
                    ],
                    [
                        "%{BKY_SENSOR_CONDITION_ACCE_FACE_UP}",
                        "face_up"
                    ],
                    [
                        "%{BKY_SENSOR_CONDITION_ACCE_FACE_DOWN}",
                        "face_down"
                    ]
                ]
            },
            {
                "type": "field_image",
                "src": "../icons/controller.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            }
        ],
        "inputsInline": true,
        "output": "Boolean",
        "colour": "#89D9E4",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "rgb_check",
        "message0": "%{BKY_SENSOR_CHECK_COLOR}",
        "args0": [{
                "type": "field_image",
                "src": "../icons/color.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "field_dropdown",
                "name": "CONDITION",
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
                "type": "field_image",
                "src": "../icons/controller.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            }
        ],
        "inputsInline": true,
        "output": "Boolean",
        "colour": "#89D9E4",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "btn_check",
        "message0": "%{BKY_SENSOR_CHECK_BTN}",
        "args0": [{
                "type": "field_image",
                "src": "../icons/btn.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "field_dropdown",
                "name": "CONDITION",
                "options": [
                    [
                        "%{BKY_SENSOR_CONDITION_BTN_FORWARD}",
                        "forward"
                    ],
                    [
                        "%{BKY_SENSOR_CONDITION_BTN_BACKWARD}",
                        "backward"
                    ],
                    [
                        "%{BKY_SENSOR_CONDITION_BTN_TURNLEFT}",
                        "turnleft"
                    ],
                    [
                        "%{BKY_SENSOR_CONDITION_BTN_TURNRIGHT}",
                        "turnright"
                    ],
                    [
                        "%{BKY_SENSOR_CONDITION_BTN_PLAY}",
                        "play"
                    ],
                    [
                        "%{BKY_SENSOR_CONDITION_BTN_DELETE}",
                        "delete"
                    ],
                    [
                        "%{BKY_SENSOR_CONDITION_BTN_MUSIC}",
                        "music"
                    ]
                ]
            },
            {
                "type": "field_image",
                "src": "../icons/controller.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            }
        ],
        "inputsInline": true,
        "output": "Boolean",
        "colour": "#89D9E4",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "sound_check",
        "message0": "%{BKY_SENSOR_CHECK_SOUND}",
        "args0": [{
                "type": "field_image",
                "src": "../icons/sound.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "field_image",
                "src": "../icons/controller.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            }
        ],
        "inputsInline": true,
        "output": "Boolean",
        "colour": "#89D9E4",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "bump_check",
        "message0": "%{BKY_SENSOR_CHECK_BUMP}",
        "args0": [{
                "type": "field_image",
                "src": "../icons/bump_new2.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "field_image",
                "src": "../icons/controller.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            }
        ],
        "inputsInline": true,
        "output": "Boolean",
        "colour": "#89D9E4",
        "tooltip": "",
        "helpUrl": ""
    }, {
        "type": "data_check",
        "message0": "%3 %1 接收到信息 %2",
        "args0": [{
                "type": "field_image",
                "src": "../icons/recive.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "field_dropdown",
                "name": "CONDITION",
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
                    ]
                ]
            },
            {
                "type": "field_image",
                "src": "../icons/controller.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            }
        ],
        "inputsInline": true,
        "output": "Boolean",
        "colour": "#89D9E4",
        "tooltip": "",
        "helpUrl": ""
    }, {
        "type": "get_brightness",
        "message0": "%{BKY_SENSOR_GET_BRIGHTNESS}",
        "args0": [{
                "type": "field_image",
                "src": "../icons/brightness.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "field_image",
                "src": "../icons/controller.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            }
        ],
        "output": "Number",
        "colour": "#3B7FF8",
        "tooltip": "",
        "helpUrl": ""
    }, {
        "type": "get_shaking_value",
        "message0": "%{BKY_SENSOR_GET_SHAKING_VALUE}",
        "args0": [{
                "type": "field_image",
                "src": "../icons/accelerate.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "field_image",
                "src": "../icons/controller.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            }
        ],
        "output": "Number",
        "colour": "#3B7FF8",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "brightness_check",
        "message0": "%{BKY_SENSOR_CHECK_BRIGHTNESS}",
        "args0": [{
                "type": "field_image",
                "src": "../icons/bright_new.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "field_dropdown",
                "name": "CONDITION",
                "options": [
                    [
                        "%{BKY_SENSOR_CONDITION_BRIGHTNESS}",
                        "brightness"
                    ],
                    [
                        "%{BKY_SENSOR_CONDITION_DARKNESS}",
                        "darkness"
                    ]
                ]
            },
            {
                "type": "field_image",
                "src": "../icons/controller.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            }
        ],
        "inputsInline": true,
        "output": "Boolean",
        "colour": "#89D9E4",
        "tooltip": "",
        "helpUrl": ""
    }, {
        "type": "sensor_waituntil",
        "message0": "%{BKY_SENSOR_WAITUNTIL}",
        "args0": [{
                "type": "field_image",
                "src": "../icons/sensor.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "input_value",
                "name": "UNTIL",
                "check": "Boolean"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#89D9E4",
        "tooltip": "",
        "helpUrl": ""
    }, {
        "type": "clear_check",
        "message0": "%{BKY_SENSOR_CHECK_BUMPCLEAR}",
        "args0": [{
                "type": "field_image",
                "src": "../icons/unbump.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "field_image",
                "src": "../icons/controller.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            }
        ],
        "inputsInline": true,
        "output": "Boolean",
        "colour": "#89D9E4",
        "tooltip": "",
        "helpUrl": ""
    }, {
        "type": "get_angle",
        "message0": "%3 %1 %2",
        "args0": [{
                "type": "field_image",
                "src": "../icons/angle.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "field_dropdown",
                "name": "ANGLE",
                "options": [
                    [
                        "%{BKY_SENSOR_ANGEL_PITCH}",
                        "pitch"
                    ],
                    [
                        "%{BKY_SENSOR_ANGEL_YAW}",
                        "yaw"
                    ],
                    [
                        "%{BKY_SENSOR_ANGEL_ROLL}",
                        "roll"
                    ]
                ]
            },
            {
                "type": "field_image",
                "src": "../icons/controller.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            }
        ],
        "output": "Number",
        "colour": "#3B7FF8",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "get_data",
        "message0": "%{BKY_SENSOR_RECIVED_DATA}",
        "args0": [{
                "type": "field_image",
                "src": "../icons/recive.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "field_image",
                "src": "../icons/controller.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            }
        ],
        "output": "Number",
        "colour": "#3B7FF8",
        "tooltip": "",
        "helpUrl": ""
    }, {
        "type": "check_data",
        "message0": "%{BKY_SENSOR_CHECKED_DATA}",
        "args0": [{
                "type": "field_dropdown",
                "name": "NUMBER",
                "options": [
                    [
                        "%{BKY_SENSOR_DATA_1}",
                        "1"
                    ],
                    [
                        "%{BKY_SENSOR_DATA_2}",
                        "2"
                    ],
                    [
                        "%{BKY_SENSOR_DATA_3}",
                        "3"
                    ],
                    [
                        "%{BKY_SENSOR_DATA_4}",
                        "4"
                    ],
                    [
                        "%{BKY_SENSOR_DATA_5}",
                        "5"
                    ],
                    [
                        "%{BKY_SENSOR_DATA_6}",
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
                "src": "../icons/recive.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "field_image",
                "src": "../icons/controller.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            }
        ],
        "inputsInline": true,
        "output": "Boolean",
        "colour": "#89D9E4",
        "tooltip": "",
        "helpUrl": ""
    }
]);