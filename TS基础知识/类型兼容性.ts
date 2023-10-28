//演示类型兼容性

let arr =['a','b','c']
arr.forEach(item=>{})
arr.forEach((item,index)=>{})
arr.forEach((item,index,array)=>{})


//两个类的兼容性演示：
class Point1{
  x:number
  y:number
}
class Point2D{
  x:number
  y:number
}

const pp:Point1=new Point2D()

class Point3D{
  x:number
  y:number
  z:number
}
const p2:Point1=new Point3D()

//错误演示
// const p3:Point3D=new Point1()