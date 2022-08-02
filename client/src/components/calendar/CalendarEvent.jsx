import React from 'react'
import ReactDOM from 'react-dom'

const CalendarEvent = ({ event }) => {
  const { title, user } = event;

  return (
    <div>
      <strong>{title}</strong>
      <span> - {user.name}</span>
    </div>
  );
};
export default CalendarEvent;
