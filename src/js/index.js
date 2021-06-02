import 'bootstrap';
import '../sass/input.sass';
import '../scss/input.scss';

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

import {WBS} from '../js/wbs-widget/components/wbs.js';
import {Table} from '../js/wbs-widget/components/table.js';
import {Deliverable} from '../js/wbs-widget/components/deliverable.js';

ReactDOM.render(
  <Table />,
  document.getElementById('root')
);

function testDeliverables(){
  const deliverables = [
    "Content", "Design", "Development"
  ];
  
  return deliverables;
}