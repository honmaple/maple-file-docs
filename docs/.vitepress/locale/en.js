import { defineConfig } from 'vitepress'

export const en = defineConfig({
    lang: "en-US",
    title: "Maple File",
    description: "Multi-protocol cloud file management",
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'FAQ', link: '/en/guide/faq' },
        ],
        siteTitle: 'Maple File',
        sidebar: [
            {
                text: 'Features',
                items: [
                    { text: 'File Encrypt', link: '/en/guide/todo' },
                    { text: 'File Compress', link: '/en/guide/todo' },
                    { text: 'Recycle Bin', link: '/en/guide/todo' },
                    { text: 'FAQ', link: '/en/guide/todo' },
                ]
            },
            {
                text: 'Driver Types',
                collapsed: true,
                items: [
                    { text: 'S3', link: '/en/guide/todo' },
                    { text: 'SMB', link: '/en/guide/todo' },
                    { text: 'FTP', link: '/en/guide/todo' },
                    { text: 'SFTP', link: '/en/guide/todo' },
                    { text: 'Alist', link: '/en/guide/todo' },
                    { text: 'Mirror', link: '/en/guide/todo' },
                    { text: 'Webdav', link: '/en/guide/todo' },
                    { text: 'upyun', link: '/en/guide/todo' },
                ]
            }
        ],
    }
})