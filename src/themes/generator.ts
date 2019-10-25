import { ThemeConfiguration } from '../models/configuration'
import { standardColors, vividColors } from './colors'
import { editorTokens } from './editor'
import { getBoldTokens } from './token-groups/bold'
import { getStandardTokens } from './token-groups/standard'
import { getItalicTokens } from './token-groups/italic'

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
