# `export` 和`export default` 的区别

export + 类/函数/对象
import {类名/函数名/对象名} from '模块地址'

export default + 类/函数/对象 
import 任意类名/函数名/对象名 from '模块地址'

- 首先明确一个模块有且只有默认导出
- 使用默认导出时，在导入时，不需要{}包裹，且可以任意命名导入项（函数/类/对象）
