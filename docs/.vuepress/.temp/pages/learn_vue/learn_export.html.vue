<template><div><h1 id="export-和export-default-的区别" tabindex="-1"><a class="header-anchor" href="#export-和export-default-的区别"><span><code v-pre>export</code> 和<code v-pre>export default</code> 的区别</span></a></h1>
<p>export + 类/函数/对象
import {类名/函数名/对象名} from '模块地址'</p>
<p>export default + 类/函数/对象
import 任意类名/函数名/对象名 from '模块地址'</p>
<ul>
<li>首先明确一个模块有且只有默认导出</li>
<li>使用默认导出时，在导入时，不需要{}包裹，且可以任意命名导入项（函数/类/对象）</li>
</ul>
</div></template>


