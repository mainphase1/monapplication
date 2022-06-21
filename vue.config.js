const publicPath = process.env.NODE_ENV === 'production' ? '/monapplication/' : '/' // <-- add this line

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: publicPath, // <-- add this line
  transpileDependencies: true
})
