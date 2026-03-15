# SJIS

A [SJIS](https://en.wikipedia.org/wiki/Shift_JIS) encoder and decoder in JavaScript (ES modules)

## Demo
```js
import { SJIS } from "https://code4fukui.github.io/SJIS/SJIS.js";

const sjis = SJIS.encode("あいうえお");
console.log(sjis);
const s = SJIS.decode(sjis);
console.log(s);
```

## Features
- SJIS encoding and decoding

## Requirements
- [Deno](https://deno.com/)

## Usage
For Deno:
```sh
deno SJIS.example.js
```

## Test
```sh
deno test --allow-read SJIS.test.js
```

## References
- [JIS](https://github.com/code4fukui/JIS/)
- [EUC](https://github.com/code4fukui/EUC/)

## License
MIT