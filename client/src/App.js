import React, { Component } from 'react';
import LoginHeader from './components/header/LoginHeader.js';
import FullPage from './pages/FullPage.js';
import './css/App.css';



class App extends Component{

  constructor(props){
    super(props);
    this.max_content_id = 3; //ui에 영향을 줄 이유가 없는 변수이므로 state값이 아닌 변수로!
    this.state ={
      user : null,
      mode : "guest",
      total_count : 0,
      checked : false
    }

  }

  login = (_data,_mode,_count, _checked) => {
    this.setState({
      user : _data,
      mode : _mode,
      total_count : _count,
      checked : _checked
    });
    
  };

  render(){
    return(
      <div>
            <LoginHeader login={this.login} mode={this.state.mode}></LoginHeader>
            <FullPage user={this.state.user} mode={this.state.mode} total_count={this.state.total_count} checked ={this.state.checked}></FullPage>
           
      </div>
    );
  }
}


export default App;
