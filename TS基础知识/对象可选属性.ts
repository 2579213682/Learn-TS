function myAxios(config:{url:string;method?:string}){
console.log(config)
}

myAxios({
  url:'http',
  method:'GET'
})