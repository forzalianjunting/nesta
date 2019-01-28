# nesta
一个迷你状态管理库。

[![npm version](https://img.shields.io/npm/v/nesta.svg?style=flat-square)](https://www.npmjs.com/package/nesta)
[![npm downloads](https://img.shields.io/npm/dm/nesta.svg?style=flat-square)](https://www.npmjs.com/package/nesta)

## ✨ 特性
- 极简的API，易上手，不依赖前端框架；
- 利用[immer.js](https://github.com/mweststrate/immer)实现 immutable state，摆脱麻烦且不可预期的对象和数组展开语法。

## 📦 安装
```bash
npm install nesta
```
```bash
yarn add nesta
```

## 🔨 试例
```javascript
import { createStore } from 'nesta'

const store = createStore({
  data: {
    pageData: [
      {
        id: 7,
        name: 'sheva'
      }
    ]
  }
})

const prevState = store.getState()

store.put(state => {
  state.data.pageData.push({
    id: 22,
    name: 'kaka'
  })
})

const currentState = store.getState()

console.log('prevState: ', prevState)
console.log('currentState: ', currentState)
console.log('prevState === currentState: ,' prevState === currentState)
```