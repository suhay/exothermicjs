"use strict";

var exports = module.exports = {};
const yaml = require('js-yaml');

const yamlTypes = {
  NavbarYamlType: require('./src/components/navbar').NavbarYamlType,
  SectionYamlType: require('./src/components/layout').SectionYamlType,
  ColYamlType: require('./src/components/layout').ColYamlType,
  MainYamlType: require('./src/components/layout').MainYamlType,
  HeaderYamlType: require('./src/components/layout').HeaderYamlType,
  FotterYamlType: require('./src/components/layout').FooterYamlType,
  ArticleYamlType: require('./src/components/article').ArticleYamlType,
  GetYamlType: require('./src/components/util/Get').GetYamlType,
  FormYamlType: require('./src/components/form').FormYamlType
};

exports.Version = require('./package.json').version;
exports.Schema = yaml.Schema.create(Object.keys(yamlTypes).map(function(key) { return yamlTypes[key]; }));
exports.Types = yamlTypes;