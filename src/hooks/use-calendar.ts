import React from "react";
import { createDate } from "../utils/helpers/date/createDate";
import { createMonth } from "../utils/helpers/date/createMonth";
import { getMonthesNames } from "../utils/helpers/date/getMonthNames";
import { getWeekDaysNames } from "../utils/helpers/date/getWeekDaysNames";

interface UseCalendarParams {
  locale?: string;
  selectedDate: Date;
}

export const useCalendar = ({
  locale = "default",
  selectedDate: date,
}: UseCalendarParams) => {
  const [mode, setMode] = React.useState<"days" | "months" | "years">("days");
  const [selectedDate, setSelectedDay] = React.useState(createDate({ date }));
  const [selectMonth, setSelectedMonth] = React.useState(
    createMonth({
      date: new Date(selectedDate.year, selectedDate.monthIndex),
      locale,
    })
  );

  const [selectedYear, setSelectedYear] = React.useState(selectedDate.year);

  const monthesNames = React.useMemo(() => getMonthesNames(locale), []);
  const weekDaysNames = React.useMemo(() => getWeekDaysNames(locale), []);

  return {};
};
