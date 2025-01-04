import { defineConfig } from 'vitepress'

export const zh = defineConfig({
    lang: 'zh-CN',
    title: "红枫云盘",
    description: "多协议云盘文件管理",
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '常见问题', link: '/zh/faq' },
        ],
        siteTitle: '红枫云盘',
        sidebar: [
            {
                text: '功能列表',
                items: [
                    { text: '文件压缩', link: '/zh/todo' },
                    { text: '文件加密', link: '/zh/todo' },
                    {
                        text: '文件同步',
                        collapsed: true,
                        items: [
                            { text: '同步', link: '/zh/todo' },
                            { text: '备份', link: '/zh/todo' },
                        ]
                    },
                    { text: '回收站', link: '/zh/todo' },
                    { text: '常见问题', link: '/zh/todo' },
                ]
            },
            {
                text: '存储类型',
                collapsed: true,
                items: [
                    { text: 'S3', link: '/zh/todo' },
                    { text: 'SMB', link: '/zh/todo' },
                    { text: 'FTP', link: '/zh/todo' },
                    { text: 'SFTP', link: '/zh/todo' },
                    { text: 'Alist', link: '/zh/todo' },
                    { text: 'Mirror', link: '/zh/todo' },
                    { text: 'Webdav', link: '/zh/todo' },
                    { text: '又拍云', link: '/zh/todo' },
                ]
            }
        ],
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },

        outline: {
            label: '页面导航'
        },

        lastUpdated: {
            text: '最后更新于',
            formatOptions: {
                dateStyle: 'short',
                timeStyle: 'medium'
            }
        },
        langMenuLabel: '多语言',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        skipToContentLabel: '跳转到内容'
    }
})