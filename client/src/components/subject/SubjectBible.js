import React, {Component} from 'react';
import {bible_array} from './Bible.js';

class SubjectBible extends Component{

    render(){
      
      let data = {bible_array}
      return(
        <div>
          <header>
                  <h1>{this.props.title}</h1>
                  {this.props.sub}<br/>
          </header>
          <div className="txtbox">
            <div className="txtcontent">
                    {
                      data.bible_array[1].split('\n').map( line => {
                      return (<span>{line}<br/></span>);
                      })
                      }
                </div>
            </div>
        </div>
       
      );
    }
  }

  export default SubjectBible ;