import { FontStyle, TokenGroup } from '../../models'

export const italicTokens: TokenGroup[] = [
  {
    name: 'Italic',
    scope: [
      'comment',
      'keyword.control',
      'keyword.other',
      'keyword.operator.new',
      'storage.modifier',
      'storage.type',
      'variable.language.this',
    ],
    settings: {
      fontStyle: FontStyle.Italics,
    },
  },
  {
    name: 'Reset',
    scope: [
      'keyword.other.type',
      'storage.modifier.import',
      'storage.type.built-in',
      'storage.type.function.arrow',
      'storage.type.generic',
      'storage.type.java',
      'storage.type.primitive',
    ],
    settings: {
      fontStyle: FontStyle.None,
    },
  },
]
