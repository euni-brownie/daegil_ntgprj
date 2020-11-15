import React, {Component} from 'react';
import "./../../css/App.css"

class Button extends Component{

    render(){
      return(
        <button className={this.props.classname}
                onClick= {function(e){
                      e.preventDefault();
                      this.props.onClick();
                }.bind(this)}>
                  {this.props.title}
        </button>
      );
    }
  }

  export default Button ;