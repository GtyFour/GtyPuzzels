'use strict';

goog.provide('Blockly.Blocks.motion'); // Deprecated
goog.provide('Blockly.Constants.Motion'); // deprecated, 2018 April 5

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Constants.Motion.HUE = 83;

Blockly.defineBlocksWithJsonArray([{
        "type": "motion_backward",
        "message0": "%3 %2 %{BKY_MOTION_BACKWARD}",
        "args0": [{
                "type": "field_dropdown",
                "name": "STEP",
                "options": [
                    [
                        "1 %{BKY_MOTION_STEP}",
                        "step_1"
                    ],
                    [
                        "2 %{BKY_MOTION_STEPS}",
                        "step_2"
                    ],
                    [
                        "3 %{BKY_MOTION_STEPS}",
                        "step_3"
                    ],
                    [
                        "4 %{BKY_MOTION_STEPS}",
                        "step_4"
                    ],
                    [
                        "5 %{BKY_MOTION_STEPS}",
                        "step_5"
                    ],
                    [
                        "6 %{BKY_MOTION_STEPS}",
                        "step_6"
                    ],
                    [{
                            "src": "../icons/random.svg",
                            "width": 16,
                            "height": 16,
                            "alt": "*"
                        },
                        "random_step"
                    ]
                ]
            }, {
                "type": "field_image",
                "src": "../icons/backward.svg",
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
        "colour": "#CCD94A",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "motion_forward",
        "message0": "%3 %2 %{BKY_MOTION_FORWARD} ",
        "args0": [{
                "type": "field_dropdown",
                "name": "STEP",
                "options": [
                    [
                        "1 %{BKY_MOTION_STEP}",
                        "step_1"
                    ],
                    [
                        "2 %{BKY_MOTION_STEPS}",
                        "step_2"
                    ],
                    [
                        "3 %{BKY_MOTION_STEPS}",
                        "step_3"
                    ],
                    [
                        "4 %{BKY_MOTION_STEPS}",
                        "step_4"
                    ],
                    [
                        "5 %{BKY_MOTION_STEPS}",
                        "step_5"
                    ],
                    [
                        "6 %{BKY_MOTION_STEPS}",
                        "step_6"
                    ],
                    [{
                            "src": "../icons/random.svg",
                            "width": 16,
                            "height": 16,
                            "alt": "*"
                        },
                        "random_step"
                    ]
                ]
            }, {
                "type": "field_image",
                "src": "../icons/forward.svg",
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
        "inputsInline": false,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#CCD94A",
        "tooltip": "Move forward some steps",
        "helpUrl": ""
    },
    {
        "type": "motion_turnleft",
        "message0": "%3 %2 %{BKY_MOTION_TURNLEFT}",
        "args0": [{
                "type": "field_dropdown",
                "name": "ANGLE",
                "options": [
                    [
                        "30°",
                        "30degree"
                    ],
                    [
                        "36°",
                        "36degree"
                    ],
                    [
                        "45°",
                        "45degree"
                    ],
                    [
                        "60°",
                        "60degree"
                    ],
                    [
                        "72°",
                        "72degree"
                    ],
                    [
                        "90°",
                        "90degree"
                    ],
                    [
                        "108°",
                        "108degree"
                    ],
                    [
                        "120°",
                        "120degree"
                    ],
                    [
                        "135°",
                        "135degree"
                    ],
                    [
                        "144°",
                        "144degree"
                    ],
                    [
                        "150°",
                        "150degree"
                    ],
                    [
                        "180°",
                        "180degree"
                    ]
                ]
            }, {
                "type": "field_image",
                "src": "../icons/left.svg",
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
        "colour": "#CCD94A",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "motion_turnright",
        "message0": "%3 %2 %{BKY_MOTION_TURNRIGHT}",
        "args0": [{
                "type": "field_dropdown",
                "name": "ANGLE",
                "options": [
                    [
                        "30°",
                        "30degree"
                    ],
                    [
                        "36°",
                        "36degree"
                    ],
                    [
                        "45°",
                        "45degree"
                    ],
                    [
                        "60°",
                        "60degree"
                    ],
                    [
                        "72°",
                        "72degree"
                    ],
                    [
                        "90°",
                        "90degree"
                    ],
                    [
                        "108°",
                        "108degree"
                    ],
                    [
                        "120°",
                        "120degree"
                    ],
                    [
                        "135°",
                        "135degree"
                    ],
                    [
                        "144°",
                        "144degree"
                    ],
                    [
                        "150°",
                        "150degree"
                    ],
                    [
                        "180°",
                        "180degree"
                    ]
                ]
            }, {
                "type": "field_image",
                "src": "../icons/right.svg",
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
        "colour": "#CCD94A",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "motion_left_optimize",
        "message0": "%3 Adjust Left %1 %2",
        "args0": [{
                "type": "field_dropdown",
                "name": "ANGLE",
                "options": [
                    [
                        "30°",
                        "30degree"
                    ],
                    [
                        "36°",
                        "36degree"
                    ],
                    [
                        "45°",
                        "45degree"
                    ],
                    [
                        "60°",
                        "60degree"
                    ],
                    [
                        "72°",
                        "72degree"
                    ],
                    [
                        "90°",
                        "90degree"
                    ],
                    [
                        "108°",
                        "108degree"
                    ],
                    [
                        "120°",
                        "120degree"
                    ],
                    [
                        "135°",
                        "135degree"
                    ],
                    [
                        "144°",
                        "144degree"
                    ],
                    [
                        "150°",
                        "150degree"
                    ]
                ]
            },
            {
                "type": "field_dropdown",
                "name": "NAME",
                "options": [
                    [
                        "Obtuser",
                        "true"
                    ],
                    [
                        "Sharper",
                        "false"
                    ]
                ]
            }, {
                "type": "field_image",
                "src": "../icons/config.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            }
        ],
        "inputsInline": false,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#388E3C",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "motion_right_optimize",
        "message0": "%3 Adjust Right %1 %2",
        "args0": [{
                "type": "field_dropdown",
                "name": "ANGLE",
                "options": [
                    [
                        "30°",
                        "30degree"
                    ],
                    [
                        "36°",
                        "36degree"
                    ],
                    [
                        "45°",
                        "45degree"
                    ],
                    [
                        "60°",
                        "60degree"
                    ],
                    [
                        "72°",
                        "72degree"
                    ],
                    [
                        "90°",
                        "90degree"
                    ],
                    [
                        "108°",
                        "108degree"
                    ],
                    [
                        "120°",
                        "120degree"
                    ],
                    [
                        "135°",
                        "135degree"
                    ],
                    [
                        "144°",
                        "144degree"
                    ],
                    [
                        "150°",
                        "150degree"
                    ],
                    [
                        "180°",
                        "180degree"
                    ]
                ]
            },
            {
                "type": "field_dropdown",
                "name": "NAME",
                "options": [
                    [
                        "Obtuser",
                        "true"
                    ],
                    [
                        "Sharper",
                        "false"
                    ]
                ]
            }, {
                "type": "field_image",
                "src": "../icons/config.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            }
        ],
        "inputsInline": false,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#388E3C",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "motion_straight_optimize",
        "message0": "%2 Adjust Step %1",
        "args0": [{
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
                [
                    "Longer",
                    "true"
                ],
                [
                    "Shorter",
                    "false"
                ]
            ]
        }, {
            "type": "field_image",
            "src": "../icons/config.svg",
            "width": 18,
            "height": 18,
            "alt": "*",
            "flipRtl": false
        }],
        "inputsInline": false,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#388E3C",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "motion_test_optimize",
        "message0": "%2 Adjust Test %1",
        "args0": [{
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
                [
                    "Star",
                    "star"
                ],
                [
                    "Square",
                    "square"
                ],
                [
                    "Cycle",
                    "cycle"
                ]
            ]
        }, {
            "type": "field_image",
            "src": "../icons/config.svg",
            "width": 18,
            "height": 18,
            "alt": "*",
            "flipRtl": false
        }],
        "inputsInline": false,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#388E3C",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "motion_do_action",
        "message0": "%3 %2 %{BKY_MOTION_ACTION}",
        "args0": [{
                "type": "field_dropdown",
                "name": "ACTION_LIST",
                "options": [
                    [
                        "%{BKY_ORDINALS_1}",
                        "action1"
                    ],
                    [
                        "%{BKY_ORDINALS_2}",
                        "action2"
                    ],
                    [
                        "%{BKY_ORDINALS_3}",
                        "action3"
                    ],
                    [
                        "%{BKY_ORDINALS_4}",
                        "action4"
                    ],
                    [
                        "%{BKY_ORDINALS_5}",
                        "action5"
                    ],
                    [
                        "%{BKY_ORDINALS_6}",
                        "action6"
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
                "src": "../icons/action.svg",
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
        "type": "motion_length",
        "message0": "%1 %4 %2 %3 cm",
        "args0": [{
                "type": "field_image",
                "src": "../icons/bot.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "field_dropdown",
                "name": "DIRECTION",
                "options": [
                    [
                        "前进",
                        "forward"
                    ],
                    [
                        "后退",
                        "backward"
                    ]
                ]
            },
            {
                "type": "field_number",
                "name": "LENGTH",
                "value": 10,
                "min": 0,
                "max": 50
            }, {
                "type": "field_image",
                "src": "../icons/length.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#CCD94A",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "motion_spin",
        "message0": "%1 %4 %2 转 %3",
        "args0": [{
                "type": "field_image",
                "src": "../icons/bot.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "field_dropdown",
                "name": "DIRECTION",
                "options": [
                    [
                        "顺时针",
                        "clockwise"
                    ],
                    [
                        "逆时针",
                        "counterclockwise"
                    ]
                ]
            },
            {
                "type": "field_angle",
                "name": "ANGEL",
                "angle": 90
            }, {
                "type": "field_image",
                "src": "../icons/spin.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#CCD94A",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "motion_spinangle",
        "message0": "%1 %3 原地转 %2 °",
        "args0": [{
                "type": "field_image",
                "src": "../icons/bot.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "field_number",
                "name": "ANGEL",
                "value": 0,
                "min": -360,
                "max": 360,
                "precision": 1
            }, {
                "type": "field_image",
                "src": "../icons/spin.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#CCD94A",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "motion_emotion",
        "message0": "%1 %3 %2",
        "args0": [{
                "type": "field_image",
                "src": "../icons/bot.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "field_dropdown",
                "name": "EMOTION",
                "options": [
                    [
                        "问候",
                        "hello"
                    ],
                    [
                        "道别",
                        "goodbye"
                    ],
                    [
                        "肯定",
                        "yes"
                    ],
                    [
                        "否定",
                        "no"
                    ],
                    [
                        "开心",
                        "smile"
                    ],
                    [
                        "愤怒",
                        "angry"
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
                "src": "../icons/emotion.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#CCD94A",
        "tooltip": "",
        "helpUrl": ""
    }, {
        "type": "motion_length_input",
        "message0": "%{BKY_MOTION_LENGTH_INPUT}",
        "args0": [{
                "type": "field_image",
                "src": "../icons/bot.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "field_image",
                "src": "../icons/move_r.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "input_value",
                "name": "input",
                "check": "Number",
                "max": 100,
                "min": -100,
                "precision": 1
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#CCD94A",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "motion_spinangle_input",
        "message0": "%{BKY_MOTION_SPIN_INPUT}",
        "args0": [{
                "type": "field_image",
                "src": "../icons/bot.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "field_image",
                "src": "../icons/spin.svg",
                "width": 18,
                "height": 18,
                "alt": "*",
                "flipRtl": false
            },
            {
                "type": "input_value",
                "name": "input",
                "check": "Number",
                "max": 360,
                "min": -360,
                "precision": 1
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#CCD94A",
        "tooltip": "",
        "helpUrl": ""
    }
]);