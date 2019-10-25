import { ThemeConfiguration } from '../models'
import { standardColors, vividColors } from './colors'
import { editorTokens } from './editor'
import {
  getBoldTokens,
  getItalicTokens,
  getStandardTokens,
} from './token-groups'

export function generateTheme(configuration: ThemeConfiguration) {
  const colors = configuration.vivid ? vividColors : standardColors

  const tokenColors = [
    getStandardTokens(colors),
    configuration.italic && getItalicTokens(colors),
    configuration.bold && getBoldTokens(colors),
  ].flatMap(Boolean)

  return {
    colors: editorTokens,
    name: 'One Dark',
    tokenColors,
    type: 'dark',
  }
}
