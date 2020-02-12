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
        { title: "Today", start: new Date() }
      ],
      addModalShow: false,
      date: ""
    };
  }

  addModalClose() {
    this.setState({ addModalShow: false });
  }

  // When a day is clicked on the groups calender a modal pops up
  handleDateClick = arg => {
    //  TODO Call callback for filtering activites by date callback(date)
    this.setState({
      //sets state of date to that of date clicked
      date: arg.dateStr,
      //triggers modal on date click
      addModalShow: true
    });
    console.log(this.state.date);
  };

  render() {
    //stores date from calendar click to be passed as prop to modal - modal now has access to date
    let date = this.state.date;
    // console.log(date);
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
            dateClick={this.handleDateClick} // Click date and filter by date & pass as a callback
          />
          <CreateEvent
            date={date}
            show={this.state.addModalShow}
            onHide={() => this.addModalClose()}
            style={{ background: "none" }}
            group={this.props.group}
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
}
