import { FontStyle, TokenGroup } from '../../models'

export const italicTokens: TokenGroup[] = [
  {
    name: 'Italic',
    scope: [
      'comment',
      'keyword',
      'markup.underline.link',
      'storage.modifier',
      'storage.type',
      'string.url',
      'variable.language.super',
      'variable.language.this',
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
