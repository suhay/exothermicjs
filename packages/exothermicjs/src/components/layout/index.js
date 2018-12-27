import { Type as ColYamlType } from './Col';
import { SectionYamlType } from './Section';
import { FooterYamlType } from './footer';
import { HeaderYamlType } from './header';
import { MainYamlType } from './main';

import yaml from 'js-yaml';

const LAYOUT_SCHEMA = yaml.Schema.create([
  SectionYamlType, 
  ColYamlType, 
  FooterYamlType, 
  HeaderYamlType, 
  MainYamlType
]);

export {
   SectionYamlType, ColYamlType, LAYOUT_SCHEMA, FooterYamlType, HeaderYamlType, MainYamlType
}