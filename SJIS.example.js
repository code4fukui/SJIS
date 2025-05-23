import { SJIS } from "./SJIS.js";

const sjis = SJIS.encode("あいうえお");
console.log(sjis);
const s = SJIS.decode(sjis);
console.log(s);
