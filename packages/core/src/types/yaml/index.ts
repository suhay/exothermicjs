import yaml from 'js-yaml'

import { NavbarYamlType } from './navbar'
import {
  SectionYamlType,
  ColYamlType,
  MainYamlType,
  HeaderYamlType,
  FooterYamlType,
} from './layout'
import { ArticleYamlType } from './article'
import { GetYamlType, MarkdownYamlType } from './util'

export const YamlTypes: Record<string, yaml.Type> = {
  NavbarYamlType,
  SectionYamlType,
  ColYamlType,
  MainYamlType,
  HeaderYamlType,
  FooterYamlType,
  ArticleYamlType,
  GetYamlType,
  MarkdownYamlType,
}
