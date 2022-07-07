import{_ as e,c as a,o as r,a as t}from"./app.eae52b3d.js";var d="/assets/5e25f96b728db6a15917f8613ed08eccd269a7bca54ab028bc98d40e69c1d8e9.5e25f96b.png";const _=JSON.parse('{"title":"\u{1F7E9} Vue2 \u751F\u547D\u5468\u671F","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u{1F7E9} \u521B\u5EFA\u524D\uFF08beforeCreate\uFF09","slug":"\u{1F7E9}-\u521B\u5EFA\u524D\uFF08beforecreate\uFF09"},{"level":3,"title":"\u{1F7E9} \u521B\u5EFA\u540E\uFF08created\uFF09","slug":"\u{1F7E9}-\u521B\u5EFA\u540E\uFF08created\uFF09"},{"level":3,"title":"\u{1F7E9} \u8F7D\u5165\u524D\uFF08beforeMount\uFF09","slug":"\u{1F7E9}-\u8F7D\u5165\u524D\uFF08beforemount\uFF09"},{"level":3,"title":"\u{1F7E9} \u8F7D\u5165\u540E\uFF08mounted\uFF09","slug":"\u{1F7E9}-\u8F7D\u5165\u540E\uFF08mounted\uFF09"},{"level":3,"title":"\u{1F7E9} \u66F4\u65B0\u524D\uFF08beforeUpdate\uFF09","slug":"\u{1F7E9}-\u66F4\u65B0\u524D\uFF08beforeupdate\uFF09"},{"level":3,"title":"\u{1F7E9} \u66F4\u65B0\u540E\uFF08updated\uFF09","slug":"\u{1F7E9}-\u66F4\u65B0\u540E\uFF08updated\uFF09"},{"level":3,"title":"\u{1F7E9} \u9500\u6BC1\u524D\uFF08beforeDestroy\uFF09","slug":"\u{1F7E9}-\u9500\u6BC1\u524D\uFF08beforedestroy\uFF09"},{"level":3,"title":"\u{1F7E9} \u9500\u6BC1\u540E\uFF08destroyed\uFF09","slug":"\u{1F7E9}-\u9500\u6BC1\u540E\uFF08destroyed\uFF09"}],"relativePath":"FrontEnd/Vue/Vue2_life.md","lastUpdated":1657207500000}'),o={name:"FrontEnd/Vue/Vue2_life.md"},s=t('<h1 id="\u{1F7E9}-vue2-\u751F\u547D\u5468\u671F" tabindex="-1">\u{1F7E9} Vue2 \u751F\u547D\u5468\u671F <a class="header-anchor" href="#\u{1F7E9}-vue2-\u751F\u547D\u5468\u671F" aria-hidden="true">#</a></h1><p><img src="'+d+'" alt="\u56FE 14"></p><h3 id="\u{1F7E9}-\u521B\u5EFA\u524D\uFF08beforecreate\uFF09" tabindex="-1">\u{1F7E9} \u521B\u5EFA\u524D\uFF08beforeCreate\uFF09 <a class="header-anchor" href="#\u{1F7E9}-\u521B\u5EFA\u524D\uFF08beforecreate\uFF09" aria-hidden="true">#</a></h3><p>\u5728\u5B9E\u4F8B\u521D\u59CB\u5316\u4E4B\u540E\uFF0C\u6B64\u65F6\u7684\u6570\u636E\u89C2\u5BDF\u548C\u4E8B\u4EF6\u673A\u5236\u90FD\u672A\u5F62\u6210\uFF0C\u4E0D\u80FD\u83B7\u5F97 DOM \u8282\u70B9\u3002</p><h3 id="\u{1F7E9}-\u521B\u5EFA\u540E\uFF08created\uFF09" tabindex="-1">\u{1F7E9} \u521B\u5EFA\u540E\uFF08created\uFF09 <a class="header-anchor" href="#\u{1F7E9}-\u521B\u5EFA\u540E\uFF08created\uFF09" aria-hidden="true">#</a></h3><p>\u5B9E\u4F8B\u5DF2\u7ECF\u521B\u5EFA\u5B8C\u6210\u4E4B\u540E\u88AB\u8C03\u7528\u3002\u5728\u8FD9\u4E00\u6B65\uFF0C\u5B9E\u4F8B\u5DF2\u5B8C\u6210\u4EE5\u4E0B\u7684\u914D\u7F6E\uFF1A\u6570\u636E\u89C2\u6D4B\uFF08data observer\uFF09\uFF0C\u5C5E\u6027\u548C\u65B9\u6CD5\u7684\u8FD0\u7B97\uFF0C watch/event \u4E8B\u4EF6\u56DE\u8C03\u3002\u7136\u800C\uFF0C\u6302\u8F7D\u9636\u6BB5\u8FD8\u6CA1\u5F00\u59CB\u3002</p><h3 id="\u{1F7E9}-\u8F7D\u5165\u524D\uFF08beforemount\uFF09" tabindex="-1">\u{1F7E9} \u8F7D\u5165\u524D\uFF08beforeMount\uFF09 <a class="header-anchor" href="#\u{1F7E9}-\u8F7D\u5165\u524D\uFF08beforemount\uFF09" aria-hidden="true">#</a></h3><p>\u5728\u6302\u8F7D\u5F00\u59CB\u4E4B\u524D\u88AB\u8C03\u7528\uFF1A\u8FD9\u4E2A\u8FC7\u7A0B\u662F\u5728\u6A21\u7248\u5DF2\u7ECF\u5728\u5185\u5B58\u4E2D\u7F16\u8BD1\u5B8C\u6210\uFF0C render \u51FD\u6570\u9996\u6B21\u88AB\u8C03\u7528\uFF0C\u6B64\u65F6\u5B8C\u6210\u4E86\u865A\u62DF DOM \u7684\u6784\u5EFA\uFF0C\u4F46\u5E76\u672A\u88AB\u6E32\u67D3\u3002</p><h3 id="\u{1F7E9}-\u8F7D\u5165\u540E\uFF08mounted\uFF09" tabindex="-1">\u{1F7E9} \u8F7D\u5165\u540E\uFF08mounted\uFF09 <a class="header-anchor" href="#\u{1F7E9}-\u8F7D\u5165\u540E\uFF08mounted\uFF09" aria-hidden="true">#</a></h3><p>\u8FD9\u4E2A\u8FC7\u7A0B\u5728\u6A21\u7248\u6302\u8F7D\u4E4B\u540E\u88AB\u8C03\u7528\uFF0C\u9875\u9762\u5B8C\u6210\u6E32\u67D3\uFF0C\u6240\u4EE5\u5728\u8FD9\u4E4B\u540E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u64CD\u4F5C\u548C\u8BBF\u95EE DOM \u5143\u7D20\u3002</p><h3 id="\u{1F7E9}-\u66F4\u65B0\u524D\uFF08beforeupdate\uFF09" tabindex="-1">\u{1F7E9} \u66F4\u65B0\u524D\uFF08beforeUpdate\uFF09 <a class="header-anchor" href="#\u{1F7E9}-\u66F4\u65B0\u524D\uFF08beforeupdate\uFF09" aria-hidden="true">#</a></h3><p>\u5F53\u6570\u636E\u66F4\u65B0\u65F6\u8C03\u7528\uFF0C\u5728\u8FD9\u4E00\u9636\u6BB5 DOM \u4F1A\u548C\u66F4\u6539\u8FC7\u7684\u5185\u5BB9\u540C\u6B65\u3002</p><h3 id="\u{1F7E9}-\u66F4\u65B0\u540E\uFF08updated\uFF09" tabindex="-1">\u{1F7E9} \u66F4\u65B0\u540E\uFF08updated\uFF09 <a class="header-anchor" href="#\u{1F7E9}-\u66F4\u65B0\u540E\uFF08updated\uFF09" aria-hidden="true">#</a></h3><p>\u7531\u4E8E\u6570\u636E\u66F4\u6539\u5BFC\u81F4\u7684\u865A\u62DF DOM \u91CD\u65B0\u6E32\u67D3\u548C\u6253\u8865\u4E01\uFF0C\u5728\u8FD9\u4E4B\u540E\u4F1A\u8C03\u7528\u8BE5\u94A9\u5B50\u3002 \u5F53\u8FD9\u4E2A\u94A9\u5B50\u88AB\u8C03\u7528\u65F6\uFF0C\u7EC4\u4EF6 DOM \u5DF2\u7ECF\u66F4\u65B0\uFF0C\u6240\u4EE5\u4F60\u73B0\u5728\u53EF\u4EE5\u6267\u884C\u4F9D\u8D56\u4E8E DOM \u7684\u64CD\u4F5C\u3002\u7136\u800C\u5728\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u4F60\u5E94\u8BE5\u907F\u514D\u5728\u6B64\u671F\u95F4\u66F4\u6539\u72B6\u6001\uFF0C\u56E0\u4E3A\u8FD9\u53EF\u80FD\u4F1A\u5BFC\u81F4\u66F4\u65B0\u65E0\u9650\u5FAA\u73AF\u3002</p><h3 id="\u{1F7E9}-\u9500\u6BC1\u524D\uFF08beforedestroy\uFF09" tabindex="-1">\u{1F7E9} \u9500\u6BC1\u524D\uFF08beforeDestroy\uFF09 <a class="header-anchor" href="#\u{1F7E9}-\u9500\u6BC1\u524D\uFF08beforedestroy\uFF09" aria-hidden="true">#</a></h3><p>\u5B9E\u4F8B\u9500\u6BC1\u4E4B\u524D\u8C03\u7528\u3002\u5728\u8FD9\u4E00\u6B65\uFF0C\u5B9E\u4F8B\u4ECD\u7136\u5B8C\u5168\u53EF\u7528\u3002</p><h3 id="\u{1F7E9}-\u9500\u6BC1\u540E\uFF08destroyed\uFF09" tabindex="-1">\u{1F7E9} \u9500\u6BC1\u540E\uFF08destroyed\uFF09 <a class="header-anchor" href="#\u{1F7E9}-\u9500\u6BC1\u540E\uFF08destroyed\uFF09" aria-hidden="true">#</a></h3><p>Vue \u5B9E\u4F8B\u9500\u6BC1\u540E\u8C03\u7528\u3002\u8C03\u7528\u540E\uFF0CVue \u5B9E\u4F8B\u6307\u793A\u7684\u6240\u6709\u4E1C\u897F\u90FD\u4F1A\u89E3\u7ED1\u5B9A\uFF0C\u6240\u6709\u7684\u4E8B\u4EF6\u76D1\u542C\u5668\u4F1A\u88AB\u79FB\u9664\uFF0C\u6240\u6709\u7684\u5B50\u5B9E\u4F8B\u4E5F\u4F1A\u88AB\u9500\u6BC1\u3002</p>',18),i=[s];function n(h,l,c,u,f,p){return r(),a("div",null,i)}var m=e(o,[["render",n]]);export{_ as __pageData,m as default};