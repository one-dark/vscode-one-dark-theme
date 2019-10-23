import { join } from 'path'
import { loadScopes } from './load-scopes'
import { Scopes } from './types'
import {
  INPUT_DIRECTORY,
  listDirectory,
  OUTPUT_DIRECTORY,
  readYaml,
  writeJson,
} from './utils/io'
import { writeScopes } from './write-scopes'

/**
 * Moves the color config from the source YAML file to the output JSON file.
 * @param name - Name of the color config file.
 */
function moveColorConfig(name: string): Promise<void> {
  return writeJson(
    join(OUTPUT_DIRECTORY, 'colors', `${name}.json`),
    readYaml(join('colors', `${name}.yaml`))
  )
}

;(async function(): Promise<void> {
  // Read colors yaml files and move to the output directory
  await Promise.all([moveColorConfig('normal'), moveColorConfig('vivid')])

  // Create objects to collect normal and italic scopes
  const scopes: Scopes = {
    bold: {},
    italic: {},
    normal: {},
  }

  // Read base theme scopes and put individual parts into the objects
  loadScopes(scopes, 'theme.yaml')

  // Read languages and put individual parts into the objects
  ;(await listDirectory(join(INPUT_DIRECTORY, 'languages'))).forEach(filename =>
    loadScopes(scopes, join('languages', filename))
  )

  // Write the scopes to the ouput files
  await writeScopes(scopes)

  // Write the editor config
  await writeJson(
    join(OUTPUT_DIRECTORY, 'editor.json'),
    readYaml('editor.yaml')
  )
})()
