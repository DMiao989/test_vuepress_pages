<template><div><h1 id="搭建博客出现的问题" tabindex="-1"><a class="header-anchor" href="#搭建博客出现的问题"><span>搭建博客出现的问题</span></a></h1>
<h2 id="问题1" tabindex="-1"><a class="header-anchor" href="#问题1"><span>问题1</span></a></h2>
<pre><code>为什么将本地代码修改之后，push远端，并成功了。
但是访问网页显示新增内容不存在？
</code></pre>
<h3 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法"><span>解决方法：</span></a></h3>
<pre><code>sh deploy.sh
每次都要运行一下脚本文件deploy.sh。
但是注意的是，脚本中有git push -f命令，这可能会导致一些问题。
</code></pre>
<h2 id="问题2" tabindex="-1"><a class="header-anchor" href="#问题2"><span>问题2：</span></a></h2>
<pre><code>这个将vuepress部署到免费的GitHub页面上，使用运行脚本的方法，我看网上还有其他的方法可以将vuepress部署到pages上。可以尝试一下。
</code></pre>
</div></template>


