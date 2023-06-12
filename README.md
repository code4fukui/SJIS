# SJIS

## Usage

```javascript
import { SJIS } from "https://code4fukui.github.io/SJIS/SJIS.js";

const sjis = SJIS.encode("あいうえお");
console.log(sjis);
const s = SJIS.decode(sjis);
console.log(s);
```

## Test

```sh
deno test SJIS.test.js
```
