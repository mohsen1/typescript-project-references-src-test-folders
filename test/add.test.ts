import { add } from "../src/add";

describe("my module", () => {
  it("adds numbers", () => {
    expect(add(1, 2)).toEqual(3);
  });
});
