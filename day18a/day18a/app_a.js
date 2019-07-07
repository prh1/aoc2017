var x = `set a 1
add a 2
mul a a
mod a 5
snd a
set a 0
rcv a
jgz a -1
set a 1
jgz a -2`

x = `set i 31
set a 1
mul p 17
jgz p p
mul a 2
add i -1
jgz i -2
add a -1
set i 127
set p 826
mul p 8505
mod p a
mul p 129749
add p 12345
mod p a
set b p
mod b 10000
snd b
add i -1
jgz i -9
jgz a 3
rcv b
jgz b -1
set f 0
set i 126
rcv a
rcv b
set p a
mul p -1
add p b
jgz p 4
snd a
set a b
jgz 1 3
snd b
set f 1
add i -1
jgz i -11
snd a
jgz f -16
jgz a -19`

var lines = x.split("\n");

var regs = { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, m: 0, n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, y: 0, z: 0};

function getValue(i) {
    if (isNaN(i)) {
        if (regs[i] == undefined) {
            regs[i] = 0;
        }
        return regs[i];
    } else {
        return ~~i;
    }
}

var pc = 0;

var lf = 0;

do {
    var cmds = lines[pc].split(" ");
    console.log(pc);
    var cmd = cmds[0];
    var reg = cmds[1];
    var val = cmds[2];

    switch (cmd) {
        case "set":
            regs[reg] = getValue(val);
            break;
        case "add":
            regs[reg] = regs[reg] + getValue(val);
            break;
        case "mul":
            regs[reg] = regs[reg] * getValue(val);
            break;
        case "mod":
            regs[reg] = regs[reg] % getValue(val);
            break;
        case "snd":
            lf = getValue(reg)
            break; 
        case "rcv":
            if (regs[reg] != 0) {
                regs[reg] = lf;
            };
            break;
        case "jgz":
            if (regs[reg] > 0) {
                pc = pc + getValue(val) - 1;
            };
            break;
    }
    pc = pc + 1;

} while ((pc < lines.length) && (pc > 0));

console.log("The end");