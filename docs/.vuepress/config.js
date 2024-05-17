import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { copyCodePlugin } from '@vuepress/plugin-copy-code'
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
export default defineUserConfig({
  // lang: 'zh-CN',

  // title: 'VuePress',
  // description: 'My first VuePress Site',

  head: [
    [
      'link',{ rel: 'icon', href: '/images/favicon.ico' }
    ]
  ],
  locales: {
    //默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
      title: 'SakuraMai WIKI',
      description: '全新的SakuraMai WIKI 1.0。',
    },
    '/en/': {
      lang: 'en-US',
      title: 'SakuraMai WIKI',
      description: '全新的SakuraMai WIKI 1.0。',
    },
  },

  theme: defaultTheme({
    logo: null,
    author:'SakuraMai',

    locales: {
      '/': {
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        lastUpdated: '上次更新',
        navbar: [
          {
            text: '首页',
            link: '/',
          },
          // {
          //   text: '关于我们',
          //   link: '/about/',
          // },
          {
            text: '🧝 指南',
            //link: '/guide/'
            //children: ['/guide/README.md', '/guide/getting-started.md', '/guide/configuration.md','/guide/page.md']
            //导航数组
            children: [
              {
                //第1组名称(不可点击)
                text: '科学上网',
                //第1组导航标签
                children: ['/guide/002', '/guide/001',]
              },
              {
                //第1组名称(不可点击)
                text: '快速开始',
                //第1组导航标签
                children: ['/guide/003', '/guide/004', '/guide/005',]
              }
             ],
          },
        ],
        sidebar: {
        //   '/about': [
        //     {
        //       text: '指南',
        //       children: ['/about/001','/about/002',],
        //       collapsible: false, //折叠开关
        //     },
        //   ],
        '/guide': [
          {
            // text: '指南',
            children: [
              {
                //第1组名称(不可点击)
                text: '科学上网',
                //第1组导航标签
                children: ['/guide/002', '/guide/001']
              },
              {
                //第1组名称(不可点击)
                text: '快速开始',
                //第1组导航标签
                children: ['/guide/003', '/guide/004', '/guide/005',]
              }
             ],
          },
        ],
        },
      },
      '/en/': {
        selectLanguageName: 'English',
        selectLanguageText: 'Language',
        navbar: [
          {
            text: 'Home',
            link: '/',
          },
          {
            text: '指南',
            link: '/guide/',
          },
        ],
      },
    },
    
  }),
  plugins: [
    mdEnhancePlugin({
      footnote: true,
      spoiler: true,
      mark: true,
      tabs: true,
    }),
    copyCodePlugin({
      locales: {
        '/': {
          // 覆盖复制按钮标签文字
          copy: '复制此段代码',
        },

        '/en/': {
          copy: 'copy',
        },
      },
    }),
  ],

  bundler: viteBundler(),
})
