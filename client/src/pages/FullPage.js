import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import axios from 'axios';
import moment from 'moment';
import Subject from '../components/subject/Subject.js';
import SubjectMain from '../components/subject/SubjectMain.js';
import SubjectYoutube from '../components/subject/SubjectYoutube.js';
import SubjectBible from '../components/subject/SubjectBible.js';
import SubjectBibleQuiz from '../components/subject/SubjectBibleQuiz.js';
import SubjectProfile from '../components/subject/SubjectProfile.js';
import Button from '../components/button/Button.js';

class FullPage extends Component{


  constructor(props){
    super(props);
    this.state={
      user : this.props.user,
      mode : this.props.mode,
      n_day : null,
      logined : false,
      checked : false
    }
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    if(prevProps.user !== this.props.user) {
      this.setState({user: this.props.user});
    }
    if(prevProps.mode !== this.props.mode) {
      this.setState({mode: this.props.mode});
    }

  }

  loadData = async() => {
    
    if(this.state.user!=null) {
  }
    this.setState({
      user : this.props.user,
      mode : this.props.mode
    });
  }

  buttonState = ()=>{
    if(this.state.user!= null) console.log(`button State : ${this.state.user.id} ${this.state.mode}`)
    return (this.state.mode=="guest")? "btn-enabled" : "btn-confirm"
  }

  calDays = () =>{
    var today = moment()
    let diffDay = today.diff('2020-11-09','days')+1
    let printDay = diffDay;
    if(diffDay%7==0) printDay = diffDay - Math.floor(diffDay/7) -1
    else  printDay = diffDay - Math.floor(diffDay/7)  
    //checked면 오늘은 완료했어요! 출력해주기~
    return `${printDay}일차 시작!`
   }



    render(){
      return(
        <ReactFullpage
          //fullpage options
          licenseKey = {'OPEN-SOURCE-GPLV3-LICENSE'}
          scrollingSpeed = {1000}
          sectionsColor={["#282c34", "#9baec8","#353848","#ff5f45", "#0798ec","#282c34"]}
          navigation = {true}
          navigationPosition= 'right'
          // navigationTooltips={['시작','1','2','3','4','확인']}
          scrollOverflow= {true}
          normalScrollElements= {'.txtbox'}
  //        controlArrows= {false}
          render={({ state, fullpageApi }) => {
          return (
            <div className="App"> 
            <ReactFullpage.Wrapper>
              <div className="section">
                <SubjectMain
                  title="주님과 거리 좁히기"
                  title2 = "1234 Challenge!"
                  sub="하나님께 가까이 함이 내게 복이라"
                  sub2 = "- 시73:28 -"
                  sub3="11.09 ~ 12.12까지"
                  sub4="(30일간, 월-토 주일 제외)"            
                  />
                <Button classname='btn-confirm' title={this.calDays()}
                        onClick={ () => (this.state.mode=="guest")? fullpageApi.moveSectionDown() : fullpageApi.moveSectionDown()} />
              </div>
    
              <div className="section">
                <SubjectYoutube 
                  title ="1분 말씀묵상" 
                  /> 
              </div>
    
              <div className="section">
                  <div className="slide">
                      <SubjectBible
                        title ="2분 성경읽기" 
                        sub="성경 본문" />
                  </div>
                  <div className="slide">
                        <SubjectBibleQuiz
                          title ="2분 성경읽기" 
                          sub="성경 퀴즈"/>
                  </div>
              </div>
    
              <div className="section">
                  <SubjectProfile 
                    title ="3겹줄 기도" 
                    sub="한 사람이면 패하겠거니와"
                    sub2="두 사람이면 맞설 수 있나니"
                    sub3="세 겹 줄은 쉽게 끊어지지 아니하느니라 "
                    sub4= "- 전4:12 -"
                    sub5="오늘은 이분들을 위해 기도 하는건 어때요?" 
                    mode={this.state.mode} />
              </div>
    
                <div className="section">
                  <SubjectMain
                    title ="4랑실천 happy box" 
                    sub="기한 20/12/11 까지" />
                  <Button classname={this.buttonState()} title="오늘도전 완료하기" 
                        onClick={() => (this.state.mode=="guest")? null : fullpageApi.moveSectionDown()}/>
                </div>

                <div className="section">
                  <SubjectMain
                    title ="15 회 성공!!" 
                    sub="" />
                </div>

                </ReactFullpage.Wrapper>
            </div>);}}
        />

      );
    }
  }

  export default FullPage;