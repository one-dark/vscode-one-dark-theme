# Contributing

## Installation

Run the following commands to clone the repository for this theme and install
all necessary dependencies.

```bash
git clone git@github.com:one-dark/vscode-one-dark-theme.git
cd vscode-one-dark-theme
npm install
```

## Testing the theme

To run the theme, open the project in VS Code and run the
`Debug: Start Debugging` command. When you start debugging, a new VS Code test
instance \(heretofore referred to as the "test instance"\) will be launched with
all your extensions disabled and the One Dark theme enabled and selected. The
TypeScript compiler will also start in watch mode and compile any changes you
make to the theme. After making your changes, run the `Debug: Restart` command
to restart the test instance with the changes you made.

### Live reload using nodemon

This project is configured to allow live theme reloading using `nodemon`. This
will update the theme colors in the test instance to allow you to immediately
see how your changes will look without having to restart the test instance. To
utilize this feature, run the following command before you start debugging.

```bash
npm run theme:watch
```

## Color Guidelines

To increase theme consistency, the following colors should be used for all
syntax highlighting colors. Editor colors should use this color palette when
possible, but the editor colors are not required to strictly follow this color
palette.

| Name       | Value    | Preview     | Name        | Value    | Preview      |
| :--------- | :------- | :---------- | :---------- | :------- | :----------- |
| **chalky** | \#e5c07b | ![][chalky] | **malibu**  | \#61afef | ![][malibu]  |
| **coral**  | \#e06c75 | ![][coral]  | **sage**    | \#98c379 | ![][sage]    |
| **cyan**   | \#56b6c2 | ![][cyan]   | **stone**   | \#5c6370 | ![][stone]   |
| **error**  | \#f44747 | ![][error]  | **violet**  | \#c678dd | ![][violet]  |
| **ivory**  | \#abb2bf | ![][ivory]  | **whiskey** | \#d19a66 | ![][whiskey] |

[chalky]:
  https://user-images.githubusercontent.com/25914066/149455179-c3404ca7-c393-4644-aeb8-717df67d56b6.jpg
[coral]:
  https://user-images.githubusercontent.com/25914066/149455181-96cf48fb-f5a0-4535-83ba-fd529c10e147.jpg
[cyan]:
  https://user-images.githubusercontent.com/25914066/149455182-962b9272-e0e6-4d95-8060-771321f02029.jpg
[error]:
  https://user-images.githubusercontent.com/25914066/149455183-87935a9f-e7d9-4366-8d2b-ebd9e77fcbf6.jpg
[ivory]:
  https://user-images.githubusercontent.com/25914066/149455184-b322fcff-2d2d-4519-bb9c-fb6579511082.jpg
[malibu]:
  https://user-images.githubusercontent.com/25914066/149455186-bbfd263a-5ea7-4352-bd13-f1ef62e2c4c9.jpg
[sage]:
  https://user-images.githubusercontent.com/25914066/149455187-73f2b5d6-066f-4a46-94a1-ec5b31a84be5.jpg
[stone]:
  https://user-images.githubusercontent.com/25914066/149455189-55d0265c-7e4a-46ff-ae7e-78d456fb974a.jpg
[violet]:
  https://user-images.githubusercontent.com/25914066/149455191-49f9f035-8eed-4e60-85c1-4f20c1e04107.jpg
[whiskey]:
  https://user-images.githubusercontent.com/25914066/149455192-7a1e7d56-5b61-4a82-9b6b-979d955b4263.jpg
