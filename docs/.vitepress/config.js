export default {
    title: '小黄鸭', //标题
    titleTemplate: '谢夏戈的博客', //标题模板
    description: 'XXG-BLOG', //描述
    lastUpdated: true, //开启上次更新时间
    markdown: {
        theme: 'nord',
    },
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
                    { text: '🐈‍⬛ Git', link: '../Note/Git' },
                    { text: '🧶 Yarn', link: '../Note/Yarn' },
                    { text: '🎒 npm', link: '../Note/npm' },
                    { text: '♾️ VScode', link: '../Note/VSCode_plug' },
                    { text: '⭕ Apifox', link: '../Note/ApiFox' },
                    { text: '📚 其他笔记', link: '../Note/SVG' },
                ]
            },
            {
                text: '💻 前端',
                items: [
                    { text: '🖥️ 网站制作入门', link: '../FrontEnd/FrontEnd/tutorial' },
                    { text: '🟧 HTML', link: '../FrontEnd/HTML/HTML' },
                    { text: '🟥 CSS', link: '../FrontEnd/CSS/CSS' },
                    { text: '🟨 JavaScript', link: '../FrontEnd/JavaScript/JavaScript' },
                    { text: '🟦 TypeScript', link: '../FrontEnd/TypeScript/TypeScript' },
                    { text: '🟩 Vue', link: '../FrontEnd/Vue/Vue' },
                ]
            },
            {
                text: '🧮 后端',    
                items: [
                    { text: '⬜ Node', link: '../BackEnd/Node/Node' },
                    { text: '⬛ Express', link: '../BackEnd/Express/Express' },
                ]
            },
            {
                text: '📦 数据库',    
                items: [
                    { text: '📦 SQL', link: '../Database/SQL/SQL' },
                    { text: '🐬 MySQL', link: '../Database/MySQL/MySQL' },
                    { text: '🍃 SQLite', link: '../Database/SQLite/SQLite' },
                ]
            },
            {
                text: '🧊 部署',    
                items: [
                    { text: '🌩️ VitePress', link: '../Deploy/VitePress_favicon' },
                ]
            },
            {
                text: '🕸️ 爬虫',
                items: [
                    { text: '🐍 Python', link: '../WebSpider/Python/Python_intro' },
                    { text: '🕸️ 爬虫', link: '../WebSpider/Spider/index' },
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
                        { text: '🐈‍⬛ Git', link: '/Note/Git' },
                        { text: '🐈‍⬛ Git 绑定多个远程库', link: '/Note/Git_remote' },
                        { text: '🧶 Yarn', link: '/Note/Yarn' },
                        { text: '🎒 npm、nrm、nvm、npx', link: '/Note/npm' },
                        { text: '🎒 自己写npm包', link: '/Note/npm_create' },
                    ]
                },
                {
                    text: '🧰 〖编程工具〗',
                    collapsible: true,
                    items: [
                        { text: '♾️ VSCode 插件推荐', link: '/Note/VSCode_plug' },
                        { text: '♾️ VSCode 添加代码片段', link: '/Note/VSCode_snippet' },
                        { text: '⭕ ApiFox', link: '/Note/ApiFox' },
                        { text: '✌️ Navicat', link: '/Note/Navicat' },
                    ]
                },
                {
                    text: '📔 〖小笔记〗',
                    collapsible: true,
                    items: [
                        { text: '⭐ SVG的使用方式', link: '/Note/SVG' },
                        { text: '🗝️ SSH - 公钥 私钥', link: '/Note/SSH' },
                        { text: '🏴 Shell查询本地ip', link: '/Note/Shell_ip' },
                        { text: '🤳 Github pages 自定义域名', link: '/Note/GithubPagesName' },
                        { text: '🌓 判断系统暗黑模式', link: '/Note/Judge_Dark' },
                        { text: '😀 Iconfont', link: '/Note/Iconfont' },
                    ]
                },
            ],
            '/FrontEnd/FrontEnd': [
                {
                    text: '🍳〖零基础〗',
                    collapsible: true,
                    items: [
                        { text: '🖥️ 如何制作网站?', link: '/FrontEnd/FrontEnd/tutorial' }, 
                        { text: '👋 Hello World', link: '/FrontEnd/FrontEnd/HelloWorld' }, 
                        { text: '⚔️ 趁手兵器', link: '/FrontEnd/FrontEnd/Weapons' }, 
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
                        { text: '🟧 HTML 学习路径', link: '/FrontEnd/HTML/HTML' }, 
                        { text: '🟧 HTML 零碎笔记', link: '/FrontEnd/HTML/HTML_Note' }, 
                    ]
                },
                {
                    text: '🟧 HTML5',
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
                        { text: '🟥 CSS 学习路径', link: '/FrontEnd/CSS/CSS' }, 
                        { text: '🟥 CSS 零碎笔记', link: '/FrontEnd/CSS/CSS_Note' }, 
                        { text: '🟥 CSS 代码片段', link: '/FrontEnd/CSS/CSS_CodeSnippet' }, 
                        { text: '🟥 CSS 选择器', link: '/FrontEnd/CSS/CSS_Selector' }, 
                        { text: '🟥 雪碧图 - Sprite', link: '/FrontEnd/CSS/CSS_Sprite' }, 
                    ]
                },
                {
                    text: '🟥 CSS3',
                    collapsible: true,
                    items: [
                        { text: '🟥 CSS3 零碎笔记', link: '/FrontEnd/CSS/CSS3_Note' }, 
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
                        { text: '🟨 JavaScript 学习路径', link: '/FrontEnd/JavaScript/JavaScript' }, 
                        { text: '🟨 JS 零碎笔记', link: '/FrontEnd/JavaScript/JS_Note' }, 
                        { text: '🟨 JS 代码片段', link: '/FrontEnd/JavaScript/JS_CodeSnippet' }, 
                        { text: '🟨 JS 事件', link: '/FrontEnd/JavaScript/JS_events' }, 
                        { text: '🟨 JS Map 和 Set', link: '/FrontEnd/JavaScript/JS_MapSet' }, 
                        { text: '➕ Math数学方法', link: '/FrontEnd/JavaScript/JS_Math' }, 
                        { text: '⏰ Date日期/时间', link: '/FrontEnd/JavaScript/JS_Date' }, 
                    ]
                },
                {
                    text: '💛 JS - 方法',
                    collapsible: true,
                    items: [
                        { text: '💛 JS 数组方法', link: '/FrontEnd/JavaScript/JS_Array' }, 
                        { text: '💛 JS 遍历数组', link: '/FrontEnd/JavaScript/JS_ArrayEach' }, 
                        { text: '💛 JS 数组查找', link: '/FrontEnd/JavaScript/JS_ArrayFind' }, 
                        { text: '💛 JS 数组删除', link: '/FrontEnd/JavaScript/JS_ArrayDelete' }, 
                        { text: '💛 JS 数组批量删除', link: '/FrontEnd/JavaScript/JS_ArrayBatchesDelete' }, 
                        { text: '💛 JS 对象方法', link: '/FrontEnd/JavaScript/JS_Object' }, 
                        { text: '💛 JS 字符串方法', link: '/FrontEnd/JavaScript/JS_String' }, 
                        { text: '💛 JS 类型转换', link: '/FrontEnd/JavaScript/JS_ChangeType' }, 
                    ]
                },
                {
                    text: '🟡 ES6',
                    collapsible: true,
                    items: [
                        { text: '🟡 ES6', link: '/FrontEnd/JavaScript/JS_ES6' }, 
                        { text: '🟡 JS 模块化', link: '/FrontEnd/JavaScript/JS_module' }, 
                        { text: '🟡 JS 深复制-浅复制', link: '/FrontEnd/JavaScript/JS_Copy' }, 
                    ]
                },
                
            ],
            '/FrontEnd/TypeScript': [
                {
                    text: '🟦 TypeScript',
                    collapsible: true,
                    items: [
                        { text: '🟦 TypeScript', link: '/FrontEnd/TypeScript/TypeScript' }, 
                        { text: '🟦 接口 interface', link: '/FrontEnd/TypeScript/TS_interface' }, 
                        { text: '🟦 数组的类型', link: '/FrontEnd/TypeScript/TS_Array' }, 
                        { text: '🟦 函数的类型', link: '/FrontEnd/TypeScript/TS_Funsion' }, 
                        { text: '🟦 类型断言 as', link: '/FrontEnd/TypeScript/TS_assertion' }, 
                        { text: '🟦 声明文件', link: '/FrontEnd/TypeScript/TS_declare' }, 
                        { text: '🟦 内置对象', link: '/FrontEnd/TypeScript/TS_objects' }, 
                        { text: '🟦 类型别名 type', link: '/FrontEnd/TypeScript/TS_type' }, 
                        { text: '🟦 元组 tuple', link: '/FrontEnd/TypeScript/TS_tuple' }, 
                        // { text: '🟦 枚举 enum', link: '/FrontEnd/TypeScript/TS_enum' }, 
                        // { text: '🟦 类 class', link: '/FrontEnd/TypeScript/TS_class' }, 
                        { text: '🟦 泛型 <?>', link: '/FrontEnd/TypeScript/TS_generic' }, 
                        { text: '🟦 TypeScript 笔记', link: '/FrontEnd/TypeScript/TS_Note' }, 
                    ]
                },
            ],
            '/FrontEnd/Vue': [
                {
                    text: '🟩 Vue',
                    collapsible: true,
                    items: [
                        { text: '🟩 Vue', link: '/FrontEnd/Vue/Vue' }, 
                        { text: '🟩 Vue 笔记', link: '/FrontEnd/Vue/Vue_Note' }, 
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
                        { text: '⬜ Node', link: '/BackEnd/Node/Node' }, 
                        { text: '🔥 Nodemon - 热加载', link: '/BackEnd/Node/Nodemon' }, 
                        { text: '⬜ Node - os模块', link: '/BackEnd/Node/Node_os' }, 
                        { text: '⬜ Node - fs模块', link: '/BackEnd/Node/Node_fs' }, 
                        { text: '⬜ Node - http模块', link: '/BackEnd/Node/Node_http' }, 
                    ]
                },
                {
                    text: '⬛ Express',
                    collapsible: true,
                    items: [
                        { text: '⬛ Express', link: '/BackEnd/Express/Express' }, 
                        { text: '⬛ Route路由', link: '/BackEnd/Express/Express_Route' }, 
                        { text: '⬛ static静态资源', link: '/BackEnd/Express/Express_static' }, 
                        { text: '⬛ CORS跨域', link: '/BackEnd/Express/Express_CORS' }, 
                        { text: '⬛ 请求头介绍', link: '/BackEnd/Express/Express_Header' }, 
                        { text: '⬛ Express + 🐬 MySQL', link: '/BackEnd/Express/Express_MySQL' }, 
                        { text: '🃏 JWT认证机制', link: '/BackEnd/Express/Express_JWT' }, 
                        { text: '🔒 bcryptjs 密码加密', link: '/BackEnd/Express/Express_bcryptjs' }, 
                        { text: '🗂️ multer 上传文件', link: '/BackEnd/Express/Express_multer_file' }, 
                        { text: '🤵 multer 上传头像', link: '/BackEnd/Express/Express_multer_avater' }, 
                        { text: '⬛ + ⬜ + 🐬', link: '/BackEnd/Express/Express_Node_MySQL' }, 
                    ]
                },
            ],
            '/Database/': [
                {
                    text: '📦 SQL',
                    collapsible: true,
                    items: [
                        { text: '📦 SQL', link: '/Database/SQL/SQL' }, 
                        { text: '📦 SQL 基础类型', link: '/Database/SQL/SQL_type' }, 
                        { text: '📦 SQL 基础命令', link: '/Database/SQL/SQL_order' }, 
                        { text: '📦 SQL 增 INSERT INTO', link: '/Database/SQL/SQL_insert_into' }, 
                        { text: '📦 SQL 删 DELETE', link: '/Database/SQL/SQL_delete' }, 
                        { text: '📦 SQL 改 UPDATE', link: '/Database/SQL/SQL_update' }, 
                        { text: '📦 SQL 查 SELECT', link: '/Database/SQL/SQL_select' }, 
                    ]
                },
                {
                    text: '🐬 MySQL',
                    collapsible: true,
                    items: [
                        { text: '🐬 MySQL', link: '/Database/MySQL/MySQL' }, 
                    ]
                },
                {
                    text: '🍃 SQLite',
                    collapsible: true,
                    items: [
                        { text: '🍃 SQLite 安装', link: '/Database/SQLite/SQLite' }, 
                    ]
                }
            ],
            '/Deploy/': [
                {
                    text: '🐤 博客',
                    collapsible: true,
                    items: [
                        { text: '🌩️ VitePress 标签页图标设置', link: '/Deploy/VitePress_favicon' }, 
                    ]
                },
            ],
            '/WebSpider/Python': [
                {
                    text: '🐍 Python 学习',
                    collapsible: true,
                    items: [
                        { text: '🐍 Python 介绍', link: '/WebSpider/Python/Python_intro' }, 
                        { text: '🐍 Python 安装', link: '/WebSpider/Python/Python_install' }, 
                    ]
                },
                {
                    text: '🐍 Python 笔记',
                    collapsible: true,
                    items: [
                        { text: '🐍 Python 零碎笔记', link: '/WebSpider/Python/PythonNote' }, 
                        { text: '🐍 数据类型', link: '/WebSpider/Python/PythonNote_Type' }, 
                        { text: '🐍 变量', link: '/WebSpider/Python/PythonNote_var' }, 
                        { text: '🐍 字符串方法', link: '/WebSpider/Python/PythonNote_Str' }, 
                        { text: '🐍 数组 - list', link: '/WebSpider/Python/PythonNote_List' }, 
                        { text: '🐍 元组 - tuple ', link: '/WebSpider/Python/PythonNote_tuple' }, 
                        { text: '🐍 条件判断', link: '/WebSpider/Python/PythonNote_IfElse' }, 
                        { text: '🐍 循环 / 迭代', link: '/WebSpider/Python/PythonNote_for' }, 
                        { text: '🐍 dict和set', link: '/WebSpider/Python/PythonNote_DictSet' }, 
                        { text: '🐍 函数', link: '/WebSpider/Python/PythonNote_def' }, 
                        { text: '🐍 数据类型转换', link: '/WebSpider/Python/PythonNote_transition' }, 
                        { text: '🐍 列表生成式 / 生成器', link: '/WebSpider/Python/PythonNote_range' }, 
                        { text: '🐍 异常处理 try', link: '/WebSpider/Python/PythonNote_try' }, 
                        { text: '🐍 Python - JSON', link: '/WebSpider/Python/PythonNote_JSON' }, 
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
                        { text: '🕸️ 爬虫', link: '/WebSpider/Spider/index' }, 
                    ]
                },
                
            ],
            '/About/': [
                {   
                    text: '⭐ 关于',
                    collapsible: true,
                    items: [
                        { text: '🧑‍💻‍ 关于我', link: '/About/AboutMe' }, // /config/index
                        { text: '🐤 小黄鸭', link: '/About/AboutDuck' }, // /config/three
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