import React, {Component} from 'react';
import { IconContext } from "react-icons";
import { BiLogIn } from 'react-icons/bi';
import Button from './Button.js'
import "./../css/App.css"

class LoginHeader extends Component{

  getMode(){

    var _info = null; 
    if(this.props.mode==='guest')  _info= <Button title= '로그인하세요'></Button>
    else if(this.props.mode==='login'){
       _info= <span className='one-line'>
                  {this.username}님 
                  <IconContext.Provider 
                    value={{ color: "lightgray",
                             className: "global-class-name" ,
                             size:"1.5em",}}
                  ><BiLogIn/>
              </IconContext.Provider></span>;
      return _info;
    }

  }
    render(){
      return(
        <div className="header-top clearfix" >
          <h1 class="l-right username">{this.getMode()}</h1>
        </div>
      );
    }
  }

  export default LoginHeader ;