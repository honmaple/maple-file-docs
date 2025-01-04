import { defineConfig } from 'vitepress'

export const en = defineConfig({
    lang: "en-US",
    title: "Maple File",
    description: "upload and manage multi cloud storage with serverless",
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'FAQ', link: '/zh/faq' },
        ],
        siteTitle: 'Maple File',
        sidebar: [
            {
                text: 'Features',
                items: [
                    { text: 'File Compress', link: '/zh/todo' },
                    { text: 'File Encrypt', link: '/zh/todo' },
                    {
                        text: 'File Sync',
                        collapsed: true,
                        items: [
                            { text: 'Sync', link: '/zh/todo' },
                            { text: 'Backup', link: '/zh/todo' },
                        ]
                    },
                    { text: 'Recycle Bin', link: '/zh/todo' },
                    { text: 'FAQ', link: '/zh/todo' },
                ]
            },
            {
                text: 'Driver Types',
                collapsed: true,
                items: [
                    { text: 'S3', link: '/zh/todo' },
                    { text: 'SMB', link: '/zh/todo' },
                    { text: 'FTP', link: '/zh/todo' },
                    { text: 'SFTP', link: '/zh/todo' },
                    { text: 'Alist', link: '/zh/todo' },
                    { text: 'Mirror', link: '/zh/todo' },
                    { text: 'Webdav', link: '/zh/todo' },
                    { text: 'upyun', link: '/zh/todo' },
                ]
            }
        ],
    }
})