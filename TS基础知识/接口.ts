//接口：
// interface IPerson{
//   name:string
//   age:number
//   sayHi():void
// }

//类型别名
type IPerson={
  name:string
  age:number
  sayHi():void
}

let person1:IPerson={
  name:'gmy',
  age:18,
  sayHi(){}
}
let person2:IPerson={
  name:'zh',
  age:18,
  sayHi(){}
}

//type NumStr =number|string