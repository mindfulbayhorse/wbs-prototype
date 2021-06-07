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

import {WBS} from '../js/wbs-widget/components/wbs.js';
/*import {Deliverable} from '../js/wbs-widget/components/deliverable.js';

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
}*/

const deliverables = [
        {id: '1', title: "Content"},
        {id: '2', title: "Design"},
        {id: '3', title: "Development"},
    ];
    
/*const deliverables = [
    "Content", "Design", "Development"
  ];*/
  
ReactDOM.render(
  <table><WBS wbs = {deliverables}/></table>,
  document.getElementById('root')
);