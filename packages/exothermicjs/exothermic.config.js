"use strict";

var exports = module.exports = {};

var yaml = require('js-yaml');
var NavbarYamlType = require('./src/components/navbar').NavbarYamlType;
var LAYOUT_SCHEMA = require('./src/components/layout/Section').LAYOUT_SCHEMA;
var ArticleYamlType = require('./src/components/article').ArticleYamlType;
var GetYamlType = require('./src/components/util/Get').GetYamlType;
var FormYamlType = require('./src/components/form').FormYamlType;

exports.Version = require('./package.json').version;
exports.Schema = yaml.Schema.create([LAYOUT_SCHEMA], [NavbarYamlType, ArticleYamlType, GetYamlType, FormYamlType]);

