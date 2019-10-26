import { FontStyle } from '../../models'
import { TokenGroup } from '../../models/tokens'

export const boldItalicTokens: TokenGroup[] = [
  {
    name: 'Bold Italic',
    scope: ['keyword.other.important'],
    settings: {
      fontStyle: FontStyle.BoldItalics,
    },
  },
]
