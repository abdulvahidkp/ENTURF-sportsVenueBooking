import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CalendarComponent({ onDateSelect }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const today = new Date();
  const maxDate = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];
    

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onDateSelect(date);
  };

  return <Calendar onChange={handleDateChange} value={selectedDate} minDate={new Date()} maxDate={maxDate} />;
}

export default CalendarComponent;