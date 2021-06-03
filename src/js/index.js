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

//import {Table} from '../js/wbs-widget/components/table.js';
import {Deliverable} from '../js/wbs-widget/components/deliverable.js';

function WBS(props){
  
  const deliverables = props.wbs;
  
  const listItems = deliverables.map(element =>
    { return (<Deliverable title={element} />); }
  );
  return (
    <tbody>
      {listItems}
    </tbody>
  );
}

const deliverables = [
    "Content", "Design", "Development"
  ];
  
ReactDOM.render(
  <table><WBS wbs = {deliverables}/></table>,
  document.getElementById('root')
);