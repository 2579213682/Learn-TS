//参数个数：参数少的可以赋值给参数多的

//原始类型
// type F1=(a:number)=>void
// type F2=(a:number)=>void

// let f1: F1=()=>{
//   return 'a'
// }
// let f2: F2
// //正确演示：
// f2=f1
// // 错误演示：
// f1=f2

//对象类型
interface Point2D{
  x:number
  y:number
}
interface Point3D{
  x:number
  y:number
  z:number
}

type F2=(p:Point2D)=>void //相当于两个参数
type F3=(p:Point3D)=>void//相当于三个参数

let f2!:F2
let f3:F3

f3=f2