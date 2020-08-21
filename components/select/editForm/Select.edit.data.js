"use strict";

require("core-js/modules/es.regexp.flags");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../../../utils/utils");

var _default = [{
  type: 'select',
  input: true,
  weight: 0,
  // tooltip: 'The source to use for the select data. Values lets you provide your own values and labels. JSON lets you provide raw JSON data. URL lets you provide a URL to retrieve the JSON data from.',
  key: 'dataSrc',
  defaultValue: 'values',
  label: 'Data Source Type',
  dataSrc: 'values',
  data: {
    values: [{
      label: 'Values',
      value: 'values'
    }]
  }
} , {
  type: 'datagrid',
  input: true,
  label: 'Valori', // MS
  key: 'data.values',
  // tooltip: 'Values to use as the data source. Labels are shown in the select field. Values are the corresponding values saved with the submission.',
  weight: 10,
  reorder: true,
  defaultValue: [{
    label: '',
    value: ''
  }],
  components: [{
    label: 'Nome',
    key: 'label',
    input: true,
    type: 'textfield'
  }, {
    label: 'Valore',
    key: 'value',
    input: true,
    type: 'textfield',
    allowCalculateOverride: true,
    calculateValue: {
      _camelCase: [{
        var: 'row.label'
      }]
    }
  }],
  conditional: {
    json: {
      '===': [{
        var: 'data.dataSrc'
      }, 'values']
    }
  }
} 
];
exports.default = _default;