let React = require('react');

export class Deliverable extends React.Component { 
  render(){
    
    return (
      <tr>
        <td>{this.props.title}</td>
      </tr>);
  }
}