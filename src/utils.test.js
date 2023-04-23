import {
    getEndDayOfMonth,
    getMonthList,
    getYearList,
    isLeapYear,
} from "./utils";

describe("isLeapYear", () => {
    test("year 2000 is leap year", () => {
        expect(isLeapYear(2000)).toBe(true);
    });
    test("year 2001 is not leap year", () => {
        expect(isLeapYear(2001)).toBe(false);
    });
    test("year 2000 is leap year", () => {
        expect(isLeapYear(2004)).toBe(true);
    });
});

describe("getYearList", () => {
    test("2000", () => {
        expect(getYearList()).toContain(2000);
    });
    test("2023", () => {
        expect(getYearList()).toContain(2023);
    });
    test("1999", () => {
        expect(getYearList()).not.toContain(1999);
    });
});

describe("getMonthList", () => {
    test("1", () => {
        expect(getMonthList()).toContain(1);
    });
    test("12", () => {
        expect(getMonthList()).toContain(12);
    });
    test("13", () => {
        expect(getMonthList()).not.toContain(13);
    });
});

describe("getEndDayOfMonth", () => {
    test("2000-01", () => {
        expect(getEndDayOfMonth(2000, 1)).toBe(31);
    });
    test("2000-02", () => {
        expect(getEndDayOfMonth(2000, 2)).toBe(29);
    });
    test("2000-04", () => {
        expect(getEndDayOfMonth(2000, 4)).toBe(30);
    });
    test("2001-02", () => {
        expect(getEndDayOfMonth(2001, 2)).toBe(28);
    });
});
