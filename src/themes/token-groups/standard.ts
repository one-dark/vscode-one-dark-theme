import { Colors } from '../../models/colors'
import { TokenGroup } from '../../models/tokens'

export const getStandardTokens = (colors: Colors): TokenGroup[] => [
  {
    name: 'Magnolia',
    scope: [
      'meta.brace',
      'punctuation.definition.array',
      'punctuation.definition.binding-pattern',
      'punctuation.definition.block',
      'punctuation.definition.dictionary',
      'punctuation.definition.string',
      'punctuation.definition.tag',
      'punctuation.curlybrace',
      'punctuation.fullstop',
      'punctuation.section',
      'punctuation.separator',
      'punctuation.support',
      'punctuation.terminator',
      'meta.structure.dictionary.json',
      'string.quoted.double.json',
    ],
    settings: {
      foreground: '#F6F0FF',
    },
  },
]
