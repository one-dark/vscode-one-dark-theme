import { Colors } from '../../models/colors'
import { TokenGroup } from '../../models/tokens'

export const getStandardTokens = (colors: Colors): TokenGroup[] => [
  {
    name: 'Chalky',
    scope: ['entity.name.type'],
    settings: {
      foreground: colors.chalky,
    },
  },
  {
    name: 'Purple',
    scope: ['keyword.control', 'storage.type'],
    settings: {
      foreground: colors.purple,
    },
  },
]
