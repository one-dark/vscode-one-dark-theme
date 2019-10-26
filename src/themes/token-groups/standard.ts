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
      'punctuation.definition.list.begin.markdown',
      'punctuation.definition.list.end.markdown',
      'constant.other.character-class',
    ],
    settings: {
      foreground: colors.coral,
    },
  },
  {
    name: 'Cyan',
    scope: [
      'keyword.operator',
      'markup.underline.link',
      'constant.character.escape',
      'string.regexp',
      'string.url',
    ],
    settings: {
      foreground: colors.cyan,
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
    name: 'Ivory',
    scope: ['punctuation.separator', 'support.type.property-name.css'],
    settings: {
      foreground: colors.ivory,
    },
  },
  {
    name: 'Sage',
    scope: [
      'string',
      'markup.quote',
      'string.other.link.description',
      'markup.inline',
      'source.ini',
    ],
    settings: {
      foreground: colors.sage,
    },
  },
  {
    name: 'Stone',
    scope: ['comment'],
    settings: {
      foreground: colors.stone,
    },
  },
  {
    name: 'Violet',
    scope: [
      'keyword',
      'keyword.operator.new',
      'markup.italic',
      'storage.modifier',
      'storage.type',
    ],
    settings: {
      foreground: colors.violet,
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
      'keyword.operator.quantifier.regexp',
    ],
    settings: {
      foreground: colors.whiskey,
    },
  },
]

export const alwaysItalicTokens: TokenGroup[] = [
  {
    name: 'Always italic',
    scope: ['markup.quote', 'markup.italic'],
    settings: {
      fontStyle: FontStyle.Italics,
    },
  },
]

export const alwaysBoldTokens: TokenGroup[] = [
  {
    name: 'Always bold',
    scope: ['heading', 'markup.bold'],
    settings: {
      fontStyle: FontStyle.Bold,
    },
  },
]
