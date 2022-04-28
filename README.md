# eslint-plugin-long-hooks-trace

linter for long dependencies or setstate call for react hooks

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-long-hooks-trace`:

```sh
npm install eslint-plugin-long-hooks-trace --save-dev
```

## Usage

Add `long-hooks-trace` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "long-hooks-trace"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "long-hooks-trace/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here


