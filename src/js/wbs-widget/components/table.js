let React = require('react');
import {WBS} from './wbs.js';

export class Table extends React.Component {
  
  render(){
    return (
      <table>
        <WBS />
      </table>
    );
  }
}