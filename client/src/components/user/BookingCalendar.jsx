import React, { useEffect, useState } from "react";
import { addDays } from "date-fns";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

function  BookingCalendar({ slots }) {
  const [date, setDate] = useState(new Date());
  const [day,setDay] = useState(date.getDay());


  function handleSelect(date) {
    setDate(date);
    setDay(date.getDay())
    const options = { weekday: "long" };
    const day = date.toLocaleDateString("en-US", options).toLowerCase();
    console.log(day);
  }

  return (
    <div className="flex">
      <Calendar minDate={new Date()} maxDate={addDays(new Date(), 6)} date={date} showMonthAndYearPickers={false} onChange={handleSelect} color="#00000" />
      <div className="flex ">
        {
          slots[day].slots.map((slot=>(
            <div className="p-1 ">{slot}</div>
          )))
        }
      </div>
    </div>
  );
}

export default BookingCalendar;
