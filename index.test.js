import { test, mock, describe, it, before, after } from "node:test";
import assert from "assert";

import {
  example,
  asyncExample,
  asyncExampleRejects,
  asyncExampleThrows,
  mockExample,
} from "./index.js";

test("simple test", (t) => {
  const result = example();
  t.test("simple", (t) => {
    assert.strictEqual(result, "Hello World");
  });
});

describe("examples", () => {
  it("example", () => {
    const result = example();
    assert.strictEqual(result, "Hello World");
  });

  it("async example", async () => {
    const res = await asyncExample();
    assert.strictEqual(res, "Finished");
  });

  it("async example rejects", async () => {
    await assert.rejects(asyncExampleRejects, "Example rejected promise.");
  });

  it("async example throws", () => {
    assert.throws(asyncExampleThrows, {
      name: "Error",
      message: "Failed",
    });
  });

  it("mock example", async () => {
    mock.method(global, "fetch", () => {
      return {
        json: async () => ({
          title: "test",
        }),
        status: 200,
      };
    });

    const res = await mockExample();
    assert.strictEqual(res.title, "test");
  });
});
