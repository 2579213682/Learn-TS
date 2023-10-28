// let number1:number[]=[1,3,5] //推荐写法
// let numbers1:Array<number>=[1,3,5] //繁琐的写法 不推荐
// let strings:Array<string>=['a','b','c'] //繁琐的写法不推荐
// let b1:boolean[]=[true,false]

//联合类型
//添加小括号，表示：首先是数组，然后，这个数组中能够出现number或string类型的元素
// let arr:(number | string)[]=[1,3,5,'a','b']

//不添加小括号，表示:arr1既可以是number类型，又可以是string[]
// let arr1:number| string[]=['a','b']
// let arr1:number| string[]=123

//类型别名
// type CustomArray=(number|string)[]
// let arr1:CustomArray=[1,3,5,'a','b']
// let arr2:CustomArray=[1,'x']


 //函数类型
// function add(num1:number,num2:number):number{
//   return num1+num2;
// }

// const add=(num1:number,num2:number):number=>{
//   return num1+num2;
// }
// console.log(add(1,2))

//2.同时指定参数、返回值类型
// const add:(num1:number,num2:number)=>number=(num1,num2)=>{
//   return num1+num2
// }

//void函数类型
// function greet(name:string):void{
//   console.log('hello',name)
// }
// greet('jack')

//可选参数使用或不使用
function mySlice(start?:number,end?:number):void{
  console.log('起始索引',start,'结束索引',end)
}

mySlice()
mySlice(1)
mySlice(1,3)