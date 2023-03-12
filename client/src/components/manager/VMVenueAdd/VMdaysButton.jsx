import React, { useState } from "react";
import VMSlots from "./VMSlots";
const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

function VMdaysButton({ formik }) {
  const [slotDay, setSlotDay] = useState("monday");
  return (
    <div className="">
      {days.map((day, key) => (
        <VMdayButton formik={formik} day={day} key={key} setSlotDay={setSlotDay} slotDay={slotDay}/>
      ))}
    </div>
  );
}

function VMdayButton({ formik, day, setSlotDay, slotDay }) {
  return (
    <div>
      <div>
        <button className={`bg-gray-100 border hover:opacity-80 hover:shadow-md duration-300 my-2 p-2 ${slotDay === day && 'bg-gray-300'} rounded`} type="button" onClick={() => setSlotDay(day)}>
          {day}
        </button>
      </div>
      <div>{slotDay === day && <VMSlots formik={formik} day={day} />}</div>
    </div>
  );
}

export default VMdaysButton;
