import { join } from 'path'
import { promises as fs } from 'fs'
import { load as loadYaml } from 'yamljs'

const INPUT_DIRECTORY = join(__dirname, '..', 'config')
const OUTPUT_DIRECTORY = join(__dirname, '..', 'src', 'config')

/**
 * Reads a yaml file into a JS object
 * @param path - The path of the YAML file relative to the config directory.
 * @returns The parsed yaml file as a JS object.
 */
function readYaml (path: string): any {
  return loadYaml(join(INPUT_DIRECTORY, path))
}

async function writeJson (path: string, data: any) {
  const directory = path.substring(0, path.lastIndexOf('/'))
  await fs.mkdir(directory, { recursive: true })

  return fs.writeFile(path, JSON.stringify(data))
}

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

  // Read languages and put individual parts into the objects
})()
