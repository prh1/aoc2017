﻿var a = 65;
var b = 8921;

var am = 16807
var bm = 48271;

a = 116;
b = 299;

var m = 0;

//for (var i = 0; i < 40000000; i++) {
//    a = (a * am) % 2147483647;
//    b = (b * bm) % 2147483647;

//    if ((b & 65535) == (a & 65535)) {
//        m = m + 1;
//    };
//}

for (var i = 0; i < 5000000; i++) {

    do {
        a = (a * am) % 2147483647;
    } while (a % 4 != 0)

    do {
        b = (b * bm) % 2147483647;
    } while (b % 8 != 0);

   
    if ((b & 65535) == (a & 65535)) {
        m = m + 1;
    };
}




console.log(m);