import React, {Component} from 'react';
import Profile from './../profile/Profile.js';

class SubjectProfile extends Component{
  constructor(props){
    super(props);
    this.state={
      logined : false,
      mode : this.props.mode
    }
  }

    render(){
      return(
        <header>
                <h1>{this.props.title}</h1><br/>
               <p className='sub-strong'>
                 한 사람이면 패하겠거니와 두 사람이면 맞설 수 있나니<br/>
                 세 겹 줄은 쉽게 끊어지지 아니하느니라 (전4:12)</p><br/>
               <p className='sub'> {this.props.sub2}</p>
               <span className="horizontal-box">
                  <Profile href="http://k.kakaocdn.net/dn/bv7Av5/btqHYIxg71f/iAFFPt5YaBDH6FhoLalAg1/img_110x110.jpg" nickname="김정은"></Profile>
                  <Profile href="http://k.kakaocdn.net/dn/bv7Av5/btqHYIxg71f/iAFFPt5YaBDH6FhoLalAg1/img_110x110.jpg" nickname="최소정"></Profile>
                  <Profile href="http://k.kakaocdn.net/dn/bv7Av5/btqHYIxg71f/iAFFPt5YaBDH6FhoLalAg1/img_110x110.jpg" nickname="박지영"></Profile>
                </span>

        </header>

      );
    }
  }

  export default SubjectProfile ;