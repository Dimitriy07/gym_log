import React from "react";

function CalendarGrid(props) {
  const day = props.startDay.clone().subtract(1, "day");
  const totalDays = 42;
  const daysArray = [...Array(42)].map(() => day.add(1, "day").clone());

  return (
    <div className="calendar-grid">
      {daysArray.map((dayItem) => (
        <div className="calendar-cell-wrapper" key={dayItem.format("DDMMYYYY")}>
          <div className="calendar-rowin-cell">
            <div className="calendar-day-wrapper">{dayItem.format("D")}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CalendarGrid;
