import { defineConfig } from 'vitepress'
import { zh } from './locale/zh'
import { en } from './locale/en'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    rewrites: {
        'zh/:rest*': ':rest*'
    },
    head: [
        ['link', { rel: 'icon', type: 'image/png', href: '/images/favicon.png' }]
    ],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/images/logo.png',
        search: {
            provider: 'local'
        },
        footer: {
            copyright: '© 2024-present <a href="https://github.com/honmaple/maple-file">honmaple</a>'
        }
    },
    locales: {
        root: {
            label: '中文',
            ...zh
        },
        en: {
            label: 'English',
            ...en
        },
    },
})