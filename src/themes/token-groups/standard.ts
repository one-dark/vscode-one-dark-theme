import { Colors } from '../../models/colors'
import { TokenGroup } from '../../models/tokens'
import { FontStyle } from '../../models'

export const getStandardTokens = (colors: Colors): TokenGroup[] => [
  {
    name: 'Chalky',
    scope: [
      'entity.name.type',
      'entity.other.inherited-class',
      'keyword.other.type',
      'punctuation.definition.annotation',
      'storage.modifier.import',
      'storage.type.annotation',
      'storage.type.built-in',
      'storage.type.generic',
      'storage.type.java',
      'storage.type.primitive',
      'support.class',
      'support.other.namespace',
      'support.type',
      'variable.language.this',
    ],
    settings: {
      foreground: colors.chalky,
    },
  },
  {
    name: 'Coral',
    scope: [
      'entity.name.tag',
      'meta.object-literal.key',
      'heading',
      'punctuation.definition.template-expression',
      'support.type.property-name',
      'variable.object.property',
      'variable.other.enummember',
      'punctuation.definition.list',
    ],
    settings: {
      foreground: colors.coral,
    },
  },
  {
    name: 'Dark',
    scope: ['comment'],
    settings: {
      foreground: colors.dark,
    },
  },
  {
    name: 'Fountain Blue',
    scope: ['keyword.operator', 'markup.underline.link'],
    settings: {
      foreground: colors.fountainBlue,
    },
  },
  {
    name: 'Malibu',
    scope: [
      'entity.name.function',
      'entity.other.attribute-name.id.css',
      'support.function',
      'string.other.link',
      'variable.language.super',
    ],
    settings: {
      foreground: colors.malibu,
    },
  },
  {
    name: 'Light white',
    scope: ['punctuation.separator', 'support.type.property-name.css'],
    settings: {
      foreground: colors.lightWhite,
    },
  },
  {
    name: 'Purple',
    scope: [
      'keyword.control',
      'keyword.operator.expression',
      'keyword.operator.new',
      'keyword.other',
      'markup.italic',
      'storage.modifier',
      'storage.type',
    ],
    settings: {
      foreground: colors.purple,
    },
  },
  {
    name: 'Sage',
    scope: [
      'string',
      'markup.quote',
      'string.other.link.description',
      'markup.fenced_code',
      'markup.inline',
    ],
    settings: {
      foreground: colors.sage,
    },
  },
  {
    name: 'Whiskey',
    scope: [
      'constant',
      'entity.other.attribute-name',
      'variable.other.constant',
      'variable.parameter',
      'markup.bold',
    ],
    settings: {
      foreground: colors.whiskey,
    },
  },
]

export const alwaysItalicTokens: TokenGroup[] = [
  {
    name: 'Italic',
    scope: ['markup.quote', 'markup.italic'],
    settings: {
      fontStyle: FontStyle.Italics,
    },
  },
]

export const alwaysBoldTokens: TokenGroup[] = [
  {
    name: 'Italic',
    scope: ['heading', 'markup.bold'],
    settings: {
      fontStyle: FontStyle.Bold,
    },
  },
]
