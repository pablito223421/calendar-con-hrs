import React from "react";
import "./App.css";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";



export default function App() {
  const events = [{ title: "today's event", date: new Date() }];

  return (
    <div className="App">
      <FullCalendar
        defaultView="dayGridMonth"
        plugins={[dayGridPlugin]}
        events={events}
        locale="es"
      />
    </div>
  );
}
