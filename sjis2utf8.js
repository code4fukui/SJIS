import { CSV } from "https://code4sabae.github.io/js/CSV.js";

const csv = CSV.toJSON(CSV.decode(await Deno.readTextFile("sjis2utf8.csv")));
const tbl = {};
for (const l of csv) {
	tbl[l.sjis] = String.fromCharCode(l.utf8);
}
const sjis2utf8 = (sjis) => {
	const ss = [];
	let n = 0;
	const len = sjis.length;
	while (n < len) {
		console.log(n, len);
		const m = sjis[n++];
		const c = tbl[m];
		if (c) {
			ss.push(c);
			continue;
		}
		const m2 = (m << 8) | sjis[n++];
		const c2 = tbl[m2];
		if (c2) {
			ss.push(c2);
			continue;
		}
		n--;
	}
	return ss.join("");
}

const sjis = await Deno.readFile("../../datacnv/tohoku_epco/data/rirekiinfo01.html");
console.log(sjis, sjis2utf8(sjis))
