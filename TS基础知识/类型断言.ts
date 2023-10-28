//不常用
// const aLink =<HTMLAnchorElement>document.getElementById('link')
const aLink =document.getElementById('link') as HTMLAnchorElement
// HTMLAnchorElement 这是a标签的类型断言
aLink.href