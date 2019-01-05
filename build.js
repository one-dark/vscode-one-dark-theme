const { existsSync, mkdirSync, writeFileSync } = require('fs');
const yaml = require('yamljs');
const { classic, bold, vivid } = require('./src/themes');

const editorConfig = yaml.load('./src/editor.yaml');

// Create the directory if it doesn't exist
if (!existsSync('./themes')) {
  mkdirSync('./themes');
}

writeFileSync(
  './themes/OneDark-Pro.json',
  JSON.stringify(
    {
      ...editorConfig,
      ...classic,
    },
    '',
    2
  )
);

writeFileSync(
  './themes/OneDark-Pro-bold.json',
  JSON.stringify(
    {
      ...editorConfig,
      ...bold,
    },
    '',
    2
  )
)

writeFileSync(
  './themes/OneDark-Pro-vivid.json',
  JSON.stringify(
    {
      ...editorConfig,
      ...vivid,
    },
    '',
    2
  )
);
