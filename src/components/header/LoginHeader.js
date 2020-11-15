import React, {Component} from 'react';
import KaKaoLogin from 'react-kakao-login';
import { IconContext } from "react-icons";
import { BiLogIn } from 'react-icons/bi';
import styled from 'styled-components';


class LoginHeader extends Component{

  constructor(props){
    super(props);
    this.state={
      data : 'kakao',
      nickname : 'guest',
      mode : this.props.mode
    }
  }

  responseKaKao = (res) =>{
    console.log(res);
    this.setState({
      data : res,
      nickname : res.profile.properties.nickname,
      mode : 'login'
    })
    this.getMode();
    alert(JSON.stringify(this.state.data));

  }

  responseFail = (err) => {
    alert(err);
  }


  getMode(){

    var _info = null; 
    if(this.state.mode==='guest'){
      console.log("guest")
      _info= <KaKaoBtn
      //styled component 통해 style을 입혀 줄 예정 
                  jsKey={'8c41a3af5fba32fd8edcfe279d7351a0'}
      //카카오에서 할당받은 jsKey를 입력
                  buttonText='카카오 로그인'
      //로그인 버튼의 text를 입력
                  onSuccess={this.responseKaKao}
                  onFailure={this.responseFail}
      //성공했을때 불러올 함수로서 fetch해서 localStorage에 저장할 함수를 여기로 저장 
                  getProfile={true}
                />
      return _info;
    }  
    else if(this.state.mode==='login'){
      console.log("login")
       _info= <span className='one-line'>
                  {this.state.nickname}님 
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

  const KaKaoBtn = styled(KaKaoLogin)`
      padding : 0;
      width : 190px;
      height: 44px;
      line-height : 44px;
      color : #783c00;
      background-color : #FFEB00;
      border : 1px solid transparent;
      border-radius: 3px;
      font-size : 16px;
      font-weight: bold;
      text-align: center;
      cursor : pointer;
      &:hover{
        box-shadow: 0 0px 15px 0 rgba(0,0,0,0.2)
      }

  
  `

  export default LoginHeader ;