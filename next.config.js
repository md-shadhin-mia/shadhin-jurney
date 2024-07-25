/** @type {import('next').NextConfig} */
const nextConfig = {
    compress: true,
    webpack: (config) => {
        //add babel loader
        // config.module.rules.push({
        //     test: /\.(tsx|jsx)$/,
        //     use: [{
        //         loader: 'babel-loader',
        //         options: {
        //             sourceMaps: dev,
        //             plugins: [
        //                 require.resolve('babel-plugin-macros'),
        //             ]
        //         }
        //     }],
        // })

        return config
    }
}

module.exports = nextConfig
