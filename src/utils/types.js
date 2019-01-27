const types = {}
const { toString } = Object.prototype
'Boolean Number String Function Array Date RegExp Object Error Symbol'
  .split(' ')
  .forEach(type => types[`is${type}`] = v => toString.call(v) === `[object ${type}]`)

export default types
