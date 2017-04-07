# ESLint Plugin against `toUpperCase` usage

Simple plugin only for one simple rule, don't use toUpperCase but use toLocaleUpperCase

# Installation

Install [ESLint](https://www.github.com/eslint/eslint) either locally or globally.

```sh
$ npm install eslint
$ npm install eslint-plugin-no-touppercase
```

# Configuration

Add `plugins` section and specify ESLint-plugin-React (optional) and ESLint-plugin-react-native as a plugin.

```json
{
  "plugins": [
    "no-touppercase"
  ]
}
```

Enable all of the rules that you would like to use.

```json
{
  "rules": {
    "no-touppercase/check-uppercase": 2,
  }
}
```

# List of supported rules