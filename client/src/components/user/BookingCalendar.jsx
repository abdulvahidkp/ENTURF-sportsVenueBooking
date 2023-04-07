import React, { useEffect, useState } from "react";
import { addDays } from "date-fns";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useDispatch, useSelector } from "react-redux";
import { setSlots } from "../../redux/features/bookingSlice";
import axios from "../../api/axios";

function BookingCalendar({ slots, turfId }) {
  const [date, setDate] = useState(new Date());
  const [day, setDay] = useState(date.getDay());
  const [currentHour, setCurrentHour] = useState(date.getHours());
  const [bookedslot,setBookedslot] = useState([])
  const currentDate = new Date();

  const dispatch = useDispatch();

  const getBookedSlots = async (turfId,date) => {
    const slotDate = `${date.getDate()},${date.toLocaleString("default", { month: "long" })},${date.getFullYear()}`
    const {data}  = await axios.post('/bookedSlot',{turfId,slotDate})
    setBookedslot(data)
  }

  useEffect(()=>{
    getBookedSlots(turfId,date)
  },[date])

  function handleSelect(date) {
    setDate(date);
    setDay(date.getDay());
  }

  const selectedSlots = useSelector((state) => state.booking);

  function handleSlot(slot) {
    if(bookedslot.find(per=>per.slotTime===slot)) return
    if (date.getFullYear() === currentDate.getFullYear() && date.getMonth() === currentDate.getMonth() && date.getDate() === currentDate.getDate() && parseInt(slot.substr(0, 2)) < currentHour) return;
    const dayy = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    dispatch(setSlots({ date: `${dayy},${month},${year}`, slot }));
  }

  return (
    <div className="flex flex-col justify-center lg:flex-row">
      <div className="flex justify-center">
      <Calendar minDate={new Date()} maxDate={addDays(new Date(), 6)} date={date} showMonthAndYearPickers={false} onChange={handleSelect} color="#00000" />
      </div>
      <div className="flex flex-wrap mx-auto items-center">
        {slots[day].slots.length ? (
          slots[day].slots.map((slot,index) => (
            <div key={index}
              className={`p-0.5  ${
                bookedslot.find(per=>per.slotTime===slot) ? "bg-red-600 cursor-not-allowed":
                date.getFullYear() === currentDate.getFullYear() && date.getMonth() === currentDate.getMonth() && date.getDate() === currentDate.getDate() && parseInt(slot.substr(0, 2)) <= currentHour
                  ? "bg-slate-200 cursor-not-allowed"
                  : selectedSlots.date === `${date.getDate()},${date.toLocaleString("default", { month: "long" })},${date.getFullYear()}` && selectedSlots.slot === slot ?
                  "bg-green-400":
                  "hover:bg-slate-200 bg-slate-50"
              } cursor-pointer border m-1 font-light text-xs rounded`}
              onClick={() =>

                bookedslot.find(per=>per.slotTime===slot) ? "":
                date.getFullYear() === currentDate.getFullYear() && date.getMonth() === currentDate.getMonth() && date.getDate() === currentDate.getDate()
                  ? parseInt(slot.substr(0, 2)) <= currentHour
                    ? ""
                    : handleSlot(slot)
                  : handleSlot(slot)
              }
            >
              {slot}
            </div>
          ))
        ) : (
          <h1>No slots available on this day</h1>
        )}
      </div>
    </div>
  );
}

export default BookingCalendar;
