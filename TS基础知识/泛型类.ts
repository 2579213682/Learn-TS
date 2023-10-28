// class GenericNumber<NumType>{
//   defaultValue:NumType
//   add:(x:NumType,y:NumType)=>NumType

//   constructor(value:NumType){
//     this.defaultValue=value
//   }
// }
// //此时，可以省略<类型>不写
// const myNum=new GenericNumber(100)
// myNum.defaultValue=10


//--
class GenericNumber<NumType>{
  defaultValue:NumType
  add:(x:NumType,y:NumType)=>NumType

}
//这种情况下，推荐明确指定<类型>
const myNum=new GenericNumber<number>()
myNum.defaultValue=10