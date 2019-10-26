# Development

### Installation

Run the following commands to clone the repository for this theme and install all necessary dependencies.

```bash
git clone git@github.com:one-dark/vscode-one-dark-theme.git
cd vscode-one-dark-theme
yarn
```

### Testing the Theme

To run the theme, open the project in VS Code and run the `Debug: Start Debugging` command. When you start debugging, a new VS Code test instance \(heretofore referred to as the "test instance"\) will be launched with all your extensions disabled and the One Dark theme enabled and selected. The TypeScript compiler will also start in watch mode and compile any changes you make to the theme.  After making your changes, run the `Debug: Restart` command to restart the test instance with the changes you made.

#### Live reload using nodemon

This project is configured to allow live theme reloading using `nodemon`. This will update the theme colors in the test instance to allow you to immediately see how your changes will look without having to restart the test instance. To utilize this feature, run the following command before you start debugging.

```bash
yarn watch:theme
```

{% hint style="warning" %}
This method does not respect the theme configuration settings in the VS Code settings file.  To simulate different combinations of settings while using live reload, following the instructions below.
{% endhint %}

Live reload is accomplished by watching for source file changes and regenerating the `one_dark.json` file when changes are made. As mentioned in the warning above, this does not respect the VS Code settings and thus you must manually configure the settings if you want to test different settings combinations while using live reload, change the options in the `scripts/generate-theme.ts` file where the `generateTheme` method is called.  Below is an example showing how to generate the theme with the bold and vivid settings turned on and the italic setting turned off.

```typescript
import { join } from 'path'
import { generateTheme } from '../src/themes'
import { writeFile } from '../src/utils/file'

writeFile(
  join(__dirname, '..', 'themes', 'one-dark.json'),
  generateTheme({
    bold: true,
    italic: false,
    vivid: true
  })
)
```

