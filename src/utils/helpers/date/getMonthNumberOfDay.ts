export const getMonthNumberOfDay = (
  monthIndex: number,
  yearNumber: number = new Date().getFullYear()
) => new Date(yearNumber, monthIndex + 1, 0).getDate();
