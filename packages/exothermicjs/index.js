import yaml from 'js-yaml'

import { NavbarYamlType } from './src/components/navbar'
import { SectionYamlType, ColYamlType, MainYamlType, HeaderYamlType, FooterYamlType } from './src/components/layout'
import { ArticleYamlType } from './src/components/article'
import { GetYamlType } from './src/components/util/Get'
import { FormYamlType } from './src/components/form'

const Types = {
  NavbarYamlType,
  SectionYamlType,
  ColYamlType,
  MainYamlType,
  HeaderYamlType,
  FooterYamlType,
  ArticleYamlType,
  GetYamlType,
  FormYamlType
}

const BuildSchema = (plugins) => {
  yaml.Schema.create(Object.keys(Types).map((key) => Types[key]).concat(plugins))
};

const Schema = yaml.Schema.create(Object.keys(Types).map((key) => Types[key]))

export { version } from './package.json'

export { Types, Schema }