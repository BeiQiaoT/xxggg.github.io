export default {
    title: '小黄鸭', //标题
    titleTemplate: '谢夏戈的博客', //标题模板
    description: 'XXG-BLOG', //描述
    lastUpdated: true, //开启上次更新时间
    
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { property: 'og:title', content: '谢夏戈博客' }],
        ['meta', { property: 'og:site_name', content: '谢夏戈博客' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:description', content: '前端教程' }],
        ['meta', { property: 'og:url', content: 'https://xxggg.github.io/' }],
        [
            "script",
            {
                "data-ad-client": "ca-pub-7650804804345609",
                async: true,
                src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
            }
        ]
    ],
    
    markdown: {
        extractHeaders: [ 'h2', 'h3' ]
    },
    // Theme related configurations.[自定义主题]
    themeConfig: {
        logo: '/logo.svg',
        siteTitle: '『 谢夏戈的博客 』',
        //导航栏
        nav: [
            {
                text: '💻 前端',
                items: [
                    { text: '🖥️ 网站制作教程', link: '../FrontEnd/FrontEnd/index.md' },
                    { text: '🟧 HTML5', link: '../FrontEnd/HTML/index.md' },
                    { text: '🟥 CSS3', link: '../FrontEnd/CSS/index.md' },
                    { text: '🟨 JavaScript', link: '../FrontEnd/JavaScript/index.md' },
                    { text: '🟦 TypeScript', link: '../FrontEnd/TypeScript/index.md' },
                    { text: '🟩 Vue', link: '../FrontEnd/Vue/index.md' },
                ]
            },
            {
                text: '🧮 后端',    
                items: [
                    { text: '⬜ Node', link: '../BackEnd/Node/index.md' },
                    { text: '⬛ Express', link: '../BackEnd/Express/index.md' },
                    { text: '🐬 MySQL', link: '../BackEnd/MySQL/index.md' },
                ]
            },
            {
                text: '🕸️ 爬虫',
                items: [
                    { text: '🐍 Python', link: '../Python/Python/Python前导.md' },
                    { text: '🕸️ 爬虫', link: '../Python/Spider/index.md' },
                    { text: '🍃 SQLite', link: '../Python/Sqlite/index.md' },
                ]
            },
            {
                text: '👨‍💻 关于我',
                items: [
                    { text: '👨‍💻 关于我', link: '../About/AboutMe' },
                    { text: '🐤 小黄鸭', link: '../About/AboutDuck' },
                    { text: '🍥 【旧】的博客', link: 'https://xxggg.github.io/XXG-Blog' },
                ]
            }
        ],
        //侧边栏
        sidebar: {
            '/FrontEnd/Vue': [
                {
                    text: '🟩 Vue',
                    collapsible: true,
                    items: [
                        { text: '🟩 Vue', link: '/FrontEnd/Vue/' }, 
                    ]
                },
            ],
            '/FrontEnd/': [
                {
                    text: '💻「零基础」',
                    collapsible: true,
                    items: [
                        { text: '💻 如何制作网站?', link: '/FrontEnd/FrontEnd/index.md' }, 
                        { text: '💻 Hello World', link: '/FrontEnd/FrontEnd/HelloWorld.md' }, 
                        { text: '💻 趁手兵器 ⚔️', link: '/FrontEnd/FrontEnd/Weapons.md' }, 
                        { text: '💻 前端学习路径', link: '/FrontEnd/FrontEnd/LearningPath' }, 
                    ]
                },
                {
                    text: '🟧 HTML',
                    collapsible: true,
                    items: [
                        { text: '🟧 HTML', link: '/FrontEnd/HTML/' }, 
                        { text: '🟧 HTML笔记', link: '/FrontEnd/HTML/Note' }, 
                    ]
                },
                {
                    text: '🟥 CSS',
                    collapsible: true,
                    items: [
                        { text: '🟥 CSS', link: '/FrontEnd/CSS/' }, 
                        { text: '🟥 CSS3', link: '/FrontEnd/CSS/CSS3' }, 
                        { text: '🟥 ', link: '/FrontEnd/CSS/CSS3' }, 
                    ]
                },
                {
                    text: '🟨 JavaScript',
                    collapsible: true,
                    items: [
                        { text: '🟨 JavaScript', link: '/FrontEnd/JavaScript/' }, 
                    ]
                },
                {
                    text: '🟦 TypeScript',
                    collapsible: true,
                    items: [
                        { text: '🟦 TypeScript', link: '/FrontEnd/TypeScript/' }, 
                    ]
                },
            ],
            '/BackEnd/': [
                {
                    text: '⬜ Node',
                    collapsible: true,
                    items: [
                        { text: '⬜ Node', link: '/BackEnd/Node/index.md' }, 
                    ]
                },
                {
                    text: '⬛ Express',
                    collapsible: true,
                    items: [
                        { text: '⬛ Express', link: '/BackEnd/Express/index.md' }, 
                    ]
                },
                {
                    text: '🐬 MySQL',
                    collapsible: true,
                    items: [
                        { text: '🐬 MySQL', link: '/BackEnd/MySQL/index.md' }, 
                    ]
                },
            ],
            '/Python/': [
                {
                    text: '🐍 Python 学习',
                    collapsible: true,
                    items: [
                        { text: '🐍 Python前导', link: '/Python/Python/Python前导.md' }, 
                    ]
                },
                {
                    text: '🐍 Python 笔记',
                    collapsible: true,
                    items: [
                        { text: '🐍 数据类型', link: '/Python/Python/PythonNote_数据类型.md' }, 
                        { text: '🐍 变量', link: '/Python/Python/PythonNote_变量.md' }, 
                        { text: '🐍 字符串', link: '/Python/Python/PythonNote_字符串.md' }, 
                        { text: '🐍 数组 - list', link: '/Python/Python/PythonNote_数组.md' }, 
                        { text: '🐍 元组 - tuple ', link: '/Python/Python/PythonNote_元组.md' }, 
                        { text: '🐍 条件判断', link: '/Python/Python/PythonNote_条件判断.md' }, 
                        { text: '🐍 循环 / 迭代', link: '/Python/Python/PythonNote_循环.md' }, 
                        { text: '🐍 dict和set', link: '/Python/Python/PythonNote_dict和set.md' }, 
                        { text: '🐍 函数', link: '/Python/Python/PythonNote_函数.md' }, 
                        { text: '🐍 数据类型转换', link: '/Python/Python/PythonNote_数据类型转换.md' }, 
                        { text: '🐍 列表生成式 / 生成器', link: '/Python/Python/PythonNote_列表生成式.md' }, 
                        { text: '🐍 异常处理 try', link: '/Python/Python/PythonNote_异常处理.md' }, 
                        { text: '🐍 Python - JSON', link: '/Python/Python/PythonNote_JSON.md' }, 
                        { text: '🐍 with ... as ...', link: '/Python/Python/PythonNote_WithAs' }, 
                        { text: '🐽 未完待续...', link: '/Python/Python/未完待续' }, 
                    ]
                },
                {
                    text: '🐍 Python - File',
                    collapsible: true,
                    items: [
                        { text: '🐍 文件操作', link: '/Python/Python/PythonFile' }, 
                    ]
                },
                {
                    text: '🕸️ 爬虫',
                    collapsible: true,
                    items: [
                        { text: '🕸️ 爬虫', link: '/Python/Spider/index.md' }, 
                    ]
                },
                {
                    text: '🍃 SQLite',
                    collapsible: true,
                    items: [
                        { text: '🍃 SQLite 安装', link: '/Python/Sqlite/index.md' }, 
                    ]
                }
            ],
            '/About/': [
                {
                    items: [
                        // This shows `/config/index.md` page.
                        { text: '👨‍💻 关于我', link: '/About/AboutMe' }, // /config/index.md
                        { text: '🐤 小黄鸭', link: '/About/AboutDuck' }, // /config/three.md
                         
                    ]
                }
            ],
        },
        //社交链接
        socialLinks: [
            { icon: 'github', link: 'https://github.com/XXGGG' },
            { icon: 'twitter', link: 'https://twitter.com/TWI_XXGGG' },
            { icon: 'instagram', link: 'https://www.instagram.com/xiexiage/' },
            { icon: 'youtube', link: 'https://www.youtube.com/channel/UCjzdLs5HAhATbfZH6vaJCEA' },
        ],
        //页脚
        footer: {
            copyright: 'Copyright © 2019-present 谢夏戈'
        },
        //碳广告
        carbonAds: {
            code: 'your-carbon-code',
            placement: 'your-carbon-placement'
        }
    }
}