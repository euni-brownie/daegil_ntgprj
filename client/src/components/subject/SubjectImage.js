import React, {Component} from 'react';
import calendar_img from './../../css/images/calendar.png'
class SubjectImage extends Component{



    render(){
      let image = null;
      image =(this.props.image=='calendar')?
      <div className="big-image-wrapper"><br/>
      <img className="big-img"  src={calendar_img} alt=""></img> </div>
      :<br/>;
      

      return(
        <header>
                <h1>{this.props.title}</h1><br/>
                <p className="main sub">{this.props.sub}</p>
                {image}
                <p className="sub3">{this.props.sub3}</p><br/>
                
        </header>
        
      );
    }
  }

  export default SubjectImage ;