import React, {Component} from 'react';

class SubjectMain extends Component{

    render(){
      return(
        <header>
                <h1>{this.props.title}</h1>
                <h2>{this.props.title2}</h2>
                <p className='main sub'>{this.props.sub}</p>
                <p className='main sub2'>{this.props.sub2}</p><br/>
                <p className='sub3'>{this.props.sub3}</p>
                <p className='sub4'>{this.props.sub4}</p><br/>
        </header>
      );
    }
  }

  export default SubjectMain;