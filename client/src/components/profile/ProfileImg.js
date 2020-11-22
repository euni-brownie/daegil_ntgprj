import React, {Component} from 'react';
import defaultImg from './../../css/images/default.jpg' // relative path to image 
import rabbitImg from './../../css/images/rabbit.jpg'
import rakunImg from './../../css/images/rakun.jpg'
import birdImg from './../../css/images/bird.jpg'
import belugaImg from './../../css/images/beluga.jpg'
import chickImg from './../../css/images/chick.jpg'
import turtleImg from './../../css/images/turtle.jpg'
class ProfileImg extends Component{



  setImage=()=>{
    const url = this.props.href;
    if(url==='undefined') return defaultImg;
    // else if(url==='rabbit') return rabbitImg;
    // else if(url==='rakun') return rakunImg;
    // else if(url==='bird') return birdImg;
    // else if(url==='beluga') return belugaImg;
    // else if(url==='chick') return chickImg;
    // else if(url==='turtle') return turtleImg;
    else return this.props.href;
  }

  
  render(){

    
      return(
        <img className="profile-img"  src={this.setImage()} alt=""></img>
      );
    }
  }

  export default ProfileImg ;