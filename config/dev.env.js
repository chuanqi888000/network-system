var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_API: '"http://172.16.9.39:6021"'
  BASE_API: '"https://minivisionidc.com:18080"'
})
