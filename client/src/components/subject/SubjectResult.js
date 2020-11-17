import React, {Component} from 'react';

class SubjectResult extends Component{

  constructor(props){
    super(props);
    this.state={
      user : this.props.user,
    }
  }

  componentDidMount() {
    // this.loadData();
  }

    render(){
      return(
        <header>
                <h1>{this.props.title}</h1>
                <p className='sub'>{this.props.sub}</p>

        </header>
      );
    }
  }

  export default SubjectResult;