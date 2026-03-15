# SJIS

[SJIS](https://ja.wikipedia.org/wiki/Shift_JIS)のエンコーダーとデコーダーをJavaScriptで実装したものです。

## 使い方

```js
import { SJIS } from "https://code4fukui.github.io/SJIS/SJIS.js";

const sjis = SJIS.encode("あいうえお");
console.log(sjis);
const s = SJIS.decode(sjis);
console.log(s);
```

## テスト

```sh
deno test --allow-read SJIS.test.js
```

## 参考

- [JIS](https://github.com/code4fukui/JIS/)
- [EUC](https://github.com/code4fukui/EUC/)

## ライセンス

MIT