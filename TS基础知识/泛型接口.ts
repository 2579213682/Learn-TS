interface IdFunc<Type>{
  id:(value:Type)=>Type //id(value:Type):Type
  ids:()=>Type[] //返回值是数组
}

let obj:IdFunc<number>={
  id(value) {
    return value
  },
  ids() {
    return [1,3,5]
  },
}