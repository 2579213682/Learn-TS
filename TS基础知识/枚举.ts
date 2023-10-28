// enum Direction {Up,Down,Left,Right}
// function changeDirection1(direction:Direction){
//   console.log(direction)
// }
// changeDirection1(Direction.Up)
// changeDirection1(Direction.Down)
// changeDirection1(Direction.Left)
// changeDirection1(Direction.Right)

//字符串枚举

let song:string[]=['gmy','zh']
enum Direction {
  Up='up',
  Down='down',
  Left='left',
  Right='right'
}
function changeDirection1(direction:Direction){
}
changeDirection1(Direction.Up)
console.log(Direction)