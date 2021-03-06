/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Classic theme.
 * Contains multi-coloured border to create shadow effect.
 */
'use strict';

goog.provide('Blockly.Themes.Classic');

goog.require('Blockly.Theme');


// Temporary holding object.
Blockly.Themes.Classic = {};

Blockly.Themes.Classic.defaultBlockStyles = {
  "colour_blocks": {
    "colourPrimary": "#8222C3"
  },
  "list_blocks": {
    "colourPrimary": "#112233"
  },
  "logic_blocks": {
    "colourPrimary": "#29B6F6"
  },
  "loop_blocks": {
    "colourPrimary": "#388E3C"
  },
  "math_blocks": {
    "colourPrimary": "#3B7FF8"
  },
  "procedure_blocks": {
    "colourPrimary": "#FFD600"
  },
  "text_blocks": {
    "colourPrimary": "#000000"
  },
  "variable_blocks": {
    "colourPrimary": "#F09DA2"
  },
  "variable_dynamic_blocks": {
    "colourPrimary": "#F09DA2"
  },
  "hat_blocks": {
    "colourPrimary": "330",
    "hat": "cap"
  }
};

Blockly.Themes.Classic.categoryStyles = {
  "colour_category": {
    "colour": "20"
  },
  "list_category": {
    "colour": "260"
  },
  "logic_category": {
    "colour": "210"
  },
  "loop_category": {
    "colour": "120"
  },
  "math_category": {
    "colour": "230"
  },
  "procedure_category": {
    "colour": "290"
  },
  "text_category": {
    "colour": "160"
  },
  "variable_category": {
    "colour": "330"
  },
  "variable_dynamic_category": {
    "colour": "310"
  }
};

Blockly.Themes.Classic =
    new Blockly.Theme('classic', Blockly.Themes.Classic.defaultBlockStyles,
        Blockly.Themes.Classic.categoryStyles);
