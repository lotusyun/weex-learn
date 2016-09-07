/**
 * Created by lichunyan on 16/9/7.
 */
require('webpack');
require('weex-loader');

var path = require('path');

module.exports = {
    entry: {
        index: path.join(__dirname, 'src', 'tech_list.we?entry=true')
    },
    output: {
        path: 'dist',
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.we(\?[^?]+)?$/,
            loaders: ['weex-loader']
        },{
            test: /\.js(\?[^?]+)?$/,
            loaders: ['weex-loader?type=script']
        }]
    }
}