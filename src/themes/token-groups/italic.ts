import { FontStyle, TokenGroup } from '../../models'

export const italicTokens: TokenGroup[] = [
  {
    name: 'Chalky',
    scope: ['keyword.control', 'storage.type'],
    settings: {
      fontStyle: FontStyle.Italics,
    },
  },
]
