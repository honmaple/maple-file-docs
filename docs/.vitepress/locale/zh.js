import fs from 'fs'
import path from 'path'
import {
    defineConfig
} from 'vitepress'


function getAllChangelog() {
    const changelogDir = path.join(__dirname, '../../', 'zh', 'changelog')
    let files = fs.readdirSync(changelogDir)
    return files.map(file => {
        return file.replace(/\.md$/, '')
    }).sort((a, b) => {
        return b.localeCompare(a, undefined, {
            numeric: true,
            sensitivity: 'base'
        })
    })
}

const versions = getAllChangelog()

export const zh = defineConfig({
    lang: 'zh-CN',
    title: "红枫云盘",
    description: "多协议云盘文件管理",
    themeConfig: {
        nav: [{
            text: '首页',
            link: '/'
        },
        {
            text: '博客',
            link: 'https://honmaple.me'
        },
        {
            text: '常见问题',
            link: '/guide/faq'
        },
        ],
        siteTitle: '红枫云盘',
        sidebar: [{
            text: '简介',
            items: [{
                text: '红枫云盘',
                link: '/guide/introduction'
            },
            {
                text: '安装使用',
                link: '/guide/getting-started'
            },
            {
                text: '常见问题',
                link: '/guide/faq'
            },
            ]
        },
        {
            text: '功能列表',
            items: [{
                text: '文件预览',
                link: '/guide/features/preview'
            },
            {
                text: '文件操作',
                link: '/guide/features/action'
            },
            {
                text: '文件缓存',
                link: '/guide/features/cache'
            },
            {
                text: '文件加密',
                link: '/guide/features/encrypt'
            },
            {
                text: '文件压缩',
                link: '/guide/features/compress'
            },
            {
                text: '回收站',
                link: '/guide/features/recycle'
            },
            ]
        },
        {
            text: '存储类型',
            collapsed: true,
            items: [{
                text: '公共参数',
                link: '/guide/drivers/common'
            },
            {
                text: 'S3',
                link: '/guide/drivers/s3'
            },
            {
                text: 'SMB',
                link: '/guide/drivers/smb'
            },
            {
                text: 'FTP',
                link: '/guide/drivers/ftp'
            },
            {
                text: 'SFTP',
                link: '/guide/drivers/sftp'
            },
            {
                text: 'Alist',
                link: '/guide/drivers/alist'
            },
            {
                text: 'Mirror',
                link: '/guide/drivers/mirror'
            },
            {
                text: 'Webdav',
                link: '/guide/drivers/webdav'
            },
            {
                text: '又拍云',
                link: '/guide/drivers/upyun'
            },
            ]
        },
        {
            text: '更新日志',
            collapsed: true,
            items: versions.map(v => {
                return {
                    text: v,
                    link: '/changelog/' + v
                }
            })
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