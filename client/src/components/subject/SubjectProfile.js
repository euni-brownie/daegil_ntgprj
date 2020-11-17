import React, {Component} from 'react';
import axios from 'axios';
import Profile from './../profile/Profile.js';

class SubjectProfile extends Component{
  constructor(props){
    super(props);
    this.state={
      mode : this.props.mode ,
      users : null,
      user_count : 0,
      userArray : null
    }
  }

  componentDidMount() {
    this.load();
  }

  load = async() =>{
    this.getUsers();
  }

  getUsers = async() =>{
    try{
       const res = await axios.get('/api/get/usersCount')
       var temp_user_count = res.data[0].count
       var tempUsers = new Array();

        if(temp_user_count > 3) {
          
          let nums = [];
          let i = 0;
          
          while(i<3){
            let n  = Math.floor(Math.random()*temp_user_count+1)
            if(!this.checkSameNum(n, nums)){
                nums.push(n)
                i++
            }
          }

          for(var j=0; j<3; j++){
            
            let _rownum = nums[j]

            try{
                const get_user_res = await axios.post('/api/get/userByRownum',{rownum : _rownum})
                tempUsers.push(get_user_res.data[0]);
            }catch(e){
              alert(`ERROR! [${e.name}] : ${e.message}`)
            }
          }
            
            this.setState({
              users : tempUsers,
              user_count : temp_user_count
            })

          }else{

          }
        }catch(e){
          alert(`ERROR! [${e.name}] : ${e.message}`)
        }

  }

  
  checkSameNum = (n, arr) =>{
        for (var i = 0; i < arr.length; i++) {
          if (n === arr[i]) {
            return true;
          }
        }
        return false;
  }
  
  

  hrefState = (num)=>{
    return (this.state.users==null)? 
      "http://k.kakaocdn.net/dn/bv7Av5/btqHYIxg71f/iAFFPt5YaBDH6FhoLalAg1/img_110x110.jpg" : this.state.users[num].user_image_url;
  }
  nickNameState = (num)=>{
    return (this.state.users==null)? 
      "토끼" : this.state.users[num].user_nickname;
  }

    render(){
      return(
        <header>
                <h1>{this.props.title}</h1><br/>
                <p className='sub'>{this.props.sub}</p>
                <p className='sub2'>{this.props.sub2}</p>
                <p className='sub3'>{this.props.sub3}</p><br/>
               <span className="horizontal-box">
                  <Profile href={this.hrefState(0)} nickname={this.nickNameState(0)}></Profile>
                  <Profile href={this.hrefState(1)} nickname={this.nickNameState(1)}></Profile>
                  <Profile href={this.hrefState(2)} nickname={this.nickNameState(2)}></Profile>
                </span>

        </header>

      );
    }
  }

  export default SubjectProfile ;