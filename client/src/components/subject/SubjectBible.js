import React, {Component} from 'react';
import * as common from '../Common.js';
import {bible_array} from './Bible.js';

class SubjectBible extends Component{

  render(){
    
      let printDay = {common}.common.calDays();    
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