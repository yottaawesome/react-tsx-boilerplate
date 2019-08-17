const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
    let isDevelopment = (process.env.NODE_ENV = argv['mode']) !== 'production'

    return {
        entry: './src/index.tsx',

        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'main.js'
        },

        // Enable sourcemaps for debugging webpack's output.
        devtool: 'source-map',

        resolve: {
            modules: ['node_modules'],
            // Add '.ts' and '.tsx' as resolvable extensions.
            extensions: ['.js', '.ts', '.tsx']
        },

        devServer: {
            contentBase: './dist'
        },

        module: {
            rules: [
                {
                    test: /\.ts(x?)$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'ts-loader'
                        }
                    ]
                },
                // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
                {
                    enforce: 'pre',
                    test: /\.js$/,
                    loader: 'source-map-loader'
                },
                // The following loader rules are necessary for s/css modules
                {
                    test: /\.module\.s(a|c)ss$/,
                    loader: [
                        isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            // As of css-loader 3, the options have changed
                            // https://github.com/webpack-contrib/css-loader
                            options: {
                                modules: {
                                    localIdentName: '[folder]__[local]__[hash:base64:5]'
                                },
                                localsConvention: 'camelCase'
                            }
                        },
                        {
                            loader: 'sass-loader',
                        }
                    ]
                },
                {
                    test: /\.scss$/,
                    exclude: /\.module.(s(a|c)ss)$/,
                    use: [
                        isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                        "css-loader",
                        "sass-loader"
                    ]
                },
                {
                    test: /\.(png|jpe?g|gif|svg)$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                fallback: 'file-loader'
                            }
                        }
                    ]
                }
            ]
        },

        plugins: [
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: "main.css"
            })
        ],

        // When importing a module whose path matches one of the following, just
        // assume a corresponding global variable exists and use that instead.
        // This is important because it allows us to avoid bundling all of our
        // dependencies, which allows browsers to cache those libraries between builds.
        // These dependencies are imported at the index.html level.
        externals: {
            'react': 'React',
            'react-dom': 'ReactDOM',
            'react-router-dom': 'ReactRouterDOM'
        }
    }
}
