module.exports = {
  configurewebpack: {
    resolve: {
      //配置后缀省略
      // extensions:[],
      // 配置别名
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
      }
    }
  }
}