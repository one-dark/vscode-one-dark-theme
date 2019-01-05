const yaml = require('yamljs');

function readYaml(name) {
	return yaml.load(path.join(__dirname, `${name}.yaml`));
}

function compileTheme(name) {
	const tokenColors = [
		{
			name: 'support.constant.edge',
			scope: 'support.constant.edge',
			settings: {
				foreground: 'purple'
			}
		},
	];

	return {
		tokenColors,
	};
}


return ['classic', 'vivid', 'bold'].map(name => compileTheme(name));