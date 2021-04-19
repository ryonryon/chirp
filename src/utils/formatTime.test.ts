import formatTime from "./formatTime";

describe("utils/formatTime(date: Date)", () => {
  test("It should return 10:53", () => {
    const tenFiftyThree = new Date(2021, 4, 19, 10, 53, 0);

    expect(formatTime(tenFiftyThree)).toBe("10:53");
  });

  test("It should return 10:00", () => {
    const tenFiftyThree = new Date(2021, 4, 19, 10, 0, 0);

    expect(formatTime(tenFiftyThree)).toBe("10:00");
  });

  test("It should return 9:00", () => {
    const tenFiftyThree = new Date(2021, 4, 19, 9, 0, 0);

    expect(formatTime(tenFiftyThree)).toBe("9:00");
  });
});
