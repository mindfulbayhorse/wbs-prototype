import 'bootstrap';
import '../sass/input.sass';
import '../sass/input.scss';

import datePicker from './DatePicker.js';

let calendar = new datePicker();

calendar.generateMonthCalendar();

console.log(calendar.monthNames[calendar.currentMonth]);