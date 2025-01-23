# eslint-config-yyl-react

为 yyl-react 项目提供 eslint@9.x prettier@3.x 配置文件

## install

```bash
npm i eslint-config-yyl-react --save-dev
```

### 依赖包

```bash
npm i typescript --save
npm i prettier@3 eslint@9 --save-dev
```

## usage

修改 `package.json` 文件

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

> 为了和 prettier 不打架，请按照 `package.json` 的 `prettier` 属性进行配置

## 自定义 prettier

可以通过定义 `prettier/prettier` rules 来修改

```json
{
  "eslintConfig": {
    "root": true,
    "rules": {
      "prettier/prettier": [
        "error",
        {
          "semi": true
        }
      ]
    }
  },
  "prettier": {
    "semi": true
  }
}
```

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
