/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/*
Basic toolbox with core Blockly blocks plus custom Kasa blocks.
*/

export const toolbox = {
  kind: 'categoryToolbox',
  contents: [
    // --------------------
    // Logic
    // --------------------
    {
      kind: 'category',
      name: 'Logic',
      categorystyle: 'logic_category',
      contents: [
        { kind: 'block', type: 'controls_if' },
        { kind: 'block', type: 'logic_compare' },
        { kind: 'block', type: 'logic_operation' },
        { kind: 'block', type: 'logic_negate' },
        { kind: 'block', type: 'logic_boolean' },
      ],
    },

    // --------------------
    // Loops
    // --------------------
    {
      kind: 'category',
      name: 'Loops',
      categorystyle: 'loop_category',
      contents: [
        {
          kind: 'block',
          type: 'controls_repeat_ext',
          inputs: {
            TIMES: {
              shadow: {
                type: 'math_number',
                fields: { NUM: 10 },
              },
            },
          },
        },
        { kind: 'block', type: 'controls_whileUntil' },
        {
          kind: 'block',
          type: 'controls_for',
          inputs: {
            FROM: {
              shadow: {
                type: 'math_number',
                fields: { NUM: 1 },
              },
            },
            TO: {
              shadow: {
                type: 'math_number',
                fields: { NUM: 10 },
              },
            },
            BY: {
              shadow: {
                type: 'math_number',
                fields: { NUM: 1 },
              },
            },
          },
        },
        { kind: 'block', type: 'controls_forEach' },
        { kind: 'block', type: 'controls_flow_statements' },
      ],
    },

    // --------------------
    // Math
    // --------------------
    {
      kind: 'category',
      name: 'Math',
      categorystyle: 'math_category',
      contents: [
        {
          kind: 'block',
          type: 'math_number',
          fields: { NUM: 0 },
        },
        { kind: 'block', type: 'math_arithmetic' },
        { kind: 'block', type: 'math_single' },
        { kind: 'block', type: 'math_round' },
        { kind: 'block', type: 'math_number_property' },
        { kind: 'block', type: 'math_change' },
      ],
    },

    // --------------------
    // Text
    // --------------------
    {
      kind: 'category',
      name: 'Text',
      categorystyle: 'text_category',
      contents: [
        { kind: 'block', type: 'text' },
        { kind: 'block', type: 'text_join' },
        { kind: 'block', type: 'text_length' },
        { kind: 'block', type: 'text_isEmpty' },
        {
          kind: 'block',
          type: 'add_text',
          inputs: {
            TEXT: {
              shadow: {
                type: 'text',
                fields: { TEXT: 'abc' },
              },
            },
          },
        },
      ],
    },

    // --------------------
    // Lists
    // --------------------
    {
      kind: 'category',
      name: 'Lists',
      categorystyle: 'list_category',
      contents: [
        { kind: 'block', type: 'lists_create_empty' },
        {
          kind: 'block',
          type: 'lists_create_with',
          extraState: { itemCount: 3 },
        },
        { kind: 'block', type: 'lists_length' },
        { kind: 'block', type: 'lists_isEmpty' },
        { kind: 'block', type: 'lists_indexOf' },
        { kind: 'block', type: 'lists_getIndex' },
      ],
    },

    // --------------------
    // Kasa custom blocks
    // --------------------
    {
      kind: 'category',
      name: 'Kasa',
      colour: '#ff9800',
      contents: [
        {
          kind: 'block',
          type: 'kasa_init',
          inputs: {
            HOST: {
              shadow: {
                type: 'text',
                fields: { TEXT: '192.168.166.161' },
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'kasa_power',
        },
        {
          kind: 'block',
          type: 'kasa_brightness',
          inputs: {
            BRIGHTNESS: {
              shadow: {
                type: 'math_number',
                fields: { NUM: 100 },
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'kasa_color_temp',
          inputs: {
            TEMP: {
              shadow: {
                type: 'math_number',
                fields: { NUM: 2700 },
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'kasa_color_rgb',
          inputs: {
            R: {
              shadow: {
                type: 'math_number',
                fields: { NUM: 255 },
              },
            },
            G: {
              shadow: {
                type: 'math_number',
                fields: { NUM: 255 },
              },
            },
            B: {
              shadow: {
                type: 'math_number',
                fields: { NUM: 255 },
              },
            },
          },
        },
      ],
    },

    // --------------------
    // Variables / Functions
    // --------------------
    {
      kind: 'sep',
    },
    {
      kind: 'category',
      name: 'Variables',
      categorystyle: 'variable_category',
      custom: 'VARIABLE',
    },
    {
      kind: 'category',
      name: 'Functions',
      categorystyle: 'procedure_category',
      custom: 'PROCEDURE',
    },
  ],
};
