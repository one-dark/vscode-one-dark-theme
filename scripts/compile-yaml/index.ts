import { join } from 'path'

import {
  writeJson,
  OUTPUT_DIRECTORY,
  readYaml,
  listDirectory,
  INPUT_DIRECTORY
} from './io-utils'
import loadTokens from './load-tokens'

/**
 * Moves the color config from the source YAML file to the output JSON file.
 * @param name - Name of the color config file.
 */
function moveColorConfig (name: string) {
  return writeJson(
    join(OUTPUT_DIRECTORY, 'colors', `${name}.json`),
    readYaml(join('colors', `${name}.yaml`))
  )
}

(async function () {
  // Read colors yaml files and move to the output directory
  await Promise.all([
    moveColorConfig('normal'),
    moveColorConfig('vivid')
  ])

  // Create objects to collect normal and italic scopes
  const tokens = {
    normal: {},
    italic: {}
  }

  // Read base theme scopes and put individual parts into the objects
  loadTokens(tokens, 'theme.yaml')

  // Read languages and put individual parts into the objects
  const promises = (await listDirectory(join(INPUT_DIRECTORY, 'languages')))
    .map(filename => loadTokens(tokens, join('languages', filename)))

  await Promise.all(promises)

  console.log(tokens)
})()
