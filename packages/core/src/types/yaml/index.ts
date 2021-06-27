import yaml from 'js-yaml'

import { NavbarYamlType } from './navbar'
import {
  MainYamlType,
  HeaderYamlType,
  FooterYamlType,
  FragmentYamlType,
} from './layout'
import { ArticleYamlType } from './article'
import { MarkdownYamlType } from './markdown'
import { GetYamlType } from './get'
import { ColYamlType } from './col'
import { SectionYamlType } from './section'

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
  FragmentYamlType,
}
