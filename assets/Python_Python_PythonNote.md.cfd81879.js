import{_ as s,c as a,o as n,a as l}from"./app.8a33cd63.js";const C=JSON.parse('{"title":"\u{1F40D} Python \u96F6\u788E\u7B14\u8BB0","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5"},{"level":2,"title":"input() \u8F93\u5165","slug":"input-\u8F93\u5165"},{"level":2,"title":"int() \u6570\u5B57\u5316","slug":"int-\u6570\u5B57\u5316"},{"level":2,"title":"range() \u751F\u6210\u6574\u6570\u5E8F\u5217","slug":"range-\u751F\u6210\u6574\u6570\u5E8F\u5217"},{"level":2,"title":"random \u968F\u673A\u6570","slug":"random-\u968F\u673A\u6570"}],"relativePath":"Python/Python/PythonNote.md","lastUpdated":1656589721000}'),p={name:"Python/Python/PythonNote.md"},o=l(`<h1 id="\u{1F40D}-python-\u96F6\u788E\u7B14\u8BB0" tabindex="-1">\u{1F40D} Python \u96F6\u788E\u7B14\u8BB0 <a class="header-anchor" href="#\u{1F40D}-python-\u96F6\u788E\u7B14\u8BB0" aria-hidden="true">#</a></h1><h2 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h2><p>Python\u7684\u8BED\u6CD5\u6BD4\u8F83\u7B80\u5355\uFF0C\u91C7\u7528\u7F29\u8FDB\u65B9\u5F0F</p><div class="language-py"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">a</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(-</span><span style="color:#82AAFF;">a</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="input-\u8F93\u5165" tabindex="-1">input() \u8F93\u5165 <a class="header-anchor" href="#input-\u8F93\u5165" aria-hidden="true">#</a></h2><p>\u80FD\u628A\u8F93\u5165\u7684\u503C \u5E26\u5165birth\u8FD9\u4E2A\u53D8\u91CF,\u8FD4\u56DE\u7684\u662F&quot;\u5B57\u7B26\u4E32&quot;\u7C7B\u578B</p><div class="language-py"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">birth </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">input</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">birth:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="int-\u6570\u5B57\u5316" tabindex="-1">int() \u6570\u5B57\u5316 <a class="header-anchor" href="#int-\u6570\u5B57\u5316" aria-hidden="true">#</a></h2><p>\u5982\u679C\u662F&quot;abc&quot;\u8FD9\u6837\u7684\u5B57\u7B26\u4E32\uFF0C\u662F\u6CA1\u529E\u6CD5\u8F6C\u6362\u6210\u6570\u5B57\u7684 \u4F1A\u62A5\u9519</p><div class="language-py"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">num </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">123</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># \u8FD9\u91CC\u7684123\u662F\u5B57\u7B26\u4E32</span></span>
<span class="line"><span style="color:#A6ACCD;">NewNum </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">int</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">num</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#\u7528int\u628A\u4ED6\u53D8\u6210\u6570\u5B57\u7C7B\u578B</span></span>
<span class="line"></span></code></pre></div><h2 id="range-\u751F\u6210\u6574\u6570\u5E8F\u5217" tabindex="-1">range() \u751F\u6210\u6574\u6570\u5E8F\u5217 <a class="header-anchor" href="#range-\u751F\u6210\u6574\u6570\u5E8F\u5217" aria-hidden="true">#</a></h2><div class="language-py"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&gt;&gt;&gt;</span><span style="color:#FFCB6B;">list</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">range</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">))</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><h2 id="random-\u968F\u673A\u6570" tabindex="-1">random \u968F\u673A\u6570 <a class="header-anchor" href="#random-\u968F\u673A\u6570" aria-hidden="true">#</a></h2><div class="language-py"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> random </span></span>
<span class="line"><span style="color:#A6ACCD;">x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> random</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">randint</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#\u968F\u673A\u751F\u62100\u52302\u4E4B\u95F4\u7684 \u4E00\u4E2A\u6574\u6570</span></span>
<span class="line"></span></code></pre></div>`,14),e=[o];function t(c,r,y,F,i,D){return n(),a("div",null,e)}var h=s(p,[["render",t]]);export{C as __pageData,h as default};
