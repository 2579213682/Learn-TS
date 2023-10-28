class Animal{
 public move(){console.log('爱')}
}
class Dog extends Animal{
  name:string='gmy'
  bark(){
    console.log('zh')
  }
}
const d=new Dog()
d.bark()
d.move()
console.log(d.name)
//结果为:'zh爱gmy'


