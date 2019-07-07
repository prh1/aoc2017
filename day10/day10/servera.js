var x = [];
var d = `83,0,193,1,254,237,187,40,88,27,2,255,149,29,42,100`;

//d = `1,2,3`;

var c = [];

for (var i = 0; i < d.length; i++) {
    c.push(d.charCodeAt(i));
}

//c = `49,44,50,44,51`;

//c = c.split(",");

c.push(17);
c.push(31);
c.push(73);
c.push(47);
c.push(23);

for (var i = 0; i < 256; i++) {
    x.push(i);
    //console.log(i);
}

var p = 0;
var skip = 0;

for (var a = 0; a < 64; a++) {
    //console.log(x);
    for (var i = 0; i < c.length; i++) {

//        console.log("Step ", i);
        var p1 = p;
        var subList = [];
        for (var j = 0; j < c[i]; j++) {
            subList.push(x[p1]);
            p1++;
            if (p1 >= x.length) {
                p1 = 0
            }
        }

    //    console.log(subList);
        for (var j = 0; j < subList.length; j++) {
            x[p] = subList[subList.length - j - 1];
            p = p + 1;
            if (p >= x.length) {
                p = 0;
            }
        }
    //    console.log(x);
        for (var j = 0; j < skip; j++) {
            p = p + 1;
            if (p >= x.length) {
                p = 0;
            }
        }
        skip += 1;        
        //console.log(p);

    }


}


var o = 0;
var a = "";
for (var i = 0; i < 16; i++) {
    s = 0;
    for (var j = 0; j < 16; j++) {
        s = s ^ x[o];
        console.log(x[o]);
        o = o + 1;
    }
    a = a + (("00" + s.toString(16)).slice(-2));
}

console.log(a);