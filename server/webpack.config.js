const path = require('path');
const nodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = env => {
  const mode = (env && env.production) ? 'production' : 'development'
  const devtool = (env && env.production) ? false : true
  return {
    mode: mode,
    entry: './src/server.ts',
    target: 'node',
    externals: [nodeExternals()],
    devtool: (devtool) ? 'inline-source-map' : '',
    module: {
      rules: [
        {
          enforce: 'pre',
          loader: 'tslint-loader',
          test: /\.ts$/,
          exclude: [
            /node_modules/
          ],
          options: {
            emitErrors: true
          }
        },
        {
          loader: 'ts-loader',
          test: /\.ts$/,
          exclude: [
            /node_modules/
          ],
          options: {
            configFile: (mode == 'production') ? 'tsconfig.prod.json' : 'tsconfig.dev.json'
          }
        }
      ]
    },
    plugins: [
      new NodemonPlugin()
    ],
    resolve: {
      extensions: ['.ts', '.js']
    },
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, '.')
    }
  };
}
