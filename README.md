# eslint-config-yyl-react
为 yyl-react 项目提供 eslint 文件

## install
```bash
npm i eslint-config-yyl-react --save-dev
```

### 依赖包
主依赖
```bash
npm i typescript --save
npm i prettier eslint --save-dev
```

配置依赖
```bash
npm i @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-node eslint-config-prettier eslint-config-standard eslint-plugin-prettier eslint-plugin-html eslint-plugin-node eslint-plugin-promise eslint-plugin-react eslint-plugin-standard --save-dev
```


## usage
修改 `package.json` 文件
```json
{
  "eslintConfig": {
    "extends": ["yyl-react"]
  },
  "eslintIgnore": {
    "node_modules",
    "/dist",
    "/test",
    "**/js/lib"
  },
  "prettier": {
    "semi": false,
    "singleQuote": true,
    "jsxSingleQuote": true,
    "parser": "typescript"
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