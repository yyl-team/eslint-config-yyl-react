# eslint-config-yyl-react

为 yyl-react 项目提供 eslint@9.x prettier@3.x 通用配置

## install

```bash
# npm
npm i eslint-config-yyl-react --save-dev
# yarn
yarn add eslint-config-yyl-react --dev
```

### 依赖包

```bash
npm i typescript --save
npm i prettier@3 eslint@9 --save-dev
```

## usage

修改 `package.json` 文件, 加入 prettier 规则

```json
{
  "eslintConfig": {
    "extends": ["yyl-react"]
  },
  "eslintIgnore": ["node_modules", "/dist", "/test", "**/js/lib"],
  "prettier": {
    "tabWidth": 2,
    "semi": false,
    "singleQuote": true,
    "jsxSingleQuote": true,
    "quoteProps": "consistent",
    "trailingComma": "none",
    "printWidth": 100
  },
  "scripts": {
    "eslint": "eslint --ext=jsx,ts,tsx ./",
    "prettier": "prettier --write ./**"
  }
}
```

新建 `eslint.config.mjs` 文件

```js
import yylReactConfig from 'eslint-config-yyl-react'
/** @type {import('eslint').Linter.Config[]} */
export default [
  ...yylReactConfig,
  {
    ignores: ['node_modules/*', 'output/*', 'test/*']
  },
  {
    languageOptions: {
      globals: {}
    },
    rules: {}
  }
]
```

> 为了和 prettier 不打架，请按照 `package.json` 的 `prettier` 属性进行配置

## 定义 .prettierignore

```
**/js/lib/**
dist/**
output/**
node_modules/**
*.yml
.gitignore
.prettierignore
yarn.lock
package-lock.json
**/*.png
**/*.jpg
**/*.bmp
**/*.jpeg
**/*.gif
**/*.pug
**/*.sh
**/*.conf
**/*.log
```
