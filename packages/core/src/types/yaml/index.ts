import yaml from 'js-yaml'

import { ArticleYamlType } from './article'
import { ColYamlType } from './col'
import { FooterYamlType } from './footer'
import { ForeachYamlType } from './foreach'
import { FragmentYamlType } from './fragment'
import { GetYamlType } from './get'
import { HeadYamlType } from './head'
import { HeaderYamlType } from './header'
import { MainYamlType } from './main'
import { MarkdownYamlType } from './markdown'
import { NavbarYamlType } from './navbar'
import { SectionYamlType } from './section'
import { StateYamlType } from './state'

export const YamlTypes: Record<string, yaml.Type> = {
  ArticleYamlType,
  ColYamlType,
  FooterYamlType,
  ForeachYamlType,
  FragmentYamlType,
  GetYamlType,
  HeadYamlType,
  HeaderYamlType,
  MainYamlType,
  MarkdownYamlType,
  NavbarYamlType,
  SectionYamlType,
  StateYamlType,
}
