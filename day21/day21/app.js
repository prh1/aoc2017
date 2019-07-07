var m = [[0, 0][0, 1]];

var x = [[1, 0][0, 0]];


var st = [[".", "#", "."], [".", ".", "#"], ["#", "#", "#"]]

var inp = `../.# => ##./#../...
.#./..#/### => #..#/..../..../#..#`

var inp = `../.. => ###/###/.##
#./.. => ..#/###/##.
##/.. => ..#/##./##.
.#/#. => #../.#./.##
##/#. => #.#/###/.#.
##/## => ##./.../.#.
.../.../... => ...#/.#../#.#./##.#
#../.../... => .#.#/.#../####/###.
.#./.../... => #.##/#.##/.###/##.#
##./.../... => ..##/#.##/.##./..##
#.#/.../... => .#.#/#.#./#..#/...#
###/.../... => #.../.##./.#../.###
.#./#../... => ##.#/...#/##.#/.##.
##./#../... => #.#./###./...#/#.##
..#/#../... => ..##/.###/..../.##.
#.#/#../... => ...#/#..#/#.#./#.#.
.##/#../... => ...#/#.##/..##/.###
###/#../... => .##./..##/##../##.#
.../.#./... => ####/.##./##.#/####
#../.#./... => ..../.##./#..#/##.#
.#./.#./... => ..../#.##/#.../..#.
##./.#./... => .###/.#.#/...#/....
#.#/.#./... => ..##/.#../.###/#.##
###/.#./... => ..../..##/##.#/###.
.#./##./... => .###/.#.#/#..#/#.#.
##./##./... => #..#/#..#/#.##/.##.
..#/##./... => #.##/...#/..#./.##.
#.#/##./... => ..##/#.../..../...#
.##/##./... => ##.#/...#/..##/#..#
###/##./... => ..##/..#./.###/..##
.../#.#/... => .###/..##/.#.#/..##
#../#.#/... => ..##/...#/##../..#.
.#./#.#/... => ..##/##.#/#..#/###.
##./#.#/... => #.../####/..#./#...
#.#/#.#/... => ..../##.#/.##./#..#
###/#.#/... => ..##/#.#./.#.#/.#..
.../###/... => ..##/.#../.#.#/#..#
#../###/... => #.#./.#../.##./....
.#./###/... => ##.#/...#/###./#.##
##./###/... => ..../#.../.###/#.#.
#.#/###/... => ####/..../...#/....
###/###/... => ##.#/##../#.##/#...
..#/.../#.. => ##.#/..#./#.##/..#.
#.#/.../#.. => .#../...#/..#./.##.
.##/.../#.. => ...#/#.../#..#/#..#
###/.../#.. => .###/##../.##./.#..
.##/#../#.. => ..##/#.##/.#.#/...#
###/#../#.. => ...#/.###/..../#..#
..#/.#./#.. => #..#/..../..#./..##
#.#/.#./#.. => #..#/..../#.#./.###
.##/.#./#.. => ..../.##./..##/.#.#
###/.#./#.. => ##.#/###./##.#/..##
.##/##./#.. => #.#./..../###./####
###/##./#.. => #..#/#.##/#.##/#...
#../..#/#.. => ##../#..#/#.../###.
.#./..#/#.. => #.#./.#.#/..../.#.#
##./..#/#.. => #.#./#.../#.#./#..#
#.#/..#/#.. => ..##/.#.#/.#../.###
.##/..#/#.. => ##.#/..##/..../.###
###/..#/#.. => ..#./.##./...#/.#.#
#../#.#/#.. => #.../.#../#.#./##..
.#./#.#/#.. => ..../..../##../#...
##./#.#/#.. => ..#./..../#.../..#.
..#/#.#/#.. => #.#./.#.#/.#../#.##
#.#/#.#/#.. => ...#/##.#/.##./#...
.##/#.#/#.. => ..#./...#/.##./#...
###/#.#/#.. => ..##/#..#/..../..##
#../.##/#.. => ##.#/##.#/#.##/.#.#
.#./.##/#.. => ..##/##../#.#./####
##./.##/#.. => #.#./..../..##/#.##
#.#/.##/#.. => ..#./###./##.#/##.#
.##/.##/#.. => #..#/...#/..##/....
###/.##/#.. => ..##/##../##.#/#.##
#../###/#.. => ####/###./.###/....
.#./###/#.. => ...#/.##./...#/#.##
##./###/#.. => ...#/...#/##.#/.##.
..#/###/#.. => ..##/.##./#.#./...#
#.#/###/#.. => .###/.##./.###/.#.#
.##/###/#.. => ##../.#../#.#./##.#
###/###/#.. => ..../..../.###/##..
.#./#.#/.#. => ##.#/##.#/..##/.##.
##./#.#/.#. => .#../#.##/#.##/#.#.
#.#/#.#/.#. => ..##/#.#./#.../..##
###/#.#/.#. => ##.#/.#.#/##.#/.###
.#./###/.#. => #.#./..#./..##/.##.
##./###/.#. => ...#/#.##/###./#.##
#.#/###/.#. => ...#/.###/#.#./#.#.
###/###/.#. => .#.#/#..#/####/#...
#.#/..#/##. => #.##/#.#./##../####
###/..#/##. => ##.#/...#/..../####
.##/#.#/##. => #.../#..#/..##/....
###/#.#/##. => ##../###./...#/####
#.#/.##/##. => ##.#/..##/..../#...
###/.##/##. => ..#./####/..../#...
.##/###/##. => ..##/#.##/..#./####
###/###/##. => #.##/...#/..../..#.
#.#/.../#.# => ..#./#.##/#..#/#.#.
###/.../#.# => ..#./###./..##/#...
###/#../#.# => .###/#..#/##../.#..
#.#/.#./#.# => ###./##.#/.#../#..#
###/.#./#.# => ##.#/###./#.../...#
###/##./#.# => ####/##../#.../....
#.#/#.#/#.# => ..#./..##/..#./...#
###/#.#/#.# => ...#/##.#/##.#/#.##
#.#/###/#.# => ..#./####/.#../##.#
###/###/#.# => ..../.#.#/..../...#
###/#.#/### => #.#./..##/##.#/....
###/###/### => ..#./#.##/####/###.`;

