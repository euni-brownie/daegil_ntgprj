import React, {Component} from 'react';
import Profile from './Profile.js';

class SubjectProfile extends Component{

    render(){
      return(
        <header>
                <h1>{this.props.title}</h1><br/>
               <p> {this.props.sub}</p><br/>
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