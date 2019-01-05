const fs = require('fs');
const yaml = require('yamljs');
const compile = require('./src/compile');

// Load the editor configuration yaml file
const editorConfig = yaml.load('./src/editor.yaml');

// Create the directory if it doesn't exist
if (!fs.existsSync('./themes')) {
  fs.mkdirSync('./themes');
}

// Get the list of themes using the files in the src/themes folder
fs.readdirSync('./src/themes')
  .map(name => name.replace('.yaml', ''))
  .forEach(name =>
    fs.writeFileSync(
      `./themes/${name}.json`,
      JSON.stringify({ ...editorConfig, ...compile(name) }, '', 2)
    )
  );
