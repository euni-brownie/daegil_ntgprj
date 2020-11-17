import React, {Component} from 'react';
import axios from 'axios';
import KaKaoLogin from 'react-kakao-login';
import { IconContext } from "react-icons";
import { BiLogIn } from 'react-icons/bi';
import styled from 'styled-components';


class LoginHeader extends Component{

  constructor(props){
    super(props);
    this.state={
      data : 'kakao',
      mode : this.props.mode
    }
  }
  responseKaKao = async(res) =>{

    this.setState({
      data : res,
    })

    const k_user_id = this.state.data.profile.id
    const k_user_nickname =this.state.data.profile.properties.nickname
    const k_user_image_url = this.state.data.profile.properties.thumbnail_image
    const k_access_token = this.state.data.response.access_token

    try {
      const response = await axios.post('/api/get/existUser', {user_id : res.profile.id})

      if (response.data[0].count > 0) {
        alert('로그인되었습니다')
        this.setState({
          mode : 'login'
        });
        this.props.login(this.state.data.profile ,this.state.mode)
      } else {
        try {
          const signup_response =await axios.post('/api/insert/user', 
                                                    {
                                                      user_id : k_user_id,
                                                      user_nickname : k_user_nickname,
                                                      user_image_url : k_user_image_url,
                                                      access_token : k_access_token
                                                      })
                           
                                                      
          if(signup_response.status===200){

              this.setState({
                mode : 'login'
              });
              this.props.login(this.state.data.profile, this.state.mode)
          }
        }
        catch (err) {
          sessionStorage.clear()
          alert(err);
        }
      }
    }
    catch (err) {
      sessionStorage.clear()
      alert(err);
    }
    this.getMode();
  }

  responseFail = (err) => {
    alert(err);
  }


  getMode(){

    var _info = null; 
    if(this.state.mode==='guest'){
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
       _info= <span className='one-line'>
                  {this.state.data.profile.properties.nickname}님 
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
          <h1 className="l-right username">{this.getMode()}</h1>
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