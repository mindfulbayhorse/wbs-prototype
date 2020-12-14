import 'bootstrap';
import '../sass/input.sass';
import '../scss/input.scss';

import {dayMonth, Calendar} from '../calendar/app.js';

let datePicker = new Calendar();
datePicker
  .generateMonthCalendar(dayMonth)
  .drawMonth();

let calendars = document.querySelectorAll(".calendar");

for (let calendar of calendars) {
  calendar.appendChild(datePicker.widget);
}