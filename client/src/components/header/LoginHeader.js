import React, {Component} from 'react';
import axios from 'axios';
import KaKaoLogin from 'react-kakao-login';
import styled from 'styled-components';
import background from './../../css/images/kakao_login_small.png'

class LoginHeader extends Component{

  constructor(props){
    super(props);
    this.state={
      data : 'kakao',
      mode : this.props.mode,
      total_count : 0,
      checked : false
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
        let count = await this.getTotalCount()
        let _checked = await this.getCheckedToday()
        await this.updateCheckinInfo()
          this.setState({
            mode : 'login',
            total_count : count,
            checked : _checked
          });
        this.props.login(this.state.data.profile ,this.state.mode, this.state.total_count, this.state.checked)
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

              let count = await this.getTotalCount()
              let _checked = await this.getCheckedToday()
              this.setState({
                mode : 'login',
                total_count : count,
                checked : _checked
              });
              this.props.login(this.state.data.profile, this.state.mode, this.state.total_count, this.state.checked)
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

  getTotalCount = async() =>{
    
    try{
      const res = await axios.post('/api/get/totalCheckedCount',{user_id : this.state.data.profile.id})
      if(res.data[0]!==null){
        return res.data[0].count;
      }
      else { return 0;}
    }catch(e)
    {
      alert(`ERROR! [${e.name}] : ${e.message}`)
      return 0;
    }
  }
  getCheckedToday = async() =>{
    
    try{
      const res = await axios.post('/api/get/checkedTodayById',{user_id : this.state.data.profile.id})
      if(res.data[0]!==null){
         return (res.data[0].count!==0)? true : false;
      }
      else { return false;}
    }catch(e)
    {
      alert(`ERROR! [${e.name}] : ${e.message}`)
      return false;
    }
  }

  updateCheckinInfo = async() =>{
    
    try{
      const res = await axios.post('/api/update/checkin',{user_id : `'${this.state.data.profile.id}'`})
      if(res.data[0]!==null){
      }
      else {}
    }catch(e)
    {
      alert(`ERROR! [${e.name}] : ${e.message}`)
    }
  }

  getMode = () =>{

    var _info = null; 
    if(this.state.mode==='guest'){
      
      _info= 
      <div className="header-top login-header clearfix" >
          <h1 className="l-right username">
            <KaKaoBtn
            //styled component 통해 style을 입혀 줄 예정 jsKey props -> token으로 수정
                        token={'8c41a3af5fba32fd8edcfe279d7351a0'}
            //카카오에서 할당받은 jsKey를 입력
                        buttonText='카카오 로그인'
            //로그인 버튼의 text를 입력
                        onSuccess={this.responseKaKao}
                        onFail={this.responseFail}
            //성공했을때 불러올 함수로서 fetch해서 localStorage에 저장할 함수를 여기로 저장 
                        getProfile={true}
                        onLogout={console.info}
                        className="btn-kakao"
                        style={{
                          width: "60px",
                          height:"30px",
                          backgroundImage: `url(${background})`,
                          boxShadow : "1px 1px 7px 0.4px #fee500"
                        }}
                      > </KaKaoBtn>
            </h1>
        </div>
      return _info;
    }  
    else if(this.state.mode==='login'){
       _info=<div className="header-top bible-header clearfix" >
               <h1 className="l-right username">
                <span className='one-line' >
                          {this.state.data.profile.properties.nickname}님
                            <span onClick={()=>{this.logout()}}> (로그아웃) </span>
                </span>
               </h1>
             </div>;
      return _info;
    }

  }

  logout = async() =>{
    
    // sessionStorage.clear();
        console.log('logout!');

    this.setState({
      mode : 'guest',
      total_count : 0,
      checked : false
    });
    this.props.login(null, 'guest', 0, false)
  }
    render(){
      return(
        // <div className="header-top clearfix" >
        //   <h1 className="l-right username">
            this.getMode()
        //     </h1>
        // </div>
      );
    }
  }

  const KaKaoBtn = styled(KaKaoLogin)`
      padding : 0;
      width : 65px;
      height: 22px;
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

  // const KaKaoBtn = styled(KaKaoLogin)`
  //     padding : 0;
  //     width : 95px;
  //     height: 22px;
  //     line-height : 44px;
  //     color : #783c00;
  //     background-color : #FFEB00;
  //     border : 1px solid transparent;
  //     border-radius: 3px;
  //     font-size : 16px;
  //     font-weight: bold;
  //     text-align: center;
  //     cursor : pointer;
  //     &:hover{
  //       box-shadow: 0 0px 15px 0 rgba(0,0,0,0.2)
  //     }
  // `

  export default LoginHeader ;