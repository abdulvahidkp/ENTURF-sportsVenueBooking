import React from 'react';

const daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

function SlotTable({ slots }) {
  const slotsByDay = {};

  // create an object with keys for each day of the week and values that are empty arrays
  daysOfWeek.forEach((day) => {
    slotsByDay[day] = [];
  });

  // loop through the slots array and add each slot to its corresponding day
  slots.forEach((slot) => {
    const { day, slots: availableSlots } = slot;
    slotsByDay[day] = availableSlots;
  });

  // create a table of slots for each day
  return (
    <table>
      <thead>
        <tr>
          {daysOfWeek.map((day) => (
            <th key={day}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Object.values(slotsByDay).map((slots, index) => (
          <tr key={index}>
            {daysOfWeek.map((day) => (
              <td key={`${day}-${index}`}>
                {slots.includes(`${day}-${slots}`) ? 'Available' : 'Unavailable'}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SlotTable;