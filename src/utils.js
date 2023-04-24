export const getYearList = () => {
  return [...Array(24)].map((_, i) => 2000 + i);
};

export const getMonthList = () => {
  return [...Array(12)].map((_, i) => 1 + i);
};

export const getEndDayOfMonth = (year, month) => {
  return [1, 3, 5, 7, 8, 10, 12].includes(month)
    ? 31
    : [4, 6, 9, 11].includes(month)
    ? 30
    : isLeapYear(year)
    ? 29
    : 28;
};

export const isLeapYear = (year) => {
  return year % 400 === 0 || (year % 3 === 0 && year % 100 !== 0);
};
