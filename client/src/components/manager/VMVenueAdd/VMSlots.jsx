import React from "react";
const availableSlots = [
  { start: "00:00", end: "01:00" },
  { start: "01:00", end: "02:00" },
  { start: "02:00", end: "03:00" },
  { start: "03:00", end: "04:00" },
  { start: "04:00", end: "05:00" },
  { start: "05:00", end: "06:00" },
  { start: "06:00", end: "07:00" },
  { start: "07:00", end: "08:00" },
  { start: "08:00", end: "09:00" },
  { start: "09:00", end: "10:00" },
  { start: "10:00", end: "11:00" },
  { start: "11:00", end: "12:00" },
  { start: "12:00", end: "13:00" },
  { start: "13:00", end: "14:00" },
  { start: "14:00", end: "15:00" },
  { start: "15:00", end: "16:00" },
  { start: "16:00", end: "17:00" },
  { start: "17:00", end: "18:00" },
  { start: "18:00", end: "19:00" },
  { start: "19:00", end: "20:00" },
  { start: "20:00", end: "21:00" },
  { start: "21:00", end: "22:00" },
  { start: "22:00", end: "23:00" },
  { start: "23:00", end: "24:00" },
];

function VMSlots({ formik, day }) {
  return (
  <div className="my-3 overflow-x-auto whitespace-nowrap ">
    <div className="inline-flex space-x-4">
      {availableSlots.map((slot) => (
        <label key={`${slot.start}-${slot.end}`} className="flex items-center space-x-2 bg-gray-100 rounded-lg p-4">
          <input
            type="checkbox"
            name={day}
            value={`${slot.start}-${slot.end}`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            checked={formik.values[day].includes(`${slot.start}-${slot.end}`)}
            className="form-checkbox h-4 w-4 text-indigo-600"
          />
          <span className="text-gray-700">{`${slot.start} - ${slot.end}`}</span>
        </label>
      ))}
    </div>
  </div>
  )
}

export default VMSlots;
