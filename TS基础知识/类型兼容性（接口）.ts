interface Point1A{
  x:number
  y:number
}
interface Point2A{
  x:number
  y:number
}
interface Point3A{
  x:number
  y:number
  z:number
}

let aa :Point1A={x:4,y:5}
let ab :Point2A={x:3,y:4}
let ac :Point3A={x:2,y:3,z:4} 
//正确：
aa=ab
ab=aa  
aa=ac

//错误演示
// a3=a1

//类和接口之间也是兼容的
class Point4D{
  x:number
  y:number
  z:number
}
ab=new Point4D()