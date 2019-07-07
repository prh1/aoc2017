var m = 12629077;

var v = Array(m).fill(0);

var s = "A";

//var turing = {
//    "A": [{ v: 1, d: "r", s: "B" },
//        { v: 0, d: "l", s: "B" }],
//    "B": [{ v: 1, d: "l", s: "A" },
//        { v: 1, d: "r", s: "A" }]
//}

var turing = {
    "A": [{ v: 1, d: "r", s: "B" },
        { v: 0, d: "l", s: "B" }],
    "B": [{ v: 0, d: "r", s: "C" },
        { v: 1, d: "l", s: "B" }],
    "C": [{ v: 1, d: "r", s: "D" },
        { v: 0, d: "l", s: "A" }],
    "D": [{ v: 1, d: "l", s: "E" },
        { v: 1, d: "l", s: "F" }],
    "E": [{ v: 1, d: "l", s: "A" },
        { v: 0, d: "l", s: "D" }],
    "F": [{ v: 1, d: "r", s: "A" },
        { v: 1, d: "l", s: "E" }]
}


var p = ~~(m / 2);
var c = 0;

function output() {
    var ch = 0;
    for (var i = 0; i < v.length; i++) {
        ch = ch + v[i];
    };
    console.log(c, p, ch,  s)
}

do {
    if (c % 1000000 == 0) {
        output();
    }
    var instr = turing[s][v[p]];
    v[p] = instr.v;
    if (instr.d == "r") {
        p++
    } else {
        p--
    }
    s = instr.s;
    c++;
} while (c < 12629077);

output();