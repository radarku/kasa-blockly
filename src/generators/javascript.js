/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import * as Blockly from 'blockly/core';
import {Order} from 'blockly/javascript';

// Export all the code generators for our custom blocks,
// but don't register them with Blockly yet.
// This file has no side effects!
export const forBlock = Object.create(null);

// =========================
// Existing example block
// =========================
forBlock['add_text'] = function (block, generator) {
  const text = generator.valueToCode(block, 'TEXT', Order.NONE) || "''";
  const addText = generator.provideFunction_(
    'addText',
    `function ${generator.FUNCTION_NAME_PLACEHOLDER_}(text) {

  // Add text to the output area.
  const outputDiv = document.getElementById('output');
  const textEl = document.createElement('p');
  textEl.innerText = text;
  outputDiv.appendChild(textEl);
}`,
  );
  const code = `${addText}(${text});\n`;
  return code;
};

// Shared helper to get host from global or default
const getHostExpr = (generator) =>
  generator.provideFunction_(
    'getKasaHost',
    `function ${generator.FUNCTION_NAME_PLACEHOLDER_}() {
  return globalThis.__kasaBulbHost || '192.168.166.161';
}`
  );

// ==============
// kasa_init
// ==============
forBlock['kasa_init'] = function (block, generator) {
  const hostCode =
    generator.valueToCode(block, 'HOST', Order.NONE) || "'192.168.166.161'";
  const code = `// Initialize Kasa bulb host
globalThis.__kasaBulbHost = ${hostCode};
if (typeof kasaControl === 'function') {
  kasaControl({ host: ${hostCode}, action: 'init' });
}
`;
  return code;
};

// ==============
// kasa_power
// ==============
forBlock['kasa_power'] = function (block, generator) {
  const state = block.getFieldValue('STATE'); // ON / OFF / TOGGLE
  const getHost = getHostExpr(generator);
  const hostVar = generator.nameDB_.getDistinctName(
    'kasaHost',
    Blockly.Names.NameType.VARIABLE
  );
  const code = `// Kasa power control
const ${hostVar} = ${getHost}();
if (typeof kasaControl === 'function') {
  kasaControl({ host: ${hostVar}, action: 'power', state: '${state}' });
}
`;
  return code;
};

// ==============
// kasa_brightness
// ==============
forBlock['kasa_brightness'] = function (block, generator) {
  const brightness =
    generator.valueToCode(block, 'BRIGHTNESS', Order.NONE) || '100';
  const getHost = getHostExpr(generator);
  const hostVar = generator.nameDB_.getDistinctName(
    'kasaHost',
    Blockly.Names.NameType.VARIABLE
  );
  const code = `// Kasa brightness
const ${hostVar} = ${getHost}();
if (typeof kasaControl === 'function') {
  kasaControl({ host: ${hostVar}, action: 'brightness', value: ${brightness} });
}
`;
  return code;
};

// ==============
// kasa_color_temp
// ==============
forBlock['kasa_color_temp'] = function (block, generator) {
  const temp = generator.valueToCode(block, 'TEMP', Order.NONE) || '2700';
  const getHost = getHostExpr(generator);
  const hostVar = generator.nameDB_.getDistinctName(
    'kasaHost',
    Blockly.Names.NameType.VARIABLE
  );
  const code = `// Kasa color temperature
const ${hostVar} = ${getHost}();
if (typeof kasaControl === 'function') {
  kasaControl({ host: ${hostVar}, action: 'colorTemp', value: ${temp} });
}
`;
  return code;
};

// ==============
// kasa_color_rgb
// ==============
forBlock['kasa_color_rgb'] = function (block, generator) {
  const r = generator.valueToCode(block, 'R', Order.NONE) || '255';
  const g = generator.valueToCode(block, 'G', Order.NONE) || '255';
  const b = generator.valueToCode(block, 'B', Order.NONE) || '255';
  const getHost = getHostExpr(generator);
  const hostVar = generator.nameDB_.getDistinctName(
    'kasaHost',
    Blockly.Names.NameType.VARIABLE
  );
  const code = `// Kasa RGB color
const ${hostVar} = ${getHost}();
if (typeof kasaControl === 'function') {
  kasaControl({
    host: ${hostVar},
    action: 'colorRGB',
    r: ${r},
    g: ${g},
    b: ${b}
  });
}
`;
  return code;
};
