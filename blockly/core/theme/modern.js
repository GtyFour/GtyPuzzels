/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Modern theme.
 * Same colours as classic, but single coloured border.
 */
'use strict';

goog.provide('Blockly.Themes.Modern');

goog.require('Blockly.Theme');


// Temporary holding object.
Blockly.Themes.Modern = {};

Blockly.Themes.Modern.defaultBlockStyles = {
  "colour_blocks": {
    "colourPrimary": "#8222C3",
    "colourSecondary": "#dbc7bd",
    "colourTertiary": "#845d49"
  },
  "list_blocks": {
    "colourPrimary": "#745ba5",
    "colourSecondary": "#c7bddb",
    "colourTertiary": "#5d4984"
  },
  "logic_blocks": {
    "colourPrimary": "#29B6F6",
    "colourSecondary": "#bdccdb",
    "colourTertiary": "#496684"
  },
  "loop_blocks": {
    "colourPrimary": "#388E3C",
    "colourSecondary": "#bddbbd",
    "colourTertiary": "#498449"
  },
  "math_blocks": {
    "colourPrimary": "#3B7FF8",
    "colourSecondary": "#bdc2db",
    "colourTertiary": "#495284"
  },
  "procedure_blocks": {
    "colourPrimary": "#FFD600",
    "colourSecondary": "#d6bddb",
    "colourTertiary": "#7a4984"
  },
  "text_blocks": {
    "colourPrimary": "#5ba58c",
    "colourSecondary": "#bddbd1",
    "colourTertiary": "#498470"
  },
  "variable_blocks": {
    "colourPrimary": "#F09DA2",
    "colourSecondary": "#dbbdd6",
    "colourTertiary": "#84497a"
  },
  "variable_dynamic_blocks": {
    "colourPrimary": "#F09DA2",
    "colourSecondary": "#dbbdd6",
    "colourTertiary": "#84497a"
  },
  "hat_blocks": {
    "colourPrimary": "#F09DA2",
    "colourSecondary": "#dbbdd6",
    "colourTertiary": "#84497a",
    "hat": "cap"
  }
};

Blockly.Themes.Modern.categoryStyles = {
  "colour_category": {
    "colour": "#8222C3"
  },
  "list_category": {
    "colour": "#745ba5"
  },
  "logic_category": {
    "colour": "#29B6F6"
  },
  "loop_category": {
    "colour": "#388E3C"
  },
  "math_category": {
    "colour": "#3B7FF8"
  },
  "procedure_category": {
    "colour": "#FFD600"
  },
  "text_category": {
    "colour": "#5ba58c"
  },
  "variable_category": {
    "colour": "#F09DA2"
  },
  "variable_dynamic_category": {
    "colour": "#F09DA2"
  }
};

// This style is still being fleshed out and may change.
Blockly.Themes.Modern =
    new Blockly.Theme('modern', Blockly.Themes.Modern.defaultBlockStyles,
        Blockly.Themes.Modern.categoryStyles);
