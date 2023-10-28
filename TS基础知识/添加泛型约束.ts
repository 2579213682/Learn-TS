//泛型约束
//1.指定更加具体的类型
// function id<Type>(value:Type[]):Type[]{
//   value.length
//   return value
// }

//2. 添加约束
interface Ilength{
  length:number
}
function id<Type extends Ilength>(value:Type):Type{
  value.length
  return value
}

id('abc')
id(['a','b'])
id({length:10})
//错误演示
// id(123)