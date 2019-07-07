function solve2(n) {
    let r = {
        b: 99,
        c: 99,
        d: 0,
        f: 0,
        g: 0,
        h: 0
    }
    r['b'] = r['b'] * 100 + 100000
    r['c'] = r['b'] + 17000
    do {
        r['f'] = 1
        r['d'] = 2
        for (let d = r['d']; d * d < r['b']; ++d) {
            if (r['b'] % d === 0) {
                r['f'] = 0
                break
            }
        }
        if (r['f'] === 0) r['h']++
        r['g'] = r['b'] - r['c']
        r['b'] += 17
    } while (r['g'] !== 0)

    return r['h']
}

console.log(solve2());

//var x = `set b 99
//set c b
//jnz a 2
//jnz 1 5
//mul b 1
//sub b -100000
//set c b
//sub c -17000
//set f 1
//set d 2
//set e 2
//set g d
//mul g e
//sub g b
//jnz g 2
//set f 0
//sub e -1
//set g e
//set g 0
//jnz g -8
//sub d -1
//set g d
//sub g b
//jnz g -13
//jnz f 2
//sub h -1
//set g b
//sub g c
//jnz g 2
//jnz 1 3
//sub b -17
//jnz 1 -23`;

//var lines = x.split("\n");

//var regs = { a: 1, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0 };

//function getValue(i) {
//    if (isNaN(i)) {
//        if (regs[i] == undefined) {
//            regs[i] = 0;
//        }
//        return regs[i];
//    } else {
//        return ~~i;
//    }
//}

//var pc = 0;

//var lf = 0;
//var mulC = 0;

//var c = 0;

//do {
//    var cmds = lines[pc].split(" ");
//    //console.log(pc);
//    var cmd = cmds[0];
//    var reg = cmds[1];
//    var val = cmds[2];

//    c++;
//    if (c % 100 == 0) {
//        console.log(JSON.stringify(regs));
//    }

//    switch (cmd) {
//        case "set":
//            regs[reg] = getValue(val);
//            break;
//        case "sub":
//            regs[reg] = regs[reg] - getValue(val);
//            break;
//        case "mul":
//            mulC++;
//            regs[reg] = regs[reg] * getValue(val);
//            break;
//        //case "mod":
//        //    regs[reg] = regs[reg] % getValue(val);
//        //    break;
//        //case "snd":
//        //    lf = getValue(reg)
//        //    break; 
//        //case "rcv":
//        //    if (regs[reg] != 0) {
//        //        regs[reg] = lf;
//        //    };
//        //    break;
//        case "jnz":
//            if (regs[reg] != 0) {
//                pc = pc + getValue(val) - 1;
//            };
//            break;
//    }
//    pc = pc + 1;

//} while ((pc < lines.length) && (pc > 0));

//console.log(mulC);
//console.log(regs);
//console.log("The end");