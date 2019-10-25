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
    scope: ['keyword.control', 'storage.type'],
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
    scope: ['variable.parameter'],
    settings: {
      foreground: colors.whiskey,
    },
  },
]
