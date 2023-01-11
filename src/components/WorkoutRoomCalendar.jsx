import React,{ useState } from "react";
import moment from "moment"
import CalendarHeader from "./Calendar/CalendarHeader";
import CalendarMonitor from "./Calendar/CalendarMonitor";
import CalendarGrid from "./Calendar/CalendaGrid";


// import './App.css';


function WorkoutRoomCalendar() {

  //moment library take calendar days

  moment.updateLocale( 'en', {week: {dow:1}});
  const startDay = moment().startOf('month').startOf('week');
  const endDay = moment().endOf('month').endOf('week');

  const calendar=[];
  const weekSize = 7;
  const calendarWeek=[];

  let day=startDay.clone();

  while(!day.isAfter(endDay)){

    calendar.push(day.clone());
    day=day.add(1,'day');
  }

  for(let i = 0; i<Math.ceil(calendar.length/weekSize); i++){
    calendarWeek[i] = calendar.slice((i*weekSize), (i*weekSize)+weekSize)
  }
//   console.log(calendarWeek);

//  console.log(calendar);
//  console.log(typeof(day));

  return(
    <div>
      <CalendarHeader />
      <CalendarMonitor />
      <CalendarGrid startDay={startDay}/>
    </div>
  )
}

export default WorkoutRoomCalendar;