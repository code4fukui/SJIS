# SJIS

A [SJIS](https://ja.wikipedia.org/wiki/Shift_JIS) encoder and decoder in JavaScript (ES modules)

```js
import { SJIS } from "https://code4fukui.github.io/SJIS/SJIS.js";

const sjis = SJIS.encode("あいうえお");
console.log(sjis);
const s = SJIS.decode(sjis);
console.log(s);
```

## privilege

- none

for [Deno](https://deno.com/)
```sh
deno SJIS.example.js
```

## test

```sh
deno test --allow-read SJIS.test.js
```
