var max = 312051;

var y = 100;
var x = 100;

var n = 0;

var size = 200;

var m = [];

for (var i = 0; i < size; i++) {
    m[i] = [];
    for (var j = 0; j < size; j++) {
        m[i].push(0);
    }
}

function total(x, y) {
    var result = m[x - 1][y - 1] + m[x][y - 1] + m[x + 1][y - 1] +
        m[x - 1][y] + m[x + 1][y] +
        m[x - 1][y + 1] + m[x][y + 1] + m[x + 1][y + 1];
    if (result > max) {
        console.log(result);
        throw (result);
    }
    else {
        return result;
    }
}

m[x][y] = 1;

// move right
var spiral = 1;
var t = 0;

function spiralOnce() {
    // move right
    for (var i = 0; i < spiral; i++) {
        x = x + 1;
        t = total(x, y);
        console.log(t);
        m[x][y] = t;
    }
    // move up
    for (var i = 0; i < spiral; i++) {
        y = y + 1;
        t = total(x, y);
        console.log(t);
        m[x][y] = t;
    }
    // move left
    spiral += 1;
    for (var i = 0; i < spiral; i++) {
        x = x - 1;
        t = total(x, y);
        console.log(t);
        m[x][y] = t;
    }
    // move down
    for (var i = 0; i < spiral; i++) {
        y = y - 1;
        t = total(x, y);
        console.log(t);
        m[x][y] = t;
    }
    spiral += 1;
}


for (var loop = 0; loop < 100; loop++) {
    spiralOnce();
}



