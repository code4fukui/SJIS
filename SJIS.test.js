import * as t from "https://deno.land/std/testing/asserts.ts";
import { SJIS } from "./SJIS.js";

Deno.test("simple", () => {
  const org = new TextEncoder().encode("abc");
  const utf8 = SJIS.decode(org);
  const bin = SJIS.encode(utf8);
  t.assertEquals(org, bin);
});

Deno.test("kanji", () => {
  const org = new Uint8Array([0x88, 0x9f]);
  const utf8 = SJIS.decode(org);
  t.assertEquals(utf8, "亜");
  const bin = SJIS.encode(utf8);
  t.assertEquals(org, bin);
});

Deno.test("あいうえお", () => {
  const org = "あいうえおabc";
  const bin = SJIS.encode(org);
  const utf8 = SJIS.decode(bin);
  t.assertEquals(utf8, org);
});

Deno.test("illegal", () => {
  t.assertEquals(SJIS.decode(new Uint8Array([227, 129, 130])), "縺");
  t.assertEquals(SJIS.decode(new Uint8Array([228, 186, 156])), "莠");
});
