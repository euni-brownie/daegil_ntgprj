import React, {Component} from 'react';
import ProfileImg from "./ProfileImg.js";
import "./../css/App.css"

class Profile extends Component{

    render(){
      return(
        <div className="profile-one">
            <div className="box">
              <ProfileImg href={this.props.href}></ProfileImg>
            </div>
           <p className="profile-nickname"> {this.props.nickname}님 </p>
        </div>
      );
    }
  }

  export default Profile ;