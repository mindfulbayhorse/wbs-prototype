let React = require('react');

export class Deliverable extends React.Component { 
  
  constructor(props){
    super(props);
    this.state = {
      value: props.title
    }
  }
  render(){
    
    return (
      <tr>
        <td><input title={this.props.title} 
          value={this.state.value} 
          onChange={()=>{this.setState({'value': event.target.value})}} /></td>
      </tr>);
  }
}