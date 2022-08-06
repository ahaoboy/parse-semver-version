import { it, assert, describe } from "vitest";
import parse, { type Version } from "../src";

const data: [string, Version][] = [
  ["v1.2.3", ["1", "2", "3", undefined, undefined, undefined]],
  ["v1.2.3-beta.0", ["1", "2", "3", "beta", "0", "beta.0"]],
  ["V1.2.3", ["1", "2", "3", undefined, undefined, undefined]],
  ["2.0.0-alpha", ["2", "0", "0", "alpha", undefined, "alpha"]],
  [
    "18.3.0-next-ca990e9a7-20220804",
    [
      "18",
      "3",
      "0",
      "next-ca990e9a7-20220804",
      undefined,
      "next-ca990e9a7-20220804",
    ],
  ],
];

describe("test parse", () => {
  it("test data", () => {
    for (const [s, list] of data) {
      assert.deepEqual(list, parse(s));
    }
  });
});
