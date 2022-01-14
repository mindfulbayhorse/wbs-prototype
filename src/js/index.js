import '../scss/input.scss';
import '../sass/input.sass';



let React = require('react');
let ReactDOM = require('react-dom');

import {dayMonth, Calendar} from '../calendar/app.js';

let datePicker = new Calendar();
datePicker
  .generateMonthCalendar(dayMonth)
  .drawMonth();

let calendars = document.querySelectorAll(".calendar");

for (let calendar of calendars) {
  calendar.appendChild(datePicker.widget);
}

/*
React models example

import {WBS} from '../js/wbs-widget/components/wbs.js';

const deliverables = [
        {id: '1', title: "Content"},
        {id: '2', title: "Design"},
        {id: '3', title: "Development"},
    ];

  
ReactDOM.render(
  <table><WBS wbs = {deliverables}/></table>,
  document.getElementById('root')
);
*/