function getProp<Type,Key extends keyof Type>(obj:Type,key:Key){
  return obj[key]
}

getProp({name:'jack',age:18},'age')
getProp({name:'jack',age:18},'name')
//错误演示：
// getProp({name:'jack',age:18},'name1')

//补充（了解）
getProp(18,'toFixed')//数值类型方法tofixed
getProp('abc','split')//字符串类型方法split
getProp('abc',1)//此处的1表示索引
getProp(['a'],'length')//数组类型的属性length
getProp(['a'],1000)//此处的1000为数组的索引

console.log('object'[1])//结果为b

