import { useState, useRef, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./MyCalendar.css";
import MyInput from "../../input";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

interface MyCalendarProps {
  value: string;
  onChange: (value: string) => void;
}

const MyCalendar: React.FC<MyCalendarProps> = ({ value, onChange }) => {
  const [range, setRange] = useState<[Date | null, Date | null]>([null, null]);
  const [hoveredDate, setHoveredDate] = useState<Date | null>(null); // Дата под курсором
  const [inputValue, setInputValue] = useState<string>("");
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);

  const handleDateChange = (value: Value) => {
    if (Array.isArray(value)) {
      const [start, end] = value as [Date, Date];
      setRange([start, end]);
      setHoveredDate(null); // Сбрасываем `hoveredDate`

      // Форматируем дату в "DD.MM"
      const formatDate = (date: Date) => {
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        return `${day}.${month}`;
      };

      setInputValue(`${formatDate(start)} - ${formatDate(end)}`);
      setIsCalendarOpen(false);
    }
  };

  const handleMouseEnter = (date: Date) => {
    setHoveredDate(date);
  };

  const handleInputClick = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(e.target as Node)
      ) {
        setIsCalendarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <MyInput
        value={inputValue}
        readOnly={true}
        onClick={handleInputClick}
        placeholder="Выбрать..."
      />
      {isCalendarOpen && (
        <div
          ref={calendarRef}
          style={{
            position: "absolute",
            zIndex: 1000,
            top: "40px",
            left: "0",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            border: "1px solid #ddd",
            borderRadius: "8px",
            backgroundColor: "white",
          }}
        >
          <Calendar
            onChange={handleDateChange}
            value={range}
            selectRange={true}
            tileClassName={({ date }) => {
              const today = new Date();

              if (date.toDateString() === today.toDateString()) {
                return "today";
              }

              if (range[0] && !range[1] && hoveredDate) {
                const start = range[0];
                if (date >= start && date <= hoveredDate) {
                  return "in-range";
                }
              }

              if (range[0] && range[1]) {
                if (
                  date.toDateString() === range[0].toDateString() ||
                  date.toDateString() === range[1].toDateString()
                ) {
                  return "selected";
                }
                if (date > range[0] && date < range[1]) {
                  return "in-range";
                }
              }

              return null;
            }}
            tileDisabled={({ date }) => {
              const month = date.getMonth();
              return month < 4 || month > 8; // Отключаем даты с октября по апрель
            }}
            tileContent={({ date }) => (
              <div onMouseEnter={() => handleMouseEnter(date)}></div>
            )}
          />
        </div>
      )}
    </div>
  );
};

export default MyCalendar;
