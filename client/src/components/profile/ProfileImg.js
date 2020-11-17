import React, {Component} from 'react';

class ProfileImg extends Component{

  
  render(){
      return(
        <img className="profile-img"  src={this.props.href} alt=""></img>
      );
    }
  }

  export default ProfileImg ;