inp = inp.replace(/ /g, "");

var inp = inp.split("\n");

var rules2 = [];
var rules3 = [];

for (var i = 0; i < inp.length; i++) {
    var line = inp[i];

    var source = line.split("=")[0];
    var dest = line.split(">")[1];

    var source = source.split("/");
    var rows = [];
    for (var j = 0; j < source.length; j++) {
        var row = [];
        for (var k = 0; k < source[j].length; k++) {
            row.push(source[j][k])
        };
        rows.push(row);
    }
    var rule = { source: rows };

    var dest = dest.split("/");
    var rows = [];
    for (var j = 0; j < dest.length; j++) {
        var row = [];
        for (var k = 0; k < dest[j].length; k++) {
            row.push(dest[j][k])
        };
        rows.push(row);
    }

    rule.dest = rows;

    if (rule.source.length == 2) {
        rules2.push(rule)
    }
    else {
        rules3.push(rule);
    }
}


function matcher(square, rule, compare, coords, matchKeys) {

    for (var i = 0; i < compare.length; i++) {
        //console.log("Comaparing", compare[i]);
        var matched = true;
        var compareKeys = compare[i];
        for (var j = 0; j < matchKeys.length; j++) {
            var matchKey = matchKeys[j];
            var compareKey = compareKeys[j];

            var mx = coords[matchKey][0];
            var my = coords[matchKey][1];

            var cx = coords[compareKey][0];
            var cy = coords[compareKey][1];

//            console.log("Testing", mx, my, "against", cx, cy, ":", square[mx][my], "-", rule[cx][cy]);

            if (square[mx][my] != rule[cx][cy]) {
                matched = false;
            };
        };
        if (matched) {
            // console.log("Matched on", compare[i]);
            return true;
        }
    }
    return false;
}

function matchesTwo(square, rule) {

    //console.log("Checking", square, "against", rule);

    var compare = ["abcd", "cadb", "bdca", "bdac"];
    compare.push("badc", "acbd", "cdab", "bdca"); // flipped horiz;
    compare.push("cdab", "dbca", "cabd", "acdb"); // flipped vert;
    compare.push("dcba", "bdac", "abcd", "cadb"); // flipped both;
    
    var coords = { a: [0, 0], b: [0, 1], c: [1, 0], d: [1, 1] };
    var matchKeys = "abcd";

    return matcher(square, rule, compare, coords, matchKeys);
}

function matchesThree(square, rule) {

    var compare = ["abcdefghi", "gdahebifc", "ihgfedcba", "cfibehadg"];
    compare.push("cbafedihg", "ifchebgda", "ghidefacb", "adgbehcfi"); // flipped horiz
    compare.push("ghidefacb", "adgbehcfi", "cbafedihg", "ifchebgda"); // flipped vert
    compare.push("ihgfedcba", "cfibehadg", "abcdefghi", "gdahebifc"); // flipped both;

    var coords = { a: [0, 0], b: [0, 1], c: [0, 2], d: [1, 0], e: [1, 1], f: [1, 2], g: [2, 0], h: [2, 1], i: [2, 2] };
    var matchKeys = "abcdefghi";

    return matcher(square, rule, compare, coords, matchKeys);
}

