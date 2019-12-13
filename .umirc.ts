import { IConfig } from 'umi-types'; // @ts-ignore

// @ts-ignore
import { dark, light } from 'umi-ui-theme'; // ref: https://umijs.org/config/

const config: IConfig = {
    treeShaking: true,
    // routes: [
    //   {
    //     path: '/',
    //     component: '../layouts/index',
    //     routes: [
    //       {
    //         path: '/mytrade/MyTradeMain',
    //         component: './mytrade/MyTradeMain',
    //       },
    //       {
    //         path: '/Quotation/QuotationMain',
    //         component: './Quotation/QuotationMain',
    //       },
    //       {
    //         path: '/',
    //         component: '../pages/index',
    //       },
    //     ],
    //   },
    // ],
    plugins: [
        // ref: https://umijs.org/plugin/umi-plugin-react.html
        [
            'umi-plugin-react',
            {
                antd: true,
                dva: {
                    immer: true,
                },
                dynamicImport: true,
                title: 'XSWAP',
                dll: false,
                routes: {
                    exclude: [
                        // /index/,
                    ],
                },
            },
        ],
    ],
    theme: {
        '@primary-color': '#3d2ea5',
    },
};
export default config;
