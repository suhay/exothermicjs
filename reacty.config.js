import yaml from 'js-yaml'

import { NavbarYamlType } from 'Modules/navbar'
import { LAYOUT_SCHEMA } from 'Modules/layout/Section'
import { ArticleYamlType } from 'Modules/article'
import { GetYamlType } from 'Modules/util/Get'

export const version = "v0.2.11"

export const REACTY_SCHEMA = yaml.Schema.create([LAYOUT_SCHEMA], [NavbarYamlType, ArticleYamlType, GetYamlType])
