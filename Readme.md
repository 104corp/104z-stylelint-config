# stylelint-config-104z

## Install

- 專案內 **dependencies** 都含有 [Requirements](#Requirements) 相關 stylelint 套件 (如有缺少請依項目手動增加)

```
npm install --save-dev git+https://github.com/104corp/stylelint-config-104z.git
```

- 環境未有全部 stylelint 相關套件

```
npm install --save-dev stylelint@^13.7.2 stylelint-config-recommended-scss@^4.2.0 stylelint-order@^4.1.0 stylelint-scss@^3.18.0 stylelint-webpack-plugin@^2.1.0 git+https://github.com/104corp/stylelint-config-104z.git
```

## Usage

```js
// stylelint.config.js

{
 extends: [
    '@104corp/stylelint-config-104z'
  ],
}
```

## Requirements

```js
{
    "stylelint": "^13.7.2",
    "stylelint-config-recommended-scss": "^4.2.0",
    "stylelint-order": "^4.1.0",
    "stylelint-scss": "^3.18.0",
    "stylelint-webpack-plugin": "^2.1.0"
}
```