function output() {
    var c = 0;
    for (var i = 0; i < st.length; i++) {
        var line = st[i].join("");
        console.log(line);
        c = c + line.replace(/\./g, '').length;
    }
    console.log(c);
}

//console.log(JSON.stringify(rules2));
//console.log(JSON.stringify(rules3));

output();

var dt = [];

for (var c = 0; c < 18; c++) {
    if (st.length % 2 == 0) {
        var x = 0;

        dt = [];

        for (var x = 0; x < st.length / 2; x++) {
            dt.push([], [], []);
            for (var y = 0; y < st.length / 2; y++) {
                var i = x * 2;
                var j = y * 2;
                var grid = [[st[i][j], st[i][j + 1]],
                [st[i + 1][j], st[i + 1][j + 1]]
                ];

                var newGrid = [];
                for (var r = 0; r < rules2.length; r++) {
                    if (newGrid.length == 0) {
                        if (matchesTwo(grid, rules2[r].source)) {
                            newGrid = rules2[r].dest;
                        };
                    }
                }
                //console.log(newGrid);

                dt[(x * 3)].push(...newGrid[0]);
                dt[(x * 3) + 1].push(...newGrid[1]);
                dt[(x * 3) + 2].push(...newGrid[2]);
            }
        }
    } else if (st.length % 3 == 0) {
        var x = 0;

        dt = [];

        for (var x = 0; x < st.length / 3; x++) {
            dt.push([], [], [], []);
            for (var y = 0; y < st.length / 3; y++) {
                var i = x * 3;
                var j = y * 3;
                var grid = [[st[i][j], st[i][j + 1], st[i][j + 2]],
                [st[i + 1][j], st[i + 1][j + 1], st[i + 1][j + 2]],
                [st[i + 2][j], st[i + 2][j + 1], st[i + 2][j + 2]]
                ];

                var newGrid = [];
                for (var r = 0; r < rules3.length; r++) {
                    //console.log(grid, rules3[r].source);
                    if (newGrid.length == 0) {
                        if (matchesThree(grid, rules3[r].source)) {
                            newGrid = rules3[r].dest;
                        };
                    }
                }
                //console.log(newGrid);

                dt[(x * 4)].push(...newGrid[0]);
                dt[(x * 4) + 1].push(...newGrid[1]);
                dt[(x * 4) + 2].push(...newGrid[2]);
                dt[(x * 4) + 3].push(...newGrid[3]);

            }
        }
    }

    st = dt;

    output();
}


var rules = {};
inp.split('\n').forEach(d => {
    var tokens = d.split(' => ');
    rules[tokens[0]] = tokens[1];
})

var grid;

function doProblem(totalReps) {
    grid = ['.#.', '..#', '###'];
    for (var loop = 0; loop < totalReps; loop++) {
        var sub = getSubgrids();
        for (var l = 0; l < sub.length; l++) {
            sub[l] = rule(sub[l]);
        }
        grid = reform(sub);
    }
}

function rule(str) {
    for (var i = 0; i < 2; i++)
        for (var j = 0; j < 4; j++) {
            var s = morph(str, j, i)
            if (rules.hasOwnProperty(s))
                return rules[s];
        }
}

function morph(str, rotate, flip) {
    var s = str.split('/');
    if (flip) s.reverse();

    for (var r = 0; r < rotate; r++) {
        var n = [];
        for (i = 0; i < s.length; i++) {
            var news = "";
            for (var j = s.length - 1; j >= 0; j--)
                news += s[j][i];
            n.push(news)
        }
        s = n;
    }
    return s.join('/')
}

function getSubgrids() {
    var num = grid.length % 2 == 0 ? 2 : 3;
    var strs = [];
    for (var i = 0; i < grid.length; i += num)
        for (var j = 0; j < grid.length; j += num) {
            var str = "";
            for (var k = 0; k < num; k++)
                str += grid[i + k].substring(j, j + num) + "/"
            strs.push(str.substr(0, str.length - 1));
        }
    return strs;
}

function reform(arr) {
    var g = [];
    var num = Math.sqrt(arr.length);
    var strlen = arr[0].match(/\//g).length + 1;
    for (var i = 0; i < arr.length; i += num)
        for (var j = 0; j < strlen; j++) {
            var str = "";
            for (var k = 0; k < num; k++)
                str += arr[i + k].split('/')[j];
            g.push(str);
        }
    return g;
}

doProblem(5);
var count = grid.reduce((a, b) => a + b.match(/#/g).length, 0)
console.log('number of # is:', count);

doProblem(18);
var count = grid.reduce((a, b) => a + b.match(/#/g).length, 0)
console.log('number of # is:', count);