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
          test: /\.ts$/,
          enforce: 'pre',
          use: [
            {
              loader: 'tslint-loader',
              options: {
                emitErrors: true,
                typeCheck: true,
                tsConfigFile: (mode == 'production') ? 'tsconfig.prod.json' : 'tsconfig.dev.json',
              }
            }
          ]
        },
        {
          test: /\.ts$/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                configFile: (mode == 'production') ? 'tsconfig.prod.json' : 'tsconfig.dev.json'
              }
            }
          ],
        }
      ]
    },
    plugins: (mode == 'production') ? [] : [
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
