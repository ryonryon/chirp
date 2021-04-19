import getRelativeDate from "./getRelativeDate";

describe("utils/getRelativeDate(date: Date)", () => {
  const today = new Date();

  describe("when date is this year", () => {
    const yesterday = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - 1
    );
    const thisYearThreeFour = new Date(today.getFullYear(), 3, 4);

    test("It should return 'Today'", () => {
      expect(getRelativeDate(today)).toBe("Today");
    });

    test("It should return 'Yesterday'", () => {
      expect(getRelativeDate(yesterday)).toBe("Yesterday");
    });

    test("It should return this year 3/4 with this format 'MM/DD, Day'", () => {
      expect(getRelativeDate(thisYearThreeFour)).toBe(`3/4, Thu`);
    });
  });

  describe("when date is not this year", () => {
    const lastYearThreeFour = new Date(today.getFullYear() - 1, 3, 4);

    test("It should return last yaer 3/4 with this format 'Day, MM/DD, YYYY'", () => {
      expect(getRelativeDate(lastYearThreeFour)).toBe(`Wed, 3/4, 2020`);
    });
  });
});
