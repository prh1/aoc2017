x = `0: 3
1: 2
2: 4
4: 6
6: 5
8: 6
10: 6
12: 4
14: 8
16: 8
18: 9
20: 8
22: 6
24: 14
26: 12
28: 10
30: 12
32: 8
34: 10
36: 8
38: 8
40: 12
42: 12
44: 12
46: 12
48: 14
52: 14
54: 12
56: 12
58: 12
60: 12
62: 14
64: 14
66: 14
68: 14
70: 14
72: 14
80: 18
82: 14
84: 20
86: 14
90: 17
96: 20
98: 24`

const guards = x.split('\n').map(s => s.match(/\d+/g).map(Number));
const caughtByGuard = delay => ([d, r]) => (delay + d) % (2 * (r - 1)) === 0;
const severity = delay => guards.filter(caughtByGuard(delay))
    .reduce((n, [d, r]) => n + d * r, 0);

var delay = -1;
while (guards.some(caughtByGuard(++delay)));
console.log([severity(0), delay]);


x = x.replace(/:/g, "");
x = x.split("\n");
for (var i = 0; i < x.length; i++) {
    x[i] = x[i].split(" ");
}
console.log(x);

var t = 0;

for (var sd = 0; sd < 100000; sd++) {
    var firewall = {};

    for (var i = 0; i < x.length; i++) {
        var line = x[i];
        var depth = line[0];
        var range = line[1];
        firewall[depth] = { range: range, current: 0, direction: 1 };
    }
    var pos = -1;
    var score = 0;

    var max = 98;

    var delay = sd;

    var total = max + delay;

    for (var i = 0; i <= total; i++) {
        // console.log(delay, i, firewall, score);


        if ((firewall[i] != undefined) && (firewall[i].current == 0)) {
            score = score + (i * firewall[i].range);
        }
        for (var j = 0; j <= max; j++) {
            if (firewall[j] != undefined) {
                firewall[j].current = (firewall[j].current) + firewall[j].direction;
                if ((firewall[j].current == 0) || (firewall[j].current == firewall[j].range - 1)) {
                    firewall[j].direction = 0 - firewall[j].direction;
                }
            }
        }

        if (delay > 0) {
            delay = delay - 1;
            i--;
        }

    }

    if (score == 0) {
        console.log(sd);
    }
    console.log(sd, score);


}

