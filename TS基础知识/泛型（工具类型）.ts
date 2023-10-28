//1 2泛型工具类型
// interface Props{
//   id:string
//   children:number[]
// }

// // 2.Readonly<Type>
// type ReadonlyProps=Readonly<Props>
// let p1:ReadonlyProps={
//   id:'1',
//   children:[1]
// }
//无法为id赋值，因为他是只读属性。
// p1.id='2'

//1.Partial<Type>用来构造一个类型，将Type的所有属性设置为可选
// type PartialProps=Partial<Props>
// let p1 :Props={
//   id:'',
//   children:[1]
// }
// let p2:PartialProps={
//   id:'',             //可选可不选
//   children:[1]       //可选可不选
// }


//3.Pick<Type,Keys>
// interface Props{
//   id:string
//   title:string
//   children:number[]
// }
// type PickProps=Pick<Props,'id' |'title'>


//4.Record<Keys,Type>
type RecordObj=Record<'a'|'b'|'c',string[]>
//等价于
// type RecordObj = {
//   a: string[];
//   b: string[];
//   c: string[];
// }

let obj:RecordObj={
  a:['a'],
  b:['b'],
  c:['c']
}