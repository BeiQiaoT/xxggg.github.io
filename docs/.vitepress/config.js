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
                    { text: '🖥️ 网站制作入门', link: '../FrontEnd/FrontEnd/index.md' },
                    { text: '🟧 HTML', link: '../FrontEnd/HTML/HTMLNote.md' },
                    { text: '🟥 CSS', link: '../FrontEnd/CSS/CSS_Note.md' },
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
                    { text: '🐍 Python', link: '../Python/Python/Python介绍.md' },
                    { text: '🕸️ 爬虫', link: '../Python/Spider/index.md' },
                    { text: '🍃 SQLite', link: '../Python/Sqlite/index.md' },
                ]
            },
            {
                text: '👨‍💻 关于',
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
            '/FrontEnd/FrontEnd': [
                {
                    text: '💻「零基础」',
                    collapsible: true,
                    items: [
                        { text: '💻 如何制作网站?', link: '/FrontEnd/FrontEnd/index.md' }, 
                        { text: '💻 Hello World', link: '/FrontEnd/FrontEnd/HelloWorld.md' }, 
                        { text: '💻 趁手兵器 ⚔️', link: '/FrontEnd/FrontEnd/Weapons.md' }, 
                        { text: '💻 介绍前端三剑客', link: '/FrontEnd/FrontEnd/introduce' }, 
                        { text: '💻 前端学习路径', link: '/FrontEnd/FrontEnd/LearningPath' },
                    ]
                },
            ],
            '/FrontEnd/HTML': [
                
                {
                    text: '🟧 HTML',
                    collapsible: true,
                    items: [
                        { text: '🟧 HTML 笔记', link: '/FrontEnd/HTML/HTMLNote' }, 
                    ]
                },
                {
                    text: '🟧 HTML5 笔记',
                    collapsible: true,
                    items: [
                        { text: '🟧 HTML5 Web存储', link: '/FrontEnd/HTML/HTML5webstorage' }, 
                    ]
                },
            ],
            '/FrontEnd/CSS': [
                
                {
                    text: '🟥 CSS',
                    collapsible: true,
                    items: [
                        { text: '🟥 CSS 笔记', link: '/FrontEnd/CSS/CSS_Note' }, 
                        { text: '🟥 CSS 代码片段', link: '/FrontEnd/CSS/CSS_CodeSnippet' }, 
                        { text: '🟥 CSS 选择器', link: '/FrontEnd/CSS/CSS_selector' }, 
                        { text: '🟥 雪碧图 - Sprite', link: '/FrontEnd/CSS/CSS_Sprite' }, 
                    ]
                },
                {
                    text: '🟥 CSS3',
                    collapsible: true,
                    items: [
                        { text: '🟥 CSS3 笔记', link: '/FrontEnd/CSS/CSS3_Note' }, 
                        { text: '🟥 CSS3 兼容', link: '/FrontEnd/CSS/CSS3_Compatibility' }, 
                        { text: '🟥 CSS3 文本', link: '/FrontEnd/CSS/CSS3_Text' }, 
                        { text: '🟥 CSS3 背景图片', link: '/FrontEnd/CSS/CSS3_background' }, 
                        { text: '🟥 CSS3 变形', link: '/FrontEnd/CSS/CSS3_transform' }, 
                        { text: '🟥 CSS3 动画', link: '/FrontEnd/CSS/CSS3_animation' }, 
                        { text: '🟥 CSS3 过渡', link: '/FrontEnd/CSS/CSS3_transition' }, 
                        { text: '🟥 媒体类型 - media', link: '/FrontEnd/CSS/CSS3_Media' }, 
                    ]
                },
                {
                    text: '🟥 布局',
                    collapsible: true,
                    items: [
                        { text: '🟥 『居中』 ', link: '/FrontEnd/CSS/layout_Center' }, 
                        { text: '🟥 『Flex』 ', link: '/FrontEnd/CSS/layout_Flex' }, 
                        { text: '🟥 『Grid』 ', link: '/FrontEnd/CSS/layout_Grid' }, 
                    ]
                },
            ],
            '/FrontEnd/JavaScript': [
               
                {
                    text: '🟨 JavaScript',
                    collapsible: true,
                    items: [
                        { text: '🟨 JavaScript', link: '/FrontEnd/JavaScript/' }, 
                    ]
                },
                
            ],
            '/FrontEnd/TypeScript': [
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
            '/Python/Python': [
                {
                    text: '🐍 Python 学习',
                    collapsible: true,
                    items: [
                        { text: '🐍 Python 介绍', link: '/Python/Python/Python介绍.md' }, 
                        { text: '🐍 Python 安装', link: '/Python/Python/Python安装.md' }, 
                    ]
                },
                {
                    text: '🐍 Python 笔记',
                    collapsible: true,
                    items: [
                        { text: '🐍 Python 零碎笔记', link: '/Python/Python/PythonNote.md' }, 
                        { text: '🐍 数据类型', link: '/Python/Python/PythonNote_数据类型.md' }, 
                        { text: '🐍 变量', link: '/Python/Python/PythonNote_变量.md' }, 
                        { text: '🐍 字符串方法', link: '/Python/Python/PythonNote_字符串.md' }, 
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
            ],
            '/Python/Spider': [
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
            '/Python/Sqlite': [
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
                    text: '⭐ 关于',
                    collapsible: true,
                    items: [
                        { text: '🧑‍💻‍ 关于我', link: '/About/AboutMe' }, // /config/index.md
                        { text: '🐤 小黄鸭', link: '/About/AboutDuck' }, // /config/three.md
                    ]
                },
                // {   
                //     text: '🧑‍💻 程序员的故事',
                //     collapsible: true,
                //     items: [
                //         { text: '小黄鸭调试法', link: '/About/AboutMe' }, 
                //         { text: 'HelloWorld', link: '/About/AboutDuck' }, 
                //         { text: '关于master和main', link: '/About/AboutDuck' }, 
                //         { text: '尤雨溪懂个锤子Vue', link: '/About/AboutDuck' }, 
                //     ]
                // }
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