import React, {Component} from 'react';
import moment from 'moment';
import {bible_array} from './Bible.js';

class SubjectBible extends Component{

  render(){
    
      var today = moment()
      let diffDay = today.diff('2020-11-09','days')+1
      let printDay = diffDay;
      if(diffDay%7===0) printDay = diffDay - Math.floor(diffDay/7)
      else  printDay = diffDay - Math.floor(diffDay/7)  
    
      let data = {bible_array};
      let first_num = printDay*2 - 1;
      let second_num = printDay*2;

      const _txt = data.bible_array[first_num] + data.bible_array[second_num];


      return(
        <div>
          <header>
                  <h1>{this.props.title}</h1>
                  {this.props.sub}<br/>

          </header>
            <div className="txtcontent">
                          {
                              _txt.split('\n').map( (line,idx) => {
                                return (<span id={idx} key={idx}>{line}<br/></span>);
                              })
                            }
                      </div>
        </div>
       
      );
    }
  }

  export default SubjectBible ;