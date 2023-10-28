type Props={a:number;b:string;c:boolean}
//统一修改类型
type Type3={[key in keyof Props]:number}