import path from 'path'
import { load as loadYaml } from 'yamljs'

/**
 * Reads a yaml file into a JS object
 * @function readYaml
 * @param name - File name without the .yaml extension
 * @param dir - Directory which the file is in. If empty, it reads from the
 * current directory.
 * @returns The parsed yaml file as a JS object
 */
function readYaml (name: string, dir = 'themes'): any {
  return loadYaml(path.join(__dirname, dir, `${name}.yaml`))
}
