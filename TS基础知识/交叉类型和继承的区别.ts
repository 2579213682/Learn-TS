// //对比
// interface A{
//   fn:(value:number)=> string
// }
// interface B extends A{
//   fn:(value:string)=>string
// }

interface A{
    fn:(value:number)=> string
  }
interface B{
  fn:(value:string)=>string
}

type C=A&B
// 相当于：
// let c:C={
//   fn(value:number | string){
//     return ''
//   }
// }
// 可以简单理解为：fn:(value:number | string)=>string

let c!:C
c.fn(1)
c.fn('zh')