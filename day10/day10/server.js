var x = [];
var c = `83,0,193,1,254,237,187,40,88,27,2,255,149,29,42,100`;

c = c.split(",");

for (var i = 0; i < 256; i++) {
    x.push(i);
    console.log(i);
}

var p = 0;
var skip = 0;


for (var i = 0; i < x.length; i++) {

    console.log("Step ", i);
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
    console.log(p);

}

console.log(x[0] * x[1]);