/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly/core';

// Existing example block (optional – keep if you still want it)
const addText = {
  type: 'add_text',
  message0: 'Add text %1',
  args0: [
    {
      type: 'input_value',
      name: 'TEXT',
      check: 'String',
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 160,
  tooltip: '',
  helpUrl: '',
};

// Kasa / TP-Link blocks 🚦

// Initialize bulb: creates a global `kasaBulb`
const kasaInit = {
  type: 'kasa_init',
  message0: 'Init Kasa bulb at host %1',
  args0: [
    {
      type: 'input_value',
      name: 'HOST',
      check: 'String',
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 20,
  tooltip: 'Initialize a TP-Link / Kasa smart bulb at this IP/hostname',
  helpUrl: '',
};

// Power on/off/toggle
const kasaPower = {
  type: 'kasa_power',
  message0: 'Kasa bulb power %1',
  args0: [
    {
      type: 'field_dropdown',
      name: 'STATE',
      options: [
        ['on', 'ON'],
        ['off', 'OFF'],
        ['toggle', 'TOGGLE'],
      ],
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 20,
  tooltip: 'Turn the bulb on, off, or toggle it',
  helpUrl: '',
};

// Brightness 1–100
const kasaBrightness = {
  type: 'kasa_brightness',
  message0: 'Set Kasa bulb brightness to %1 %%', // %% escapes %
  args0: [
    {
      type: 'input_value',
      name: 'BRIGHTNESS',
      check: 'Number',
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 20,
  tooltip: 'Set brightness (1–100)',
  helpUrl: '',
};

// Color temperature (Kelvin)
const kasaColorTemp = {
  type: 'kasa_color_temp',
  message0: 'Set Kasa bulb color temperature to %1 K',
  args0: [
    {
      type: 'input_value',
      name: 'TEMP',
      check: 'Number',
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 20,
  tooltip: 'Set color temperature in Kelvin (e.g. 2700, 4000)',
  helpUrl: '',
};

const kasaColorRGB = {
  type: 'kasa_color_rgb',
  message0: 'Set Kasa bulb color to R %1 G %2 B %3',
  args0: [
    {
      type: 'input_value',
      name: 'R',
      check: 'Number',
    },
    {
      type: 'input_value',
      name: 'G',
      check: 'Number',
    },
    {
      type: 'input_value',
      name: 'B',
      check: 'Number',
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 20,
  tooltip: 'Set RGB color (0–255 for each channel)',
  helpUrl: '',
};

// Create the block definitions for the JSON-only blocks.
// This does not register their definitions with Blockly.
// This file has no side effects!
export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
  addText,       // optional
  kasaInit,
  kasaPower,
  kasaBrightness,
  kasaColorTemp,
  kasaColorRGB,
]);
