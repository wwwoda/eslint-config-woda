# eslint-config-woda

These are our settings for ESlint that we use at woda

- Supports TypeScript projects using [`typescript-eslint`](https://github.com/typescript-eslint/typescript-eslint)
- Easily extensible
- Based on [Airbnb's JavaScript Style Guide](https://github.com/airbnb/javascript).

## Installation

1. If you don't already have a `package.json` file, create one with `npm init`.

2. Then we need to install everything needed by the config:

```
npx install-peerdeps --dev eslint-config-woda
```

3. You can see that all the necessary `devDependencies` were added to your `package.json` file


If you're using `yarn` and the dependencies aren't showing up in your `package.json` file, try

```
npx install-peerdeps --dev eslint-config-woda -Y
```

4. Create an .eslintrc.js config file in the root of your project's directory (same folder as your `package.json` file)

```bash
touch .eslintrc.js
```

5. The file should look like this

```js
module.exports = {
    extends: 'eslint-config-woda',
};
```

and for TypeScript like this

```js
module.exports = {
    extends: ['eslint-config-woda/typescript'],
    parserOptions: {
        project: './tsconfig.json',
    },
};
```

## Docs

- [eslint](https://eslint.org/)
- [Extending `eslint` configuration files](https://eslint.org/docs/user-guide/configuring#extending-configuration-files)
- [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

## [License](LICENSE)
