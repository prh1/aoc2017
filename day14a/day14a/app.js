function knot(d) {
    var x = [];


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
            //console.log(x[o]);
            o = o + 1;
        }
        a = a + (("00" + s.toString(16)).slice(-2));
    }

    return a;

}




var prefix = 'vbqugkhl';

var hashes = [];
var total = 0;

for (var i = 0; i < 128; i++) {
    var key = prefix + "-" + i;

    var hash = knot(key);
    var grid = "";

    for (var j = 0; j < hash.length; j++) {
        var dec = parseInt(hash[j], 16);
        var bin = ("0000" + dec.toString(2)).slice(-4);
       
        var cnt = bin.replace(/0/g, '').length;

        var hashfrag = bin.replace(/0/g, '.').replace(/1/g, '#');
        
        total = total + cnt;
        grid = grid + hashfrag;
    };
    hashes.push(grid);

    console.log(grid);
}

console.log(total);

var r = 0;

var x = 0;
var y = 0;


function findFirstNonBlank() {
    for (var i = 0; i < hashes.length; i++) {
        for (var j = 0; j < hashes[i].length; j++) {
            if (hashes[i][j] == "#") {
                x = i;
                y = j;
                return;
            }
        }
    }
    for (var i = 0; i < hashes.length; i++) {
        console.log(hashes[i])
    }

    console.log("Done", r);
    throw (r);
}


String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

function replaceNeighbours(x1, y1) {
    hashes[x1] = hashes[x1].replaceAt(y1, "*");
    if (x1 > 0) {
        if (hashes[x1 - 1][y1] == "#") {
            replaceNeighbours(x1 - 1, y1)
        }
    }
    if (x1 < 127) {
        if (hashes[x1 + 1][y1] == "#") {
            replaceNeighbours(x1 + 1, y1)
        }
    }
    if (y1 > 0) {
        if (hashes[x1][y1 - 1] == "#") {
            replaceNeighbours(x1, y1 - 1)
        }
    }
    if (y1 < 127) {
        if (hashes[x1][y1 + 1] == "#") {
            replaceNeighbours(x1, y1 + 1)
        }
    }   
}


for (var a = 0; a < 9000; a++) {
    findFirstNonBlank();
    console.log(x, y);

    replaceNeighbours(x, y);
    r = r + 1;
 

}

console.log(r);

