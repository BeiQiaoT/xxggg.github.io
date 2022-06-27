export default {
    title: '🐤小黄鸭举个栗子🌰', //标题
    titleTemplate: '『谢夏戈博客』', //标题模板
    description: 'XXG-BLOG', //描述
    lastUpdated: true, //开启上次更新时间
 
    // Theme related configurations.[自定义主题]
    themeConfig: {
        logo: '/logo.svg',
        siteTitle: '『 谢夏戈的博客 』',
        //导航栏
        nav: [
            {
                text: '💻 前端',
                items: [
                    { text: '📖 如何制作网站？', link: '../FrontEnd/FrontEnd/index.md' },
                    { text: '🟧 HTML5', link: '../FrontEnd/HTML/index.md' },
                    { text: '🟥 CSS3', link: '../FrontEnd/CSS/index.md' },
                    { text: '🟨 JavaScript', link: '../FrontEnd/JavaScript/index.md' },
                    { text: '🟦 TypeScript', link: '../FrontEnd/TypeScript/index.md' },
                    { text: '🟩 Vue', link: '../FrontEnd/Vue/index.md' },
                ]
            },
            {
                text: '🖥️ 后端',    
                items: [
                    { text: '⬜ Node', link: '../BackEnd/Node/index.md' },
                    { text: '⬛ Express', link: '../BackEnd/Express/index.md' },
                    { text: '🐬 MySQL', link: '../BackEnd/MySQL/index.md' },
                ]
            },
            {
                text: '🕸️ 爬虫',
                items: [
                    { text: '🐍 Python', link: '../Python/Python/index.md' },
                    { text: '🕸️ 爬虫', link: '../Python/Spider/index.md' },
                    { text: '🍃 Sqlite', link: '../Python/Sqlite/index.md' },
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
            '/FrontEnd': [
                {
                    text: '💻 编程',
                    collapsible: true,
                    items: [
                        { text: '💻 如何制作网站?', link: '/FrontEnd/FrontEnd/index.md' }, 
                        { text: '💻 小试牛刀 🔪', link: '/FrontEnd/FrontEnd/HelloWorld.md' }, 
                        { text: '💻 趁手兵器 ⚔️', link: '/FrontEnd/FrontEnd/Weapons.md' }, 
                        { text: '💻 前端学习路径', link: '/FrontEnd/FrontEnd/LearningPath' }, 
                    ]
                },
                {
                    text: '🟧 HTML',
                    collapsible: true,
                    items: [
                        { text: '🟧 HTML', link: '/FrontEnd/HTML/' }, 
                    ]
                },
                {
                    text: '🟥 CSS',
                    collapsible: true,
                    items: [
                        { text: '🟥 CSS', link: '/FrontEnd/CSS/' }, 
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
                    text: '🐍 Python',
                    collapsible: true,
                    items: [
                        { text: '🐍 Python', link: '/Python/Python/index.md' }, 
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
                    text: '🍃 Sqlite',
                    collapsible: true,
                    items: [
                        { text: '🍃 Sqlite', link: '/Python/Sqlite/index.md' }, 
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
        // carbonAds: {
        //     code: 'your-carbon-code',
        //     placement: 'your-carbon-placement'
        // }
    }
}