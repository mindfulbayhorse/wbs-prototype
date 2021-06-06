let React = require('react');

export class Deliverable extends React.Component { 
  
  constructor(props){
    super(props);
    this.state = {
      'title': ''
    }
  }
  render(){
    
    return (
      <tr>
        <td><input title={this.props.title} 
          value={this.props.title} 
          onChange={()=>{this.setState({'title': event.target.value})}} /></td>
      </tr>);
  }
}