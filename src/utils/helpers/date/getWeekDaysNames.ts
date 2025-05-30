import { createDate } from "./createDate";

export const getWeekDaysNames = (locale: string = "default") => {
  const weekDaysNames: {
    day: ReturnType<typeof createDate>["day"];
    dayShort: ReturnType<typeof createDate>["dayShort"];
  }[] = Array.from({ length: 7 });

  const d = new Date();

  weekDaysNames.forEach((_, i) => {
    const { day, dayNumberInWeek, dayShort } = createDate({
      locale,
      date: new Date(d.getFullYear(), d.getMonth(), d.getDate() + i),
    });
    weekDaysNames[dayNumberInWeek - 1] = { day, dayShort };
  });

  return weekDaysNames;
};
