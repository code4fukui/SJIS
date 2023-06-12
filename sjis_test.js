import { SJIS } from "./SJIS.js";

const sjis = await Deno.readFile("../../datacnv/tohoku_epco/data/rirekiinfo01.html");
console.log(SJIS.decode(sjis));
