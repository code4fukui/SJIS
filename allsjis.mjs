import iconv from "iconv-lite";
import fs from "fs";

const hex = (n) => {
    const res = "0000" + n.toString(16);
    return res.substring(res.length - 4);
};

let map1 = "";
let map2 = "";

const list = [];
for (let i = 0; i < 0x100; i++) {
    const bin = new Uint8Array(1);
    bin[0] = i;
    const s = iconv.decode(bin, "Shift_JIS");
    if (s.length == 1) {
        const code = s.charCodeAt(0);
        if (code != 65533) { //  && code > 128)
           list.push([i, code, s]);
           map1 += hex(i) + hex(code);
        }
    }
}

const tbl2 = {};
for (let i = 0x100; i < 0x10000; i++) {
    const bin = new Uint8Array(2);
    const n = i >> 8;
    /*
    if (n >= 0 && n <= 0x80 || n >= 0xa1 && n <= 0xdf) {
        continue;
    }
    */
    const m = i & 0xff;
    /*
    if (m < 0x40 || m > 0xfc) {
        continue;
    }
    */
    bin[0] = n;
    bin[1] = m;
    const s = iconv.decode(bin, "Shift_JIS");
    if (s.length == 1) {
        const code = s.charCodeAt(0);
        if (code != 65533) {
            list.push([i, code, s]);
            map2 += hex(i) + hex(code);
        }
    }
}

let map = "";
map += `const map1 = "${map1}";\n`;
map += `const map2 = "${map2}";\n`;
fs.writeFileSync("sjis2utf8_map.js", map);

process.exit(0);

console.log(list);
console.log(list.length);

let csv = "sjis,utf8\n";
for (const l of list) {
    csv += l[0] + "," + l[1] + "\n";
}
fs.writeFileSync("sjis2utf8.csv", csv);
process.exit(0);
const hist = {};
for (const l of list) {
    if (hist[l[1]]) {
        hist[l[1]]++;
    } else {
        hist[l[1]] = 1;
    }
}
for (const h in hist) {
    //if (hist[h] > 1) {
    if (hist[h] > 2 && hist[h] != 257) {
        console.log(h, hist[h], String.fromCharCode(h));
    }
}
//console.log(list.length);
//console.log(tbl1, tbl2)
//process.exit(0);
// 16576 code
// 65533 が 6967 code
// 二種類のコードの漢字、記号が多数
// 8757 3 ∵ 65506 3 ￢ 3つある

// 0x00-0x80, 0xA1-0xDF までは、1byte
// 0xfd-0xffも1byte?
// 2byte目は 0x40-0fc?
// 

const tbl = [];
let bkn = 0;
let start = 0;
for (let i = 1; i < list.length; i++) {
//for (let i = 1; i < 0x100; i++) {
    const l = list[i];
    console.log(l[0], l[0].toString(16), l[1], l[2])
    /*
    if (l[1] != bkn + 1) {
        //tbl.push()
        console.log(start, i - start);
        start = i;
    }
    */
    bkn = l[1];
}
