//使用泛型来创建一个函数

function id<Type>(value:Type):Type{
  return value
}

//调用泛型函数

//1.以number类型调用泛型函数
const num=id<number>(10)
//2.以string类型调用泛型函数
const str=id<string>('a')
//3.以Boolean类型调用泛型函数
const ret=id<boolean>(false)

//--
let num1=id<number>(10) //手动添加泛型
// let num1=id(100)//字面量类型

let str1=id('gmy')//字面量类型