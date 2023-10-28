//class类的构造函数
class Person{
  age:number=18
  gender='男'
  //gender:string='男'

  constructor(age:number,gender:string){
    this.age=age
    this.gender=gender
  }
}

const p1 =new Person(18,'男')

console.log(p1.age)
console.log(p1.gender)
