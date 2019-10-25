import { Colors } from '../../models/colors'
import { TokenGroup } from '../../models/tokens'

export const getStandardTokens = (colors: Colors): TokenGroup[] => [
  {
    name: 'Chalky',
    scope: ['entity.name.type', 'support.type'],
    settings: {
      foreground: colors.chalky,
    },
  },
  {
    name: 'Coral',
    scope: ['entity.name.tag'],
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
    name: 'Malibu',
    scope: ['entity.name.function'],
    settings: {
      foreground: colors.malibu,
    },
  },
  {
    name: 'Purple',
    scope: ['keyword.control', 'storage.type', 'storage.modifier'],
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
      'constant.language',
      'variable.parameter',
      'variable.other.constant',
    ],
    settings: {
      foreground: colors.whiskey,
    },
  },
]
