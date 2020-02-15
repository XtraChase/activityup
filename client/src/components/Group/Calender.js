import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
// var moment = require('moment');
import CreateEvent from "./CreateEvent";
import "./calender.scss";

// Resource: https://fullcalendar.io/
const Calendar = props => {
  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = useState(new Date());

  // const calendarComponentRef = React.createRef();

  // { title: "Today", start: new Date() }

  // addModalClose() {
  //   this.setState({ addModalShow: false });
  // }

  // When a day is clicked on the groups calender
  const handleDateClick = ({ date }) => {
    setDate(date); // Updating the value
    setShowModal(true); //Showing modal
  };
  //({
  //   // creates a new array
  //   title: arg.date,
  //   start: arg.date,
  //   allDay: arg.allDay
  // })

  // Clicking on a scheduled event
  const handleEventClick = event => {
    props.parentCallback(event.event._def.extendedProps._id);
  };

  return (
    <div className="demo-app">
      <div className="demo-app-calendar">
        <FullCalendar
          defaultView="dayGridMonth"
          header={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
          }}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          selectable={true}
          // editable={true}
          // droppable={true}
          // ref={this.calendarComponentRef}
          events={props.events || []}
          eventClick={handleEventClick}
          dateClick={handleDateClick} // Click date and filter by date & pass as a callback
        />
        <CreateEvent
          date={date}
          show={showModal}
          onHide={() => setShowModal(false)}
          group={props.groupId}
          populateEvents={props.populateEvents}
        />
      </div>
    </div>
  );
};
export default Calendar;
