# eslint-config-yyl-react
为 yyl-react 项目提供 eslint 文件

## install
```bash
npm i eslint-config-yyl-react --save-dev
```

### 依赖包
```bash
npm i typescript --save
npm i prettier eslint --save-dev
```

## usage
修改 `package.json` 文件
```json
{
  "eslintConfig": {
    "extends": ["yyl-react"]
  },
  "eslintIgnore": [
    "node_modules",
    "/dist",
    "/test",
    "**/js/lib"
  ],
  "prettier": {
    "semi": false,
    "singleQuote": true,
    "jsxSingleQuote": true,
    "parser": "typescript",
    "quoteProps": "consistent",
    "trailingComma": "none",
    "printWidth": 100
  },
  "scripts": {
    "eslint": "eslint --ext=jsx,ts,tsx ./src",
    "prettier": "prettier --write src/**/*.{ts,tsx,js}"
  }
}
```
> 为了和 prettier 不打架，请按照 `package.json` 的 `prettier` 属性进行配置

## 自定义 prettier
可以通过定义 `prettier/prettier` rules 来修改
```json
{
  "eslintConfig": {
    "rules": {
      "prettier/prettier": ["error", {
        "semi": true
      }]
    }
  },
  "prettier": {
    "semi": true
  }
}
```

## 定义 .prettierignore
```
node_modules/
dist/
```