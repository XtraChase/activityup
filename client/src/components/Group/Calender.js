import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import CreateEvent from "./CreateEvent";
import "./calender.scss";

// Resource: https://fullcalendar.io/
export default class DemoApp extends React.Component {
  calendarComponentRef = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      calendarWeekends: true,
      calendarEvents: [
        // initial event data
        { title: "Event Now", start: new Date() }
      ],
      addModalShow: false
    };
  }

  addModalClose() {
    this.setState({ addModalShow: false });
  }

  render() {
    return (
      <div className="demo-app">
        {/* <div className="demo-app-top">
          <button onClick={this.toggleWeekends}>toggle weekends</button>&nbsp;
          <button onClick={this.gotoPast}>go to a date in the past</button>
          &nbsp; (also, click a date/time to add an event)
        </div> */}
        <div className="demo-app-calendar">
          <FullCalendar
            defaultView="dayGridMonth"
            header={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
            }}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            ref={this.calendarComponentRef}
            weekends={this.state.calendarWeekends}
            events={this.state.calendarEvents}
            dateClick={this.handleDateClick}
          />
          <CreateEvent
            show={this.state.addModalShow}
            onHide={() => this.addModalClose()}
            style={{ background: "none" }}
          />
        </div>
      </div>
    );
  }

  // toggleWeekends = () => {
  //   this.setState({
  //     // update a property
  //     calendarWeekends: !this.state.calendarWeekends
  //   });
  // };

  // gotoPast = () => {
  //   let calendarApi = this.calendarComponentRef.current.getApi();
  //   calendarApi.gotoDate("2000-01-01"); // call a method on the Calendar object
  // };

  // DONE When a day is clicked on the groups calender a modal pops up | SEE ./CreateEvent.js for modal
  handleDateClick = arg => {
    this.setState({

      //triggers modal on date click
      addModalShow: true,

      // add new event data
      calendarEvents: this.state.calendarEvents.concat({
        // creates a new array
        title: "New Event",
        start: arg.date,
        allDay: arg.allDay
      })
    });
  };
}
