class Person1{
  //只读属性
  // 注意：只要是readonly来修饰的属性，必须手动提供明确的类型
  readonly age:number=18

  constructor(age:number){
    this.age=age

    //错误演示
    // readonly setAge(){
    //   this.age=20
    // }
  }
}

//--
// interface IPerson{
//   readonly name:String
// }
// let obj:IPerson={
//   name:'jack'
// }
let obj:{readonly name:string}={name:'jack'};   
// obj.name='rose'




