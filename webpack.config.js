const path = require('path');
const webpack = require('webpack');

module.exports = function(env,argv) {
  const isEnvDevelopment = argv.mode === 'development' || !argv.mode;
  const isEnvProduction = argv.mode === 'production';

  return {
    mode: isEnvProduction ? 'production' : isEnvDevelopment && 'development',
    devtool: isEnvProduction ? 'source-map' : isEnvDevelopment && 'cheap-module-source-map',
    entry: './src/index.js', 
    output: {
      filename:'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test:/\.css$/,
          use:[
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: ["file-loader"]
        },
        { 
          test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
          loader: "url-loader",
          options: {
          limit: 10000
          }
        }
    ]
    },
    devServer:{
      hot:true,
      contentBase: path.resolve(__dirname, 'dist'),
    },
    plugins:[
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
    ]
  }
};