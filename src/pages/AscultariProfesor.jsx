import React from "react";
import AvailabilityManager from "../components/ascultari/AvailabilityManager";
import CalendarProfesor from "../components/ascultari/CalendarProfesor";

export default function AscultariProfesor() {
  return (
    <div className="container asc-page">
      <h1>Ascultări (profesor)</h1>
      <div className="asc-grid">
        <div><AvailabilityManager /></div>
        <div><CalendarProfesor /></div>
      </div>
    </div>
  );
}