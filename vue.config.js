module.exports = {

  devServer: {
    host: "127.0.0.1",
    port: 8090,
    open: true,
    proxy: {//设置服务器代理
        "/ele": {// "/ele" 访问的地址是以"/ele"开头的会走该代理
            target: "http://127.0.0.1",//正式访问的地址，target+axios请求的值
            changeOrigin: true,//是否开始代理
            pathRewrite: {//重写地址
                "^/ele": ""
            }
        }
    }
  },
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
}
