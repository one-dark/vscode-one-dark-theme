module.exports = function (colorConfig) {
	return function overrides(config, color, bold=false) {
		const colorObj = colorConfig[color]
		const tokenColors = []

		config.tokenColors.forEach(tc => {
			switch (tc.name) {
				case 'Text':
				case 'js/ts variable.other.constant':
					tc.settings.foreground = colorObj.whiskey
					break

				case 'js variable readwrite':
					tc.scope = tc.scope.split(',').slice(1).join(',')
					break

				case 'js variable readwrite':
				case 'Operators':
				case 'Variables':
					tc = null
					break

				case 'keyword.operator':
					tc.scope += 'keyword.operator,punctuation.separator,punctuation.terminator'
					break

				case 'Keyword Control':
				case 'Storage':
					tc.settings.fontStyle = 'italic'
					break
			}

			if (bold) {
				const boldTokens = [
					'Markup: Heading',
					'Markup: Strong',
					'Sections',
					'CSS: Important Keyword',
					'Functions',
					'Classes',
				]

				if (tc && boldTokens.includes(tc.name)) {
					tc.settings.fontStyle = tc.settings.fontStyle ? tc.settings.fontStyle + ' bold' : 'bold'
				}
			}

			// Only push the token colors that we want
			if (tc) tokenColors.push(tc)
		})

		// Update the config with the temporary token colors array
		config.tokenColors = tokenColors

		// Add the new settings
		config.tokenColors.push(...[
			{
				name: 'Parameters',
				scope: 'variable.parameter',
				settings: {
					foreground: colorObj.whiskey,
					fontStyle: 'italic'
				}
			},
			{
				name: 'JS/TS Arrow Functions',
				scope: 'storage.type.function.arrow',
				settings: {
					fontStyle: 'normal'
				}
			},
			{
				name: 'this and self',
				scope: 'variable.language.special.self,variable.language.this',
				settings: {
					foreground: colorObj.chalky,
					fontStyle: 'italic'
				}
			},
			{
				name: 'JS/TS super',
				scope: 'variable.language.super',
				settings: {
					foreground: colorObj.purple,
					fontStyle: 'italic'
				}
			}
		])

		return config
	}
}
