import { resolve } from 'path'
export default {
    plugins: [
        [
            'umi-plugin-react',
            {
                antd: true,
                dva: true,
                title: 'xdApp',
                dynamicImport: {
                    webpackChunkName: true,
                },
                hd: false,
                routes: {
                    exclude: [
                        /model\.(j|t)sx?$/,
                        /service\.(j|t)sx?$/,
                        /models\//,
                        /components\//,
                        /services\//,
                    ],
                },
            }
        ]
    ],
    extraBabelPlugins: [
        ['import', { libraryName: 'antd-mobile', style: true }],
    ],
    es5ImcompatibleVersions: true,
    targets: { chrome: 49, firefox: 45, safari: 10, ie: 9, ios: 8 },
    alias: {
        '@': resolve(__dirname, './src'),
    },
    theme: './theme.config.js',
}
