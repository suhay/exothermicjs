import yaml from 'js-yaml'

import { NavbarYamlType } from './navbar'
import { FragmentYamlType } from './fragment'
import { ArticleYamlType } from './article'
import { MarkdownYamlType } from './markdown'
import { GetYamlType } from './get'
import { ColYamlType } from './col'
import { SectionYamlType } from './section'
import { FooterYamlType } from './footer'
import { MainYamlType } from './main'
import { HeaderYamlType } from './header'

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
