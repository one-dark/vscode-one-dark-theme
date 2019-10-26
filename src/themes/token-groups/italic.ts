import { FontStyle, TokenGroup } from '../../models'

export const italicTokens: TokenGroup[] = [
  {
    name: 'Italic',
    scope: [
      'comment',
      'keyword',
      'storage.type',
      'storage.modifier',
      'variable.language.this',
      'variable.language.super',
      'string.url',
      'markup.underline.link',
    ],
    settings: {
      fontStyle: FontStyle.Italics,
    },
  },
  {
    name: 'Italic reset',
    scope: [
      'keyword.operator',
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
