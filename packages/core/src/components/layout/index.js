import yaml from 'js-yaml'
import {
  ColYamlType,
  SectionYamlType,
  FooterYamlType,
  MainYamlType,
  HeaderYamlType,
} from './type'

const LAYOUT_SCHEMA = yaml.Schema.create([
  SectionYamlType,
  ColYamlType,
  FooterYamlType,
  HeaderYamlType,
  MainYamlType,
])

export {
  SectionYamlType, ColYamlType, LAYOUT_SCHEMA, FooterYamlType, HeaderYamlType, MainYamlType,
}
