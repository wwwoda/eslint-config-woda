# eslint-config-woda

> The standard shareable config for eslint used by Woda.

- Supports TypeScript projects using [`typescript-eslint`](https://github.com/typescript-eslint/typescript-eslint)
- Easily extensible
- Based on [Airbnb's JavaScript Style Guide](https://github.com/airbnb/javascript).

## Installation

If using `yarn`

```bash
yarn add --dev eslint-config-woda eslint
```

or with `npm`

```bash
npm i --save-dev eslint-config-woda eslint
```

Create an eslint config file

```bash
touch .eslintrc.js
```

## Usage with JavaScript

Set your `eslint` config to

```js
module.exports = {
    extends: 'eslint-config-woda',
};
```

## Usage with TypeScript

Set your `eslint` config to

```js
module.exports = {
    extends: ['slint-config-woda/typescript'],
    parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
    },
};
```

Putting `__dirname` in `parserOptions.tsconfigRootDir` is necessary because of [this issue](https://github.com/typescript-eslint/typescript-eslint/issues/251).

## Visual Studio Code Integration

Install the [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
plugin for Visual Studio Code. Enable autoFormat for `javascript` and `javascriptreact` files.

- Go to Code > Preference [File > Preference for Windows & Linux].
- Edit the WorkSpace Settings (Recommended).

```json
{
    "eslint.autoFixOnSave": true,
    "[javascript]": {
        "editor.formatOnSave": false
    },
    "[javascriptreact]": {
        "editor.formatOnSave": false
    }
}
```

If you are using for typescript files, the following additional settings are needed.

```json
{
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        {
            "language": "typescript",
            "autoFix": true
        }, {
            "language": "typescriptreact",
            "autoFix": true
        }
    ]
}
```

## Docs

- [eslint](https://eslint.org/)
- [Extending `eslint` configuration files](https://eslint.org/docs/user-guide/configuring#extending-configuration-files)
- [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
