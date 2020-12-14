import 'bootstrap';
import '../sass/input.sass';
import '../scss/input.scss';

import datePicker from './calendar/app.js';

let calendar = new datePicker();

calendar.generateMonthCalendar();
console.log('test');
console.log('test2');
console.log(calendar.monthNames[calendar.currentMonth]);