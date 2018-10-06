let webpack = require('webpack');

module.exports = {
    entry: './client/index.jsx',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                use: ['style-loader', 'css-loader'],
                test: /\.css$/
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx','.css']
    },
    plugins: [
        new webpack.ProvidePlugin({
            'React': 'react',
            'ReactDOM': 'react-dom',
            'request': 'superagent',
            '_': 'lodash'
        })
    ],
    output: {
        path: __dirname + '/public',
        publicPath: '/',
        filename: 'main.js'
    },
};