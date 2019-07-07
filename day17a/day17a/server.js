var buf = [0];
var pos = 0;
var step = 348;

for (var i = 1; i <= 2017; i++) {
    
    var pos = (pos + step) % i + 1;
    buf.splice(pos, 0, i);
}

console.log(buf[pos], buf[pos + 1]);

var x;

for (var i = 1; i <= 50000000; i++) {
    
    var pos = (pos + step) % i + 1;

    if (pos == 1) {
        x = i;
    }
}

console.log(x);
