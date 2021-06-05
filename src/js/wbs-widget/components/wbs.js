let React = require('react');

import {Deliverable} from './deliverable.js';

export class WBS extends React.Component {
  
  constructor(props) {
    super(props);
    this.deliverables = props.wbs;
    console.log(this.deliverables);
  }
  
  renderDeliverableList(){

    const listItems = this.deliverables.map((element) =>
      { return (<Deliverable key={element.id} title={element.title} />); }
    );
    return (
      <tbody>
        {listItems}
      </tbody>
    );
  }
  
  render() {
    
    return this.renderDeliverableList();
  }
}