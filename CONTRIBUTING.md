# Contributing

## Installation

Run the following commands to clone the repository for this theme and install all necessary dependencies.

```bash
git clone git@github.com:one-dark/vscode-one-dark-theme.git
cd vscode-one-dark-theme
npm install
```

## Testing the theme

To run the theme, open the project in VS Code and run the `Debug: Start Debugging` command. When you start debugging, a new VS Code test instance \(heretofore referred to as the "test instance"\) will be launched with all your extensions disabled and the One Dark theme enabled and selected. The TypeScript compiler will also start in watch mode and compile any changes you make to the theme. After making your changes, run the `Debug: Restart` command to restart the test instance with the changes you made.

### Live reload using nodemon

This project is configured to allow live theme reloading using `nodemon`. This will update the theme colors in the test instance to allow you to immediately see how your changes will look without having to restart the test instance. To utilize this feature, run the following command before you start debugging.

```bash
npm run watch:theme
```

## Color Guidelines

To increase theme consistency, the following colors should be used for all syntax highlighting colors. Editor colors should use this color palette when possible, but the editor colors are not required to strictly follow this color palette.

| Name       | Value    | Preview                     | Name        | Value    | Preview                      |
| :--------- | :------- | :-------------------------- | :---------- | :------- | :--------------------------- |
| **chalky** | \#e5c07b | ![](docs/colors/chalky.jpg) | **malibu**  | \#61afef | ![](docs/colors/malibu.jpg)  |
| **coral**  | \#e06c75 | ![](docs/colors/coral.jpg)  | **sage**    | \#98c379 | ![](docs/colors/sage.jpg)    |
| **cyan**   | \#56b6c2 | ![](docs/colors/cyan.jpg)   | **stone**   | \#5c6370 | ![](docs/colors/stone.jpg)   |
| **error**  | \#f44747 | ![](docs/colors/error.jpg)  | **violet**  | \#c678dd | ![](docs/colors/violet.jpg)  |
| **ivory**  | \#abb2bf | ![](docs/colors/ivory.jpg)  | **whiskey** | \#d19a66 | ![](docs/colors/whiskey.jpg) |
