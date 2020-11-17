import React, {Component} from 'react';

class SubjectMain extends Component{

    render(){
      return(
        <header>
                <h1>{this.props.title}</h1>
                {this.props.sub}<br/><br/>
                {this.props.sub2}<br/><br/>
        </header>
      );
    }
  }

  export default SubjectMain;