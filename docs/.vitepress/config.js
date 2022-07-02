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
        ],
        // 添加百度统计
        [
            "script",
            {},
            `
            var _hmt = _hmt || [];
            (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?bc1fc3ec2768667d3746b56f7d411ddd";
                var s = document.getElementsByTagName("script")[0]; 
                s.parentNode.insertBefore(hm, s);
            })();
            `
        ],
        // 添加谷歌统计
        [
            "script",
            {
                src: "https://www.googletagmanager.com/gtag/js?id=G-ZLSGRZRXCN",
                async: true
            }
        ],
        [
            "script",
            {},
            `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-ZLSGRZRXCN');
            `
        ]
    ],
    // Theme related configurations.[自定义主题]
    themeConfig: {
        logo: '/logo.svg',
        siteTitle: '『 谢夏戈的博客 』',
        //导航栏
        nav: [
            {
                text: '📖 笔记',
                items: [
                    { text: '🐈‍⬛ Git', link: '../Note/Git.md' },
                    { text: '🧶 Yarn', link: '../Note/Yarn.md' },
                    { text: '🎒 npm', link: '../Note/npm.md' },
                    { text: '♾️ VScode', link: '../Note/VSCode_plug.md' },
                    { text: '⭕ Apifox', link: '../Note/ApiFox.md' },
                    { text: '📚 其他笔记', link: '../Note/SVG.md' },
                ]
            },
            {
                text: '💻 前端',
                items: [
                    { text: '🖥️ 网站制作入门', link: '../FrontEnd/FrontEnd/tutorial.md' },
                    { text: '🟧 HTML', link: '../FrontEnd/HTML/HTML.md' },
                    { text: '🟥 CSS', link: '../FrontEnd/CSS/CSS.md' },
                    { text: '🟨 JavaScript', link: '../FrontEnd/JavaScript/JavaScript.md' },
                    { text: '🟦 TypeScript', link: '../FrontEnd/TypeScript/TypeScript.md' },
                    { text: '🟩 Vue', link: '../FrontEnd/Vue/Vue.md' },
                ]
            },
            {
                text: '🧮 后端',    
                items: [
                    { text: '⬜ Node', link: '../BackEnd/Node/Node.md' },
                    { text: '⬛ Express', link: '../BackEnd/Express/Express.md' },
                    { text: '🐬 MySQL', link: '../BackEnd/MySQL/MySQL.md' },
                ]
            },
            {
                text: '🧊 部署',    
                items: [
                    { text: '🌩️ VitePress', link: '../Deploy/VitePress_favicon.md' },
                ]
            },
            {
                text: '🕸️ 爬虫',
                items: [
                    { text: '🐍 Python', link: '../WebSpider/Python/Python介绍.md' },
                    { text: '🕸️ 爬虫', link: '../WebSpider/Spider/index.md' },
                    { text: '🍃 SQLite', link: '../WebSpider/Sqlite/index.md' },
                ]
            },
            {
                text: '👨‍💻 关于',
                items: [
                    { text: '👨‍💻 关于我', link: '../About/AboutMe' },
                    { text: '🐤 小黄鸭', link: '../About/AboutDuck' },
                    { text: '🍥 【旧】的博客', link: 'https://xxggg.gitee.io/' },
                ]
            }
        ],
        //侧边栏
        sidebar: {
            '/Note': [
                {
                    text: '⌨️ 〖编程〗',
                    collapsible: true,
                    items: [
                        { text: '🐈‍⬛ Git', link: '/Note/Git.md' },
                        { text: '🐈‍⬛ Git 绑定多个远程库', link: '/Note/Git_remote.md' },
                        { text: '🧶 Yarn', link: '/Note/Yarn.md' },
                        { text: '🎒 npm、nrm、nvm、npx', link: '/Note/npm.md' },
                        { text: '🎒 自己写npm包', link: '/Note/npm_create.md' },
                    ]
                },
                {
                    text: '🧰 〖编程工具〗',
                    collapsible: true,
                    items: [
                        { text: '♾️ VSCode 插件推荐', link: '/Note/VSCode_plug.md' },
                        { text: '♾️ VSCode 添加代码片段', link: '/Note/VSCode_snippet.md' },
                        { text: '⭕ ApiFox', link: '/Note/ApiFox.md' },
                        { text: '✌️ Navicat', link: '/Note/Navicat.md' },
                    ]
                },
                {
                    text: '📔 〖小笔记〗',
                    collapsible: true,
                    items: [
                        { text: '⭐ SVG的使用方式', link: '/Note/SVG.md' },
                        { text: '🗝️ SSH - 公钥 私钥', link: '/Note/SSH.md' },
                        { text: '🗺️ Shell查询本地ip', link: '/Note/Shell_ip.md' },
                        { text: '🤳 Github pages 自定义域名', link: '/Note/GithubPagesName.md' },
                        { text: '🌓 判断系统暗黑模式', link: '/Note/Judge_Dark.md' },
                        { text: '😀 Iconfont', link: '/Note/Iconfont.md' },
                    ]
                },
            ],
            '/FrontEnd/FrontEnd': [
                {
                    text: '🍳〖零基础〗',
                    collapsible: true,
                    items: [
                        { text: '💻 如何制作网站?', link: '/FrontEnd/FrontEnd/tutorial.md' }, 
                        { text: '👋 Hello World', link: '/FrontEnd/FrontEnd/HelloWorld.md' }, 
                        { text: '⚔️ 趁手兵器', link: '/FrontEnd/FrontEnd/Weapons.md' }, 
                        { text: '🎗️ 介绍前端三剑客', link: '/FrontEnd/FrontEnd/Introduce' }, 
                        { text: '🚧 前端学习路径', link: '/FrontEnd/FrontEnd/LearningPath' },
                    ]
                },
            ],
            '/FrontEnd/HTML': [
                {
                    text: '🟧 HTML',
                    collapsible: true,
                    items: [
                        { text: '🟧 HTML 基础', link: '/FrontEnd/HTML/HTML' }, 
                        { text: '🟧 HTML 笔记', link: '/FrontEnd/HTML/HTML_Note' }, 
                    ]
                },
                {
                    text: '🟧 HTML5 笔记',
                    collapsible: true,
                    items: [
                        { text: '🟧 HTML5 Web存储', link: '/FrontEnd/HTML/HTML5_webstorage' }, 
                    ]
                },
            ],
            '/FrontEnd/CSS': [
                
                {
                    text: '🟥 CSS',
                    collapsible: true,
                    items: [
                        { text: '🟥 CSS 基础', link: '/FrontEnd/CSS/CSS' }, 
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
                        { text: '🟨 JavaScript 基础', link: '/FrontEnd/JavaScript/JavaScript' }, 
                        { text: '🟨 JS 零碎笔记', link: '/FrontEnd/JavaScript/JS_Note.md' }, 
                        { text: '🟨 JS 代码片段', link: '/FrontEnd/JavaScript/JS_CodeSnippet.md' }, 
                        { text: '🟨 JS 事件', link: '/FrontEnd/JavaScript/JS_events.md' }, 
                        { text: '🟨 JS Map 和 Set', link: '/FrontEnd/JavaScript/JS_MapSet.md' }, 
                        { text: '➕ Math数学方法', link: '/FrontEnd/JavaScript/JS_Math.md' }, 
                        { text: '⏰ Date日期/时间', link: '/FrontEnd/JavaScript/JS_Date.md' }, 
                    ]
                },
                {
                    text: '💛 JS - 方法',
                    collapsible: true,
                    items: [
                        { text: '💛 JS 数组方法', link: '/FrontEnd/JavaScript/JS_Array.md' }, 
                        { text: '💛 JS 遍历数组', link: '/FrontEnd/JavaScript/JS_ArrayEach.md' }, 
                        { text: '💛 JS 数组查找', link: '/FrontEnd/JavaScript/JS_数组查找.md' }, 
                        { text: '💛 JS 数组删除', link: '/FrontEnd/JavaScript/JS_数组删除.md' }, 
                        { text: '💛 JS 数组批量删除', link: '/FrontEnd/JavaScript/JS_数组批量删除.md' }, 
                        { text: '💛 JS 对象方法', link: '/FrontEnd/JavaScript/JS_对象方法.md' }, 
                        { text: '💛 JS 字符串方法', link: '/FrontEnd/JavaScript/JS_字符串方法.md' }, 
                        { text: '💛 JS 类型转换', link: '/FrontEnd/JavaScript/JS_类型转换.md' }, 
                    ]
                },
                {
                    text: '🟡 ES6',
                    collapsible: true,
                    items: [
                        { text: '🟡 ES6', link: '/FrontEnd/JavaScript/JS_ES6.md' }, 
                        { text: '🟡 JS 模块化', link: '/FrontEnd/JavaScript/JS_module.md' }, 
                        { text: '🟡 JS 深复制-浅复制', link: '/FrontEnd/JavaScript/JS_Copy.md' }, 
                    ]
                },
                
            ],
            '/FrontEnd/TypeScript': [
                {
                    text: '🟦 TypeScript',
                    collapsible: true,
                    items: [
                        { text: '🟦 TypeScript', link: '/FrontEnd/TypeScript/TypeScript' }, 
                        // { text: '🟦 接口 - interface', link: '/FrontEnd/TypeScript/TS_interface' }, 
                        // { text: '🟦 数组的类型', link: '/FrontEnd/TypeScript/TS_ArrayType' }, 
                        // { text: '🟦 函数的类型', link: '/FrontEnd/TypeScript/TS_FunsionType' }, 
                        // { text: '🟦 类型断言 - as', link: '/FrontEnd/TypeScript/TS_as' }, 
                        // { text: '🟦 声明文件', link: '/FrontEnd/TypeScript/TS_declare' }, 
                        // { text: '🟦 内置对象', link: '/FrontEnd/TypeScript/TS_declare' }, 
                        // { text: '🟦 类型别名- type', link: '/FrontEnd/TypeScript/TS_type' }, 
                        // { text: '🟦 元组', link: '/FrontEnd/TypeScript/TS_元组' }, 
                        // { text: '🟦 枚举 - enum', link: '/FrontEnd/TypeScript/TS_enum' }, 
                        // { text: '🟦 类 class', link: '/FrontEnd/TypeScript/TS_class' }, 
                        // { text: '🟦 泛型 <?>', link: '/FrontEnd/TypeScript/TS_泛型' }, 
                    ]
                },
            ],
            '/FrontEnd/Vue': [
                {
                    text: '🟩 Vue',
                    collapsible: true,
                    items: [
                        { text: '🟩 Vue', link: '/FrontEnd/Vue/Vue' }, 
                        { text: '🟩 Vue 笔记', link: '/FrontEnd/Vue/VueNote' }, 
                    ]
                },
                {
                    text: '🟩 Vue2',
                    collapsible: true,
                    items: [
                        { text: '🟩 Vue2 事件', link: '/FrontEnd/Vue/Vue2_events' }, 
                        { text: '🟩 Vue2 计算', link: '/FrontEnd/Vue/Vue2_computed' }, 
                        { text: '🟩 Vue2 监听', link: '/FrontEnd/Vue/Vue2_watch' }, 
                        { text: '🟩 计算和监听的区别', link: '/FrontEnd/Vue/Vue2_ComputedAndWatch' }, 
                        { text: '🟩 Vue2 过滤器', link: '/FrontEnd/Vue/Vue2_filters' }, 
                        { text: '🟩 Vue2 keep-alive', link: '/FrontEnd/Vue/Vue2_keep-alive' }, 
                        { text: '🟩 Vue2 生命周期', link: '/FrontEnd/Vue/Vue2_life' }, 
                        { text: '🟩 Vue2 插槽', link: '/FrontEnd/Vue/Vue2_slot' }, 
                        { text: '🟩 Vue2 父子组件通信', link: '/FrontEnd/Vue/Vue2_components' }, 
                        { text: '🟩 Vue2 过渡动画', link: '/FrontEnd/Vue/Vue2_animation' }, 
                    ]
                },
                {
                    text: '🟩 Vue3',
                    collapsible: true,
                    items: [
                        { text: '🟩 Vue3', link: '/FrontEnd/Vue/Vue3' }, 
                        { text: '🟩 Vue3 setup', link: '/FrontEnd/Vue/Vue3_setup' }, 
                        { text: '🟩 Vue3 生命周期', link: '/FrontEnd/Vue/Vue3_生命周期' }, 
                        { text: '🟩 Vue3 父子组件', link: '/FrontEnd/Vue/Vue3_components' }, 
                        { text: '🟩 Vue3 监听', link: '/FrontEnd/Vue/Vue3_watch' }, 
                        { text: '🟩 Vue3 计算', link: '/FrontEnd/Vue/Vue3_computed' }, 
                        { text: '🟩 Vue3 绑定元素', link: '/FrontEnd/Vue/Vue3_ref' }, 
                        { text: '🟩 Vue3 过滤', link: '/FrontEnd/Vue/Vue3_filters' }, 
                    ]
                },
                {
                    text: '🛠️ 脚手架',
                    collapsible: true,
                    items: [
                        { text: '⚡ Vite', link: '/FrontEnd/Vue/Vite' }, 
                        { text: '⚡ Vite 安装Sass', link: '/FrontEnd/Vue/Vite_Sass' }, 
                        { text: '⚡ Vite 安装VueRouter', link: '/FrontEnd/Vue/Vite_VueRouter' }, 
                        { text: '⚡ Vite 安装Vuex', link: '/FrontEnd/Vue/Vite_Vuex' }, 
                        { text: '⛏️ Vite 区分环境', link: '/FrontEnd/Vue/Vite_env' }, 
                        { text: '👣 Vite 跨域 - 开发环境', link: '/FrontEnd/Vue/Vite_cors' },
                        { text: '🛠️ Vue Cli', link: '/FrontEnd/Vue/VueCli' },  
                        { text: '🍼 网页样式初始化', link: '/FrontEnd/Vue/CSS_init' },  
                        { text: '📱 移动端优化与适配', link: '/FrontEnd/Vue/Mobile' },  
                        { text: '🪱 Vue + Sass', link: '/FrontEnd/Vue/Vue_Scss' },  
                        { text: '🧩 VueRouter', link: '/FrontEnd/Vue/VueRouter' },  
                        { text: '🧩 Vuex', link: '/FrontEnd/Vue/Vuex' },  
                        { text: '🍍 Pinia', link: '/FrontEnd/Vue/Pinia' },  
                        { text: '📡 Axios', link: '/FrontEnd/Vue/Axios' },  
                        { text: '📡 Axios + Vue3 封装/跨域', link: '/FrontEnd/Vue/Axios_Vue3' },  
                        { text: '📡 Axios + Vue2 封装/跨域', link: '/FrontEnd/Vue/Axios_Vue2' },  
                    ]
                },
                {
                    text: '🟩 Nuxt3',
                    collapsible: true,
                    items: [
                        { text: '🟩 Nuxt3', link: '/FrontEnd/Vue/Nuxt3' }, 
                    ]
                },
            ],
            '/BackEnd/': [
                {
                    text: '⬜ Node',
                    collapsible: true,
                    items: [
                        { text: '⬜ Node', link: '/BackEnd/Node/Note.md' }, 
                    ]
                },
                {
                    text: '⬛ Express',
                    collapsible: true,
                    items: [
                        { text: '⬛ Express', link: '/BackEnd/Express/Express.md' }, 
                    ]
                },
                {
                    text: '🐬 MySQL',
                    collapsible: true,
                    items: [
                        { text: '🐬 MySQL', link: '/BackEnd/MySQL/MySQL.md' }, 
                    ]
                },
            ],
            '/Deploy/': [
                {
                    text: '🐤 博客',
                    collapsible: true,
                    items: [
                        { text: '🌩️ VitePress 标签页图标设置', link: '/Deploy/VitePress_favicon.md' }, 
                    ]
                },
            ],
            '/WebSpider/Python': [
                {
                    text: '🐍 Python 学习',
                    collapsible: true,
                    items: [
                        { text: '🐍 Python 介绍', link: '/WebSpider/Python/Python_intro.md' }, 
                        { text: '🐍 Python 安装', link: '/WebSpider/Python/Python_install.md' }, 
                    ]
                },
                {
                    text: '🐍 Python 笔记',
                    collapsible: true,
                    items: [
                        { text: '🐍 Python 零碎笔记', link: '/WebSpider/Python/PythonNote.md' }, 
                        { text: '🐍 数据类型', link: '/WebSpider/Python/PythonNote_Type.md' }, 
                        { text: '🐍 变量', link: '/WebSpider/Python/PythonNote_var.md' }, 
                        { text: '🐍 字符串方法', link: '/WebSpider/Python/PythonNote_Str.md' }, 
                        { text: '🐍 数组 - list', link: '/WebSpider/Python/PythonNote_List.md' }, 
                        { text: '🐍 元组 - tuple ', link: '/WebSpider/Python/PythonNote_tuple.md' }, 
                        { text: '🐍 条件判断', link: '/WebSpider/Python/PythonNote_IfElse.md' }, 
                        { text: '🐍 循环 / 迭代', link: '/WebSpider/Python/PythonNote_for.md' }, 
                        { text: '🐍 dict和set', link: '/WebSpider/Python/PythonNote_DictSet.md' }, 
                        { text: '🐍 函数', link: '/WebSpider/Python/PythonNote_def.md' }, 
                        { text: '🐍 数据类型转换', link: '/WebSpider/Python/PythonNote_transition.md' }, 
                        { text: '🐍 列表生成式 / 生成器', link: '/WebSpider/Python/PythonNote_range.md' }, 
                        { text: '🐍 异常处理 try', link: '/WebSpider/Python/PythonNote_try.md' }, 
                        { text: '🐍 Python - JSON', link: '/WebSpider/Python/PythonNote_JSON.md' }, 
                        { text: '🐍 with ... as ...', link: '/WebSpider/Python/PythonNote_WithAs' }, 
                        { text: '🐽 未完待续...', link: '/WebSpider/Python/continued' }, 
                    ]
                },
                {
                    text: '🐍 Python - File',
                    collapsible: true,
                    items: [
                        { text: '🐍 文件操作', link: '/WebSpider/Python/PythonFile' }, 
                    ]
                },
            ],
            '/WebSpider/Spider': [
                {
                    text: '🕸️ 爬虫',
                    collapsible: true,
                    items: [
                        { text: '🕸️ 爬虫', link: '/WebSpider/Spider/index.md' }, 
                    ]
                },
                {
                    text: '🍃 SQLite',
                    collapsible: true,
                    items: [
                        { text: '🍃 SQLite 安装', link: '/WebSpider/Sqlite/index.md' }, 
                    ]
                }
            ],
            '/WebSpider/Sqlite': [
                {
                    text: '🕸️ 爬虫',
                    collapsible: true,
                    items: [
                        { text: '🕸️ 爬虫', link: '/WebSpider/Spider/index.md' }, 
                    ]
                },
                {
                    text: '🍃 SQLite',
                    collapsible: true,
                    items: [
                        { text: '🍃 SQLite 安装', link: '/WebSpider/Sqlite/index.md' }, 
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