import React, {Component} from 'react';
import moment from 'moment';
import {bible_quiz_array} from './BibleQuiz.js';
class SubjectBibleQuiz extends Component{

    render(){
      var today = moment()
      let diffDay = today.diff('2020-11-09','days')+1
      let printDay = diffDay;
      if(diffDay%7===0) printDay = diffDay - Math.floor(diffDay/7) -1
      else  printDay = diffDay - Math.floor(diffDay/7)  
    
      let data = {bible_quiz_array};

      const _txt = data.bible_quiz_array[printDay];

      return(
        <div>
          <header>
                  <h1>{this.props.title}</h1>
                  {this.props.sub}<br/>
          </header>
          <div className="txtbox">
            <div className="txtcontent quiz">
                    {
                         _txt.split('\n').map( line => {
                          return (<span>{line}<br/></span>);
                        })
                      }
                </div>
            </div>
        </div>
       
      );
  }
}

  export default SubjectBibleQuiz ;