import { Colors } from '../../models/colors'
import { TokenGroup } from '../../models/tokens'

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
      'punctuation.definition.template-expression',
      'support.type.property-name',
      'variable.object.property',
      'variable.other.enummember',
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
    scope: ['keyword.operator'],
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
      'storage.modifier',
      'storage.type',
    ],
    settings: {
      foreground: colors.purple,
    },
  },
  {
    name: 'Sage',
    scope: ['string'],
    settings: {
      foreground: colors.sage,
    },
  },
  {
    name: 'Whiskey',
    scope: [
      'constant',
      'entity.other.attribute-name.class.css',
      'entity.other.attribute-name.pseudo-class.css',
      'variable.other.constant',
      'variable.parameter',
    ],
    settings: {
      foreground: colors.whiskey,
    },
  },
]
