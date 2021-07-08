// import logo from './logo.svg';
// import './App.css';
import React from "react";
import moment from "moment";

function Assignment17() {
  const data = [
    {
      id: 1,
      shift: "Shift 1",
      startTime: "10:00:00",
      endTime: "18:00:00",
      fromTime: "10:00:00 am",
      toTime: "06:00:00 pm",
    },
    {
      id: 2,
      shift: "Shift 2",
      startTime: "02:00:00",
      endTime: "10:00:00",
      fromTime: "02:00:00 am",
      toTime: "10:00:00 am",
    },
    {
      id: 3,
      shift: "Shift 3",
      startTime: "18:00:00",
      endTime: "02:00:00",
      fromTime: "06:00:00 pm",
      toTime: "02:00:00 am",
    },
  ];
  var format = "hh:mm:ss";
  var time = moment("21:30:00", format);

  return (
    <>
      // Test: "00:02:00", "01:30:00", "01:00:00", "05:05:00" // Moment.js
      {data.map((item) => {
        var beforeTime = moment(item.startTime, format);
        var afterTime = moment(item.endTime, format);
        if (time.isBetween(beforeTime, afterTime)) {
          console.log("is between in = " + item.id);
        } else {
          console.log("is not between in = " + item.id);
        }
      })}
    </>
  );
}

export default Assignment17;
