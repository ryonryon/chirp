import getFormatDay from "./getFormatDay";

describe("utils/getFormatDay(day: number)", () => {
  test("It should return 'Sun'", () => {
    expect(getFormatDay(0)).toBe("Sun");
  });

  test("It should return 'Mon'", () => {
    expect(getFormatDay(1)).toBe("Mon");
  });

  test("It should return 'Tue'", () => {
    expect(getFormatDay(2)).toBe("Tue");
  });

  test("It should return 'Wed'", () => {
    expect(getFormatDay(3)).toBe("Wed");
  });

  test("It should return 'Thu'", () => {
    expect(getFormatDay(4)).toBe("Thu");
  });

  test("It should return 'Fri'", () => {
    expect(getFormatDay(5)).toBe("Fri");
  });

  test("It should return 'Sat'", () => {
    expect(getFormatDay(6)).toBe("Sat");
  });

  test("It should throw error", () => {
    expect(() => {
      getFormatDay(10);
    }).toThrow("paramater must be 0 to 6");
  });
});
