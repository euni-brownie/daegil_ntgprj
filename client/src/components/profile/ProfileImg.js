import React, {Component} from 'react';
import defaultImg from './../../css/images/default.jpg' // relative path to image 
class ProfileImg extends Component{



  setImage=()=>{
    const url = this.props.href;

    if(url==='undefined') return `{defaultImg}`;
    else return `{this.props.href}`;
  }

  
  render(){

    
      return(
        <img className="profile-img"  src={this.setImage()} alt=""></img>
      );
    }
  }

  export default ProfileImg ;