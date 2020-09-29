'use strict';

goog.provide('Blockly.Blocks.wheel'); // Deprecated
goog.provide('Blockly.Constants.Wheel'); // deprecated, 2018 April 5

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Constants.Wheel.HUE = 355;

Blockly.defineBlocksWithJsonArray([{
        "type": "wheel_control",
        "message0": "%1 Wheels %2 with speed level %3",
        "args0": [{
                "type": "field_dropdown",
                "name": "WHEEL",
                "options": [
                    [
                        "Left",
                        "left"
                    ],
                    [
                        "Right",
                        "right"
                    ]
                ]
            },
            {
                "type": "field_dropdown",
                "name": "DIRECTION",
                "options": [
                    [
                        "Forward",
                        "forward"
                    ],
                    [
                        "Backward",
                        "backward"
                    ]
                ]
            },
            {
                "type": "field_dropdown",
                "name": "NAME",
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
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#C94637",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "both_wheel_control",
        "message0": "Both wheels %1 with speed %2",
        "args0": [{
                "type": "field_dropdown",
                "name": "DIRECTION",
                "options": [
                    [
                        "forward",
                        "forward"
                    ],
                    [
                        "backward",
                        "backward"
                    ]
                ]
            },
            {
                "type": "field_dropdown",
                "name": "SPEED",
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
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#C94637",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "wheel_control_new",
        "message0": "%1 %{BKY_WHEEL_CONCTRL} %4",
        "args0": [{
                "type": "field_image",
                "src": "../icons/left_wheel.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "field_dropdown",
                "name": "lspeed",
                "options": [
                    [
                        "%{BKY_WHEEL_NULL}",
                        "15"
                    ],
                    [
                        "%{BKY_WHEEL_M6}",
                        "0"
                    ],
                    [
                        "%{BKY_WHEEL_M5}",
                        "1"
                    ],
                    [
                        "%{BKY_WHEEL_M4}",
                        "2"
                    ],
                    [
                        "%{BKY_WHEEL_M3}",
                        "3"
                    ],
                    [
                        "%{BKY_WHEEL_M2}",
                        "4"
                    ],
                    [
                        "%{BKY_WHEEL_M1}",
                        "5"
                    ],
                    [
                        "%{BKY_WHEEL_STOP}",
                        "6"
                    ],
                    [
                        "%{BKY_WHEEL_P1}",
                        "7"
                    ],
                    [
                        "%{BKY_WHEEL_P2}",
                        "8"
                    ],
                    [
                        "%{BKY_WHEEL_P3}",
                        "9"
                    ],
                    [
                        "%{BKY_WHEEL_P4}",
                        "10"
                    ],
                    [
                        "%{BKY_WHEEL_P5}",
                        "11"
                    ],
                    [
                        "%{BKY_WHEEL_P6}",
                        "12"
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
            },
            {
                "type": "field_dropdown",
                "name": "rspeed",
                "options": [
                    [
                        "%{BKY_WHEEL_NULL}",
                        "15"
                    ],
                    [
                        "%{BKY_WHEEL_M6}",
                        "0"
                    ],
                    [
                        "%{BKY_WHEEL_M5}",
                        "1"
                    ],
                    [
                        "%{BKY_WHEEL_M4}",
                        "2"
                    ],
                    [
                        "%{BKY_WHEEL_M3}",
                        "3"
                    ],
                    [
                        "%{BKY_WHEEL_M2}",
                        "4"
                    ],
                    [
                        "%{BKY_WHEEL_M1}",
                        "5"
                    ],
                    [
                        "%{BKY_WHEEL_STOP}",
                        "6"
                    ],
                    [
                        "%{BKY_WHEEL_P1}",
                        "7"
                    ],
                    [
                        "%{BKY_WHEEL_P2}",
                        "8"
                    ],
                    [
                        "%{BKY_WHEEL_P3}",
                        "9"
                    ],
                    [
                        "%{BKY_WHEEL_P4}",
                        "10"
                    ],
                    [
                        "%{BKY_WHEEL_P5}",
                        "11"
                    ],
                    [
                        "%{BKY_WHEEL_P6}",
                        "12"
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
                "src": "../icons/right_wheel.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#C94637",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "wheel_stop_origin",
        "message0": "Stop %1 wheel",
        "args0": [{
            "type": "field_dropdown",
            "name": "WHEEL",
            "options": [
                [
                    "left",
                    "left"
                ],
                [
                    "right",
                    "right"
                ],
                [
                    "both",
                    "both"
                ]
            ]
        }],
        "previousStatement": null,
        "nextStatement": null,
        "colour": Blockly.Constants.Wheel.HUE,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "wheel_control_new_left",
        "message0": "%1 %{BKY_WHEEL_CONCTRL_LEFT}",
        "args0": [{
                "type": "field_image",
                "src": "../icons/left_wheel.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "field_dropdown",
                "name": "lspeed",
                "options": [
                    [
                        "%{BKY_WHEEL_M6}",
                        "0"
                    ],
                    [
                        "%{BKY_WHEEL_M5}",
                        "1"
                    ],
                    [
                        "%{BKY_WHEEL_M4}",
                        "2"
                    ],
                    [
                        "%{BKY_WHEEL_M3}",
                        "3"
                    ],
                    [
                        "%{BKY_WHEEL_M2}",
                        "4"
                    ],
                    [
                        "%{BKY_WHEEL_M1}",
                        "5"
                    ],
                    [
                        "%{BKY_WHEEL_STOP}",
                        "6"
                    ],
                    [
                        "%{BKY_WHEEL_P1}",
                        "7"
                    ],
                    [
                        "%{BKY_WHEEL_P2}",
                        "8"
                    ],
                    [
                        "%{BKY_WHEEL_P3}",
                        "9"
                    ],
                    [
                        "%{BKY_WHEEL_P4}",
                        "10"
                    ],
                    [
                        "%{BKY_WHEEL_P5}",
                        "11"
                    ],
                    [
                        "%{BKY_WHEEL_P6}",
                        "12"
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
        "colour": "#C94637",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "wheel_control_new_right",
        "message0": "%1 %{BKY_WHEEL_CONCTRL_RIGHT}",
        "args0": [{
                "type": "field_image",
                "src": "../icons/right_wheel.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "field_dropdown",
                "name": "rspeed",
                "options": [
                    [
                        "%{BKY_WHEEL_M6}",
                        "0"
                    ],
                    [
                        "%{BKY_WHEEL_M5}",
                        "1"
                    ],
                    [
                        "%{BKY_WHEEL_M4}",
                        "2"
                    ],
                    [
                        "%{BKY_WHEEL_M3}",
                        "3"
                    ],
                    [
                        "%{BKY_WHEEL_M2}",
                        "4"
                    ],
                    [
                        "%{BKY_WHEEL_M1}",
                        "5"
                    ],
                    [
                        "%{BKY_WHEEL_STOP}",
                        "6"
                    ],
                    [
                        "%{BKY_WHEEL_P1}",
                        "7"
                    ],
                    [
                        "%{BKY_WHEEL_P2}",
                        "8"
                    ],
                    [
                        "%{BKY_WHEEL_P3}",
                        "9"
                    ],
                    [
                        "%{BKY_WHEEL_P4}",
                        "10"
                    ],
                    [
                        "%{BKY_WHEEL_P5}",
                        "11"
                    ],
                    [
                        "%{BKY_WHEEL_P6}",
                        "12"
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
        "colour": "#C94637",
        "tooltip": "",
        "helpUrl": ""
    }, {
        "type": "wheel_speedall",
        "message0": "%{BKY_WHEEL_CONCTRL_GEAR}",
        "args0": [{
                "type": "field_image",
                "src": "../icons/bot_run1.svg",
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
                "src": "../icons/left_wheel.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "field_dropdown",
                "name": "ldir",
                "options": [
                    [
                        "%{BKY_WHEEL_CONCTRL_GEAR_FORWARD}",
                        "forward"
                    ],
                    [
                        "%{BKY_WHEEL_CONCTRL_GEAR_BACKWARD}",
                        "backward"
                    ]
                ]
            },
            {
                "type": "field_dropdown",
                "name": "lspeed",
                "options": [
                    [
                        "%{BKY_WHEEL_CONCTRL_GEAR_1}",
                        "gear_1"
                    ],
                    [
                        "%{BKY_WHEEL_CONCTRL_GEAR_2}",
                        "gear_2"
                    ],
                    [
                        "%{BKY_WHEEL_CONCTRL_GEAR_3}",
                        "gear_3"
                    ],
                    [
                        "%{BKY_WHEEL_CONCTRL_GEAR_4}",
                        "gear_4"
                    ],
                    [
                        "%{BKY_WHEEL_CONCTRL_GEAR_5}",
                        "gear_5"
                    ],
                    [
                        "%{BKY_WHEEL_CONCTRL_GEAR_6}",
                        "gear_6"
                    ],
                    [
                        "%{BKY_WHEEL_CONCTRL_GEAR_STOP}",
                        "gear_stop"
                    ],
                    [
                        "%{BKY_WHEEL_CONCTRL_GEAR_NULL}",
                        "gear_null"
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
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "field_image",
                "src": "../icons/right_wheel.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "field_dropdown",
                "name": "rdir",
                "options": [
                    [
                        "%{BKY_WHEEL_CONCTRL_GEAR_FORWARD}",
                        "forward"
                    ],
                    [
                        "%{BKY_WHEEL_CONCTRL_GEAR_BACKWARD}",
                        "backward"
                    ]
                ]
            },
            {
                "type": "field_dropdown",
                "name": "rspeed",
                "options": [
                    [
                        "%{BKY_WHEEL_CONCTRL_GEAR_1}",
                        "gear_1"
                    ],
                    [
                        "%{BKY_WHEEL_CONCTRL_GEAR_2}",
                        "gear_2"
                    ],
                    [
                        "%{BKY_WHEEL_CONCTRL_GEAR_3}",
                        "gear_3"
                    ],
                    [
                        "%{BKY_WHEEL_CONCTRL_GEAR_4}",
                        "gear_4"
                    ],
                    [
                        "%{BKY_WHEEL_CONCTRL_GEAR_5}",
                        "gear_5"
                    ],
                    [
                        "%{BKY_WHEEL_CONCTRL_GEAR_6}",
                        "gear_6"
                    ],
                    [
                        "%{BKY_WHEEL_CONCTRL_GEAR_STOP}",
                        "gear_stop"
                    ],
                    [
                        "%{BKY_WHEEL_CONCTRL_GEAR_NULL}",
                        "gear_null"
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
                "src": "../icons/bot_run2.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#C94637",
        "tooltip": "",
        "helpUrl": ""
    }, {
        "type": "wheel_stop",
        "message0": "%{BKY_WHEEL_CONCTRL_STOP}",
        "args0": [{
                "type": "field_image",
                "src": "../icons/wheelstop.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "field_dropdown",
                "name": "WHICH",
                "options": [
                    [
                        "%{BKY_WHEEL_CONCTRL_STOP_LW}",
                        "left"
                    ],
                    [
                        "%{BKY_WHEEL_CONCTRL_STOP_RW}",
                        "right"
                    ],
                    [
                        "%{BKY_WHEEL_CONCTRL_STOP_ALL}",
                        "all"
                    ]

                ]
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
        "colour": "#C94637",
        "tooltip": "",
        "helpUrl": ""
    }, {
        "type": "wheel_speedallcm",
        "message0": "%1 %2 %3 %4 左轮速度 %5 cm/s %6 %7 右轮速度 %8 cm/s",
        "args0": [{
                "type": "field_image",
                "src": "../icons/bot_run1.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "field_image",
                "src": "../icons/bot_run2.svg",
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
                "src": "../icons/left_wheel.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "field_number",
                "name": "lspeed",
                "value": 0,
                "min": -100,
                "max": 100,
                "precision": 1
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "field_image",
                "src": "../icons/right_wheel.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "field_number",
                "name": "rspeed",
                "value": 0,
                "min": -100,
                "max": 100,
                "precision": 1
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#C94637",
        "tooltip": "",
        "helpUrl": ""
    }, {
        "type": "wheel_speedallcms",
        "message0": "%1 MatataBot 左轮速度 %2 cm/s ，右轮速度 %3 cm/s，持续 %4 秒",
        "args0": [{
                "type": "field_image",
                "src": "../icons/wheels.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "field_number",
                "name": "lspeed",
                "value": 0,
                "min": -100,
                "max": 100,
                "precision": 1
            },
            {
                "type": "field_number",
                "name": "rspeed",
                "value": 0,
                "min": -100,
                "max": 100,
                "precision": 1
            },
            {
                "type": "field_number",
                "name": "TIME",
                "value": 0,
                "min": 0,
                "max": 10,
                "precision": 0.1
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#C94637",
        "tooltip": "",
        "helpUrl": ""
    }, {
        "type": "wheel_speedallcm_input",
        "message0": "%{BKY_WHEEL_CONCTRL_CMINPUT}",
        "args0": [{
                "type": "field_image",
                "src": "../icons/bot_run1.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "field_image",
                "src": "../icons/bot_run2.svg",
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
                "src": "../icons/left_wheel.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "input_value",
                "name": "lspeed",
                "check": "Number",
                "max": 17,
                "min": -17,
                "precision": 1
            },
            {
                "type": "field_image",
                "src": "../icons/right_wheel.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "input_value",
                "name": "rspeed",
                "check": "Number",
                "max": 17,
                "min": -17,
                "precision": 1
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#C94637",
        "tooltip": "",
        "helpUrl": ""
    }
]);