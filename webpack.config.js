const path = require('path');
//const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = (env) => {
  const isProduction = env === 'production';
  //const cssExtract =new ExtractTextPlugin('styles.css')
  const CSSExtract = new ExtractTextPlugin('styles.css')

  console.log('env', env)
  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/, 
        use: CSSExtract.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }]
    },
    plugins: [
      CSSExtract
  ],
    devtool: isProduction ? 'source-map' : 'inline-cheap-module-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    } 
  }
}
//returning a function instead of an object
// module.exports = {
  
// };
//.css dollar sign tells you to target files ending in .css
//use allows you to specify an array of loaders
//loader sass - loader converts scss to css
//question mark after the s tells you including the s is optional
//historty fallback api returns index.html which loads bundle which will run router code