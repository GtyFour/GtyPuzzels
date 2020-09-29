'use strict';

goog.provide('Blockly.Blocks.timer'); // Deprecated
goog.provide('Blockly.Constants.Timer'); // deprecated, 2018 April 5

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Constants.Timer.HUE = 83;

Blockly.defineBlocksWithJsonArray([{
    "type": "timer_wait",
    "message0": "%{BKY_TIMER_WAIT_UNIT}",
    "args0": [{
        "type": "field_dropdown",
        "name": "SECOND",
        "options": [
            [
                "%{BKY_TIMER_SEC_1}",
                "1"
            ],
            [
                "%{BKY_TIMER_SEC_2}",
                "2"
            ],
            [
                "%{BKY_TIMER_SEC_3}",
                "3"
            ],
            [
                "%{BKY_TIMER_SEC_4}",
                "4"
            ],
            [
                "%{BKY_TIMER_SEC_5}",
                "5"
            ],
            [
                "%{BKY_TIMER_SEC_6}",
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
        "src": "../icons/timer.svg",
        "width": 18,
        "height": 18,
        "alt": "*",
        "flipRtl": false
    }],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#F2DE00",
    "tooltip": "",
    "helpUrl": ""
}, {
    "type": "timer_wait_ms",
    "message0": "%2 %{BKY_TIMER_WAIT_SEC}",
    "args0": [{
            "type": "field_number",
            "name": "MSTIMES",
            "value": 1,
            "min": 0,
            "max": 20,
            "precision": 1
        }, {
            "type": "field_image",
            "src": "../icons/timer.svg",
            "width": 18,
            "height": 18,
            "alt": "*",
            "flipRtl": false
        }

    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#F2DE00",
    "tooltip": "",
    "helpUrl": ""
}, {
    "type": "timer_wait_ms_input",
    "message0": "%{BKY_TIMER_WAIT_MS}",
    "args0": [{
            "type": "field_image",
            "src": "../icons/timer.svg",
            "width": 18,
            "height": 18,
            "alt": "*",
            "flipRtl": false
        },
        {
            "type": "input_value",
            "name": "MSTIMES",
            "check": "Number",
            "precision": 100
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#F2DE00",
    "tooltip": "",
    "helpUrl": ""
}, {
    "type": "main_block",
    "message0": "%{BKY_TIMER_MAIN_BLOCK}",
    "args0": [{
        "type": "field_image",
        "src": "../icons/main_block.svg",
        "width": 18,
        "height": 18,
        "alt": "*",
        "flipRtl": false
    }],
    "nextStatement": null,
    "colour": "#388E3C",
    "tooltip": "",
    "helpUrl": ""
}]);