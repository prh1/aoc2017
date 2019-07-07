x = `0/2
2/2
2/3
3/4
3/5
0/1
10/1
9/10`;

x = `31/13
34/4
49/49
23/37
47/45
32/4
12/35
37/30
41/48
0/47
32/30
12/5
37/31
7/41
10/28
35/4
28/35
20/29
32/20
31/43
48/14
10/11
27/6
9/24
8/28
45/48
8/1
16/19
45/45
0/4
29/33
2/5
33/9
11/7
32/10
44/1
40/32
2/45
16/16
1/18
38/36
34/24
39/44
32/37
26/46
25/33
9/10
0/29
38/8
33/33
49/19
18/20
49/39
18/39
26/13
19/32`

var inp = x.split("\n")
    .map(e => [ ~~(e.split("/")[0]), ~~(e.split("/")[1]) ] );

var maxAll = 0;
var maxLevel = 0;
var maxLevelSt = 0;


function buildBridge(path, connection, components, level) {
    //console.log("Building", path);
    level++;
    var matched = false;
    if (true) {
        for (var i = 0; i < components.length; i++) {
            if ((components[i][0] == connection) || (components[i][1] == connection)) {
                var newComponents = [];
                for (var j = 0; j < components.length; j++) {
                    if (i != j) {
                        newComponents.push(components[j]);
                    }
                };
                var newConnection = ((components[i][0] == connection) ? components[i][1] : components[i][0]);
                var newPath = JSON.parse(JSON.stringify(path));
                newPath.push(components[i]);
                matched = true;
                buildBridge(newPath, newConnection, newComponents,level);
            }
        }
    }
    if (!matched) {
        var s = 0;
        for (var a = 0; a < path.length; a++) {
            s = s + path[a][0] + path[a][1];
        }
        //console.log("No matches found", s, JSON.stringify(path));
        if (maxAll < s) {
            console.log(s);
            maxAll = s;
        }

        if (maxLevel < level) {
            maxLevel = level;
            maxLevelSt = s;
        } else if ((maxLevel == level) && (maxLevelSt < s)) {
            maxLevelSt = s;
        }

    }
}

buildBridge([], 0, inp, 0);

console.log("All time max is ", maxAll);
console.log("Longest is ", maxLevel, " with strength of ", maxLevelSt);
