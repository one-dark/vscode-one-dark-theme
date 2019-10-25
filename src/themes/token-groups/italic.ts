import { FontStyle, TokenGroup } from '../../models'

export const italicTokens: TokenGroup[] = [
  {
    name: 'Italic',
    scope: ['comment', 'keyword.control', 'storage.type', 'storage.modifier'],
    settings: {
      fontStyle: FontStyle.Italics,
    },
  },
  {
    name: 'Reset',
    scope: ['storage.type.function.arrow'],
    settings: {
      fontStyle: FontStyle.None,
    },
  },
]
