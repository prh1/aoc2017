
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

var regs = { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, m: 0, n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, y: 0, z: 0 };


var progs = [];
progs.push({ pc: 0, lf: [], regs: JSON.parse(JSON.stringify(regs)), waitingRcv: false, terminated: false, sendCount: 0 });
progs.push({ pc: 0, lf: [], regs: JSON.parse(JSON.stringify(regs)), waitingRcv: false, terminated: false, sendCount: 0 });

progs[1].regs["p"] = 1;

function getValue(p, i) {
    if (isNaN(i)) {
        if (progs[p].regs[i] == undefined) {
            progs[p].regs[i] = 0;
        }
        return progs[p].regs[i];
    } else {
        return ~~i;
    }
}

function runInstr(p) {
    var cmds = lines[progs[p].pc].split(" ");
    console.log(p, progs[p].pc, cmds);
    var cmd = cmds[0];
    var reg = cmds[1];
    var val = cmds[2];

    switch (cmd) {
        case "set":
            progs[p].regs[reg] = getValue(p, val);
            break;
        case "add":
            progs[p].regs[reg] = regs[reg] + getValue(p, val);
            break;
        case "mul":
            progs[p].regs[reg] = regs[reg] * getValue(p, val);
            break;
        case "mod":
            progs[p].regs[reg] = regs[reg] % getValue(p, val);
            break;
        case "snd":
            progs[p].lf.push(getValue(p, reg));
            progs[p].sendCount = progs[p].sendCount + 1;
            break;
        case "rcv":
            if (progs[1 - p].lf.length > 0) {
                progs[p].regs[reg] = progs[1 - p].lf.shift();
                progs[p].waitingRcv = false;
            } else {
                progs[p].waitingRcv = true;
                console.log(p, "waiting", progs[p].sendCount);
                progs[p].pc = progs[p].pc - 1;
            }
            break;
        case "jgz":
            if (progs[p].regs[reg] > 0) {
                progs[p].pc = progs[p].pc + getValue(p, val) - 1;
            };
            break;
    }
    progs[p].pc = progs[p].pc + 1;
}

do {
    if (!progs[0].terminated) {
        runInstr(0);
        if ((progs[0].pc < 0) || (progs[0].pc >= lines.length)) {
            progs[0].terminated = true;
        }
    }

    if (!progs[1].terminated) {
        runInstr(1);
        if ((progs[1].pc < 0) || (progs[1].pc > lines.length)) {
            progs[1].terminated = true;
        }
    }

    if (progs[1].terminated) {
        console.log(progs[1].sendCount);
        throw (progs[1].sendCount)
    }

    if (progs[0].waitingRcv && progs[1].waitingRcv) {
        progs[0].terminated = true;
        progs[0].terminated = true;
    }

} while (!((progs[0].terminated == true) && (progs[1].terminated == true)));

console.log("Done");


//    var commands = [];
//input.split('\n').forEach(d => {
//    commands.push({ "name": d.substring(0, 3), "args": d.substring(4).split(' ') })
//})

//function Program(id) {
//    this.registers = {};
//    this.lastSound = "";
//    this.index = 0;
//    this.id = id;
//    this.sendCount = 0;
//    this.queue = [];
//    this.registers['p'] = id;

//    this.instP1 = {
//        "set": (a, b) => { this.registers[a] = this.parse(b); this.index++; },
//        "mul": (a, b) => { this.registers[a] *= this.parse(b); this.index++; },
//        "add": (a, b) => { this.registers[a] += this.parse(b); this.index++; },
//        "mod": (a, b) => { this.registers[a] = this.registers[a] % this.parse(b); this.index++; },
//        "snd": a => { this.lastSound = this.parse(a); this.index++; },
//        "jgz": (a, b) => { this.index += this.parse(a) > 0 ? this.parse(b) : 1; },
//        "rcv": a => { if (this.parse(a) > 0) { console.log('recovered', this.lastSound); return true; } this.index++; }
//    }
//    this.instP2 = {
//        "set": this.instP1.set,
//        "mul": this.instP1.mul,
//        "add": this.instP1.add,
//        "mod": this.instP1.mod,
//        "jgz": this.instP1.jgz,
//        "snd": a => { programs[(this.id + 1) % 2].queue.push(this.parse(a)); this.index++; this.sendCount++; },
//        "rcv": a => { if (this.queue.length > 0) { this.registers[a] = this.queue.shift(); this.index++; } }
//    }
//    Program.prototype.executeP1 = function () {
//        return this.instP1[commands[this.index].name](...commands[this.index].args);
//    }
//    Program.prototype.executeP2 = function () {
//        return this.instP2[commands[this.index].name](...commands[this.index].args);
//    }
//    Program.prototype.parse = function (b) {
//        return isNaN(b) ? this.registers[b] : parseInt(b);
//    }
//    Program.prototype.finished = function () {
//        return this.index < 0 || this.index >= commands.length;
//    }
//    Program.prototype.finishedOrStalled = function () {
//        return this.finished() || (commands[this.index].name == 'rcv' && this.queue.length == 0);
//    }
//}

//// part 1
//var prog = new Program(0);
//while (!prog.executeP1());

//// part 2
//var programs = [new Program(0), new Program(1)]
//do {
//    programs.forEach(d => { if (!d.finished()) d.executeP2(); })
//} while (!programs.reduce((a, b) => a && b.finishedOrStalled(), true))

//console.log('program 1 send count:', programs[1].sendCount)