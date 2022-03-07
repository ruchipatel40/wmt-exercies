const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports={
    mode:"production",
    entry:"./src/App.js",
    // output:{
    //     path:path.resolve(__dirname,'dist'),
    //     filename:'output.js'
    // },
    plugins: [new MiniCssExtractPlugin()],
    module:{
        rules:[
            {
                test:/\.css$/,
                // use:[
                //     'style-loader',
                //     'css-loader'
                // ]
                exclude:/node_modules/,
                use:[MiniCssExtractPlugin.loader,"css-loader"],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      ['@babel/preset-env', { targets: "defaults" }]
                    ],
                    plugins: ['@babel/plugin-proposal-class-properties']
                  }
                }
              }
        ]
    },
     devServer:{
    //     // contentBase: '/home/Documents/webapp/dist',
      static: {
          directory: path.join(__dirname, "dist")
          },

    //     // compress:true,
    //     // port:3900
    //     // contentBase: path.join(__dirname, 'dist'),
    //     compress: true,
    //     port: 9014,
    //     hot: "only"
     },

}