interface Singable{
  name:string
  sing():void
}
class Person implements Singable{
  name='zh'
  sing(): void {
    console.log('我是如此相信')
  }
}
const p1=new Person()
console.log(p1.name)
p1.sing()