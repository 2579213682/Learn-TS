// enum Direction {Up,Down,Left,Right}
// function changeDirection1(direction:Direction){
//   console.log(direction)
// }
// changeDirection1(Direction.Up)
// changeDirection1(Direction.Down)
// changeDirection1(Direction.Left)
// changeDirection1(Direction.Right)
//字符串枚举
var song = ['gmy', 'zh'];
var Direction;
(function (Direction) {
    Direction["Up"] = "up";
    Direction["Down"] = "down";
    Direction["Left"] = "left";
    Direction["Right"] = "right";
})(Direction || (Direction = {}));
function changeDirection1(direction) {
}
changeDirection1(Direction.Up);
console.log(Direction);
