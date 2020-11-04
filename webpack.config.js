module.exports={
  entry:{
    main:'./main.js'
  },
  module:{
    rules:[{
      test:/\.js$/,
      use:{
        loader:'babel-loader',
        options:{
          presets:['@babel/preset-env'],
          // 生成自己的createElement
          plugins:[['@babel/plugin-transform-react-jsx',{pragma:'createElement'}]]
        }
      }
    }]

  },
  mode:"development",
  optimization:{
    minimize:false
  }
}