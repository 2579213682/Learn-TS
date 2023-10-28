// interface Point2D{x:number;y:number}
// //interface Point3D{x:number;y:number;z:number}

// //通过继承Point3D 具有x/y/z三个属性
// interface Point3D extends Point2D{
//   z:number
// }

// let p3:Point3D={
//   x:1,
//   y:1,
//   z:1
// }

//--
interface Person{
  name:string
  say():string
}
interface Contact{
  phone:string
}
type PersonDetail=Person&Contact
let obj:PersonDetail={
  name:'zh',
  phone:'134.....',
  say() {
  // console.log( '爱gmy')
   return '爱gmy'
  }
// type PersonDetail={
//   name:string
//   say():string
//   phone:string
// }
}
