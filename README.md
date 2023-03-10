![npm](https://img.shields.io/npm/v/ascii2binary) [![GitHub stars](https://img.shields.io/github/stars/5102a/ascii2binary)](https://github.com/5102a/ascii2binary/stargazers) [![GitHub issues](https://img.shields.io/github/issues/5102a/ascii2binary)](https://github.com/5102a/ascii2binary/issues) [![GitHub license](https://img.shields.io/github/license/5102a/ascii2binary)](https://github.com/5102a/ascii2binary/blob/main/LICENSE) [![CI via GitHub Actions](https://github.com/5102a/ascii2binary/actions/workflows/main.yml/badge.svg)](https://github.com/5102a/ascii2binary/actions/workflows/main.yml)

English | [简体中文](README_ch.md)

# ascii2binary

Base64-string to ArrayBuffer

## Install

```shell
// npm
$ npm install --save ascii2binary

// yarn
$ yarn add ascii2binary

// pnpm
$ pnpm add ascii2binary
```

## Usage

### ES6 Module

```javascript
// Note that there is no default export
import { ascii2binary } from 'ascii2binary';
```

### node.js (commonjs)

```javascript
// Note that there is no default export
const { ascii2binary } = require('ascii2binary')
```

### Use

```javascript
// Input base64 string
ascii2binary('yq==') // ArrayBuffer: [202]
```

Convert Picture

```javascript
// Base64 string to ArrayBuffer
const base64 = 'iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAV0lEQVQImWP8DwQMWAATjPFkZztDuLUBg5pJBEP1+vsMjGAdj1YyhHu0M5yHq5eG6njzFEkQBJ5CJUSkGQxRJKQZGP5DweMdbf/DrPT/qxqH/69ad+8/AGWjJsYqydAgAAAAAElFTkSuQmCC'
ascii2binary(base64) // ArrayBuffer: [...]
```

### Development and construction

Installation Dependencies

```shell
$ pnpm install
```

Repackage

```shell
$ pnpm run build
```

### Test

It is necessary to install the development software


```shell
$ pnpm run test
```
