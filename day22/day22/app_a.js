var grid = [];

var size = 2000;

var off = ".";

var line = [];

for (var i = 0; i < size; i++) {
    line.push(off);
}

for (var i = 0; i < size; i++) {
     
    grid.push(JSON.parse(JSON.stringify(line)));
}

function output() {
    for (var i = 0; i < grid.length; i++) {
        if (posY != i) {
            console.log(i, " " + grid[i].join(" "));
        } else {
            var o = "";
            for (var j = 0; j < grid.length; j++) {
                if (j == posX) {
                    o = o + "[";
                }
                else if (j == posX + 1) {
                    o = o + "]";
                }
                else
                {
                    o = o + " ";
                };
                o = o + grid[i][j];
            }
            console.log(i, o);
        }
    }
    console.log("");
};

//output();

var inp = `..#
#..
...`;

var inp = `#.#.#.##.#.##.###.#.###.#
.#..#.....#..#######.##.#
......###..##..###..#...#
##....#.#.#....#..#..#..#
#..#....#.##.#.#..#..#.#.
..##..##.##..##...#...###
..#.#....#..####.##.##...
###...#.#...#.######...#.
..#####...###..#####.#.##
...#..#......####.##..#.#
#...##..#.#####...#.##...
..#.#.###.##.##....##.###
##.##...###....#######.#.
#.#...#.#..#.##..##..##.#
.#...###...#..#..####....
####...#...##.####..#.#..
......#.....##.#.##....##
###.......####..##.#.##..
....###.....##.##..###.#.
.##..##.#.###.###..#.###.
..#..##.######.##........
#..#.#..#.###....##.##..#
.##.#.#...######...##.##.
##..#..#..##.#.#..#..####
#######.#.######.#.....##`;
inp = inp.split("\n");

var middleX = ~~(size / 2);
var middleY = ~~(size / 2);

var startX = middleX - ~~(inp.length / 2);
var startY = middleY - ~~(inp.length / 2);


for (var i = 0; i < inp.length; i++) {
    var inpLine = inp[i].split("");
    for (var j = 0; j < inp.length; j++) {
        //console.log(startX + i, startY + j, inpLine[j]);
        grid[startX + i][startY + j] = inpLine[j]
    }
}

var posX = middleX;
var posY = middleY;

var infections = 0;

var direction = 0; // Up, Right, Down, Left

// -1 turn left, +1 turn right

for (var i = 0; i < 10000000; i++) {
    if (i % 100 == 0) {
        console.log(i);
    }
    if (grid[posY][posX] == ".") {
        grid[posY][posX] = "W";
        direction = direction - 1;
        if (direction == -1) {
            direction = 3;
        }

    } else if (grid[posY][posX] == "W") {
        infections++;
        grid[posY][posX] = "#"; // Do not turn
    } else if (grid[posY][posX] == "#") {
        grid[posY][posX] = "F";
        direction = direction + 1; // Turn right
        if (direction == 4) {
            direction = 0;
        }
    } else if (grid[posY][posX] == "F") {
        grid[posY][posX] = ".";
        direction = (direction + 2) % 4; // Reverse direction
    }

    switch (direction) {
        case 0:
            posY = posY - 1;
            break;
        case 1:
            posX = posX + 1;
            break;
        case 2:
            posY = posY + 1;
            break;
        case 3:
            posX = posX - 1;
            break;
    }
    //output();
}

console.log(infections);