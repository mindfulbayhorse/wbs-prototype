let React = require('react');

import {Deliverable} from './deliverable.js';



export class WBS extends React.Component {
  
  constructor(props) {
    super(props);
    this.rows = testDeliverables();
  }
  
  renderDeliverable(title){
    return (<Deliverable title={title} />);
  }
  
  renderDeliverableList(){

    let bodyRows = this.rows.map(element => 
          this.renderDeliverable(element)
        );
  
    return (
      <tbody>{bodyRows}</tbody>
      );
  }
  
  render() {
    
    return this.renderDeliverableList();
  }
}