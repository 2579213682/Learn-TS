type PropKeys='x'|'y'|'z'|'a'|'b'
type Type1={x:number;y:number;z:number;a:number;b:number}

type Type2={[Key in PropKeys]:number}
// 相当于：
// type Type2 = {
//   x: number;
//   y: number;
//   z: number;
//   a: number;
//   b: number;
// }

// 错误演示
// 映射的类型可能不声明属性或方法。ts(7061)
// “PropKeys”仅表示类型，但在此处却作为值使用。
// interface Type3{
//   [Key in PropKeys]:number
// }