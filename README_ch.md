![npm](https://img.shields.io/npm/v/ascii2binary) [![GitHub stars](https://img.shields.io/github/stars/5102a/ascii2binary)](https://github.com/5102a/ascii2binary/stargazers) [![GitHub issues](https://img.shields.io/github/issues/5102a/ascii2binary)](https://github.com/5102a/ascii2binary/issues) [![GitHub license](https://img.shields.io/github/license/5102a/ascii2binary)](https://github.com/5102a/ascii2binary/blob/main/LICENSE) [![CI via GitHub Actions](https://github.com/5102a/ascii2binary/actions/workflows/main.yml/badge.svg)](https://github.com/5102a/ascii2binary/actions/workflows/main.yml)

[English](README.md) | 简体中文

# ascii2binary

Base64-string 直接转 ArrayBuffer

## 安装

```shell
// npm
$ npm install --save ascii2binary

// yarn
$ yarn add ascii2binary

// pnpm
$ pnpm add ascii2binary
```

## 使用

### ES6 模块

```javascript
// 注意，没有默认导出
import { ascii2binary } from 'ascii2binary';
```

### node.js (commonjs) 模块

```javascript
// 注意，没有默认导出
const { ascii2binary } = require('ascii2binary')
```

### 用法

```javascript
// 输入 base64 字符串
ascii2binary('yq==') // ArrayBuffer: [202]
```

图片数据转换（图像 base64 转原始二进制数据）

```javascript
// base64 字符串转 ArrayBuffer
const base64 = 'iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAV0lEQVQImWP8DwQMWAATjPFkZztDuLUBg5pJBEP1+vsMjGAdj1YyhHu0M5yHq5eG6njzFEkQBJ5CJUSkGQxRJKQZGP5DweMdbf/DrPT/qxqH/69ad+8/AGWjJsYqydAgAAAAAElFTkSuQmCC'
ascii2binary(base64) // ArrayBuffer: [...]
```

### 开发与构建

安装依赖

```shell
$ pnpm install
```

重新打包

```shell
$ pnpm run build
```

### 测试

需先安装开发依赖

```shell
$ pnpm run test
```