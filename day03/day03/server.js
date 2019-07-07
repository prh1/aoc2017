var i = 312051;

var sq = Math.sqrt(i);

if ((sq == ~~sq) && (sq % 2 == 1)) {
    // The real definition of a corner case, do nothing we are in a corner
}
else {
    sq = ~~sq;
    if (sq % 2 == 0) {
        sq += 1;
    }
}

console.log(sq);

var size = sq;
var x = ~~(sq / 2);
var y = x;

var num = sq * sq;

console.log(size, x, y, sq, num, i);

if ((num - size) < i) {
    // it's on the bottom line;
    console.log("Bottom");

    x = x - (num - i);
    console.log(x, y);
    console.log("ANSWER: " + (Math.abs(x) + Math.abs(y)));

} else {
    num = num - size;
    x = x - size;
}
console.log(size, x, y, sq, num, i);

if ((num - size) < i) {
    // it's on the bottom line;
    console.log("Left");
} else {
    num = num - size;
    y = y - size;
}
console.log(size, x, y, sq, num, i);
