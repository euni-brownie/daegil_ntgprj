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
import SubjectResult from '../components/subject/SubjectResult.js';
import Button from '../components/button/Button.js';

class FullPage extends Component{


  constructor(props){
    super(props);
    this.state={
      user : this.props.user,
      mode : this.props.mode,
      n_day : null,
      logined : false,
      checked : false,
      total_count : 0,
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
      let _logined = false;
      _logined = (this.props.mode==='guest')? false : true;
      this.setState({mode: this.props.mode, logined:_logined});
    }
    if(prevProps.total_count !== this.props.total_count) {
      this.setState({total_count: this.props.total_count});
    }
    if(prevProps.checked !== this.props.checked) {
      this.setState({checked: this.props.checked});
    }

  }

  loadData = async() => {
    
    if(this.state.user!=null) {
    }
    let calday = this.calDays()
    this.setState({
      user : this.props.user,
      mode : this.props.mode,
      n_day : calday
    });
  }

  checkToday = async() => {

    try{
      const res = await axios.post('/api/insert/today',{
        user_id : this.state.user.id, 
        user_nickname : this.state.user.properties.nickname})

      if(res.data[0]!=null){
        return true;
      }
      else { return false;}
    }catch(e)
    {
      alert(`ERROR! [${e.name}] : ${e.message}`)
      return false;
    }

  }

  buttonState = ()=>{
    return (this.state.mode=="guest")? "btn-enabled" : "btn-confirm"
  }

  calDays = () =>{
    var today = moment()
    let diffDay = today.diff('2020-11-09','days')+1
    let printDay = diffDay;
    if(diffDay%7==0) printDay = diffDay - Math.floor(diffDay/7) -1
    else  printDay = diffDay - Math.floor(diffDay/7)  
    return printDay
  }
  printDays = () =>{
    return (this.state.checked)? `오늘 완료 축하합니다^^` :`${this.state.n_day}일차 시작`
  }

  printCompleteButton=()=>{
    if(this.state.checked) return '축하합니다!';
    else return '오늘 도전 완료하기';
  }

  completeButtonAction = () =>{
    if(!this.state.logined){

    }else{
      if(this.state.checked){
      }else{
        let successed = this.checkToday();
        if(successed){
          this.setState({
            checked : true,
            total_count : this.state.total_count+1
          });
        }
      }
    }
  }


    render(){
      return(
        <ReactFullpage
          //fullpage options
          licenseKey = {'OPEN-SOURCE-GPLV3-LICENSE'}
          scrollingSpeed = {1000}
          sectionsColor={["#282c34", "#9baec8","#353848","#ff5f45", "#0798ec","#282c34"]}
		//sectionsColor={["#eeeeee", "#00adb5","#393e46","#ff5f45", "#222831","#eeeeee"]}
 //         navigation = {true}
          navigationPosition= 'right'
          // navigationTooltips={['시작','1','2','3','4','확인']}
          scrollOverflow= {true}
          slidesNavigation ={true}
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
                <Button classname='btn-confirm' title={this.printDays()}
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
                        title ="2장 성경읽기" 
                        sub="성경 본문"
                        n_day={this.state.n_day} />
                  </div>
                  <div className="slide">
                        <SubjectBibleQuiz
                          title ="2장 성경읽기" 
                          sub="성경 퀴즈"
                          n_day={this.state.n_day}/>
                  </div>
              </div>
    
              <div className="section">
              <SubjectProfile 
                title ="3겹줄 기도" 
                sub="한 사람이면 패하겠거니와 두 사람이면 맞설 수 있나니 세 겹 줄은 쉽게 끊어지지 아니하느니라"
                sub2="- 전4:12 -"
                sub3="오늘은 이분들을 위해 기도 하는건 어때요?" 
                />
              </div>
    
                <div className="section">
                  <SubjectMain
                    title ="4랑실천 happy box" 
                    sub="기한 20/12/11 까지 사랑의 선물박스를 함께 준비해볼까요?" />
                  <Button classname={this.buttonState()} title={this.printCompleteButton()} 
                        onClick={()=>{
                          this.completeButtonAction();
                          if(!this.state.checked) fullpageApi.moveSectionDown()
                          else; }}/>
                </div>

                <div className="section">
                  <SubjectResult
                    sub=""
                    user={this.state.user}
                    total_count ={this.state.total_count}
                    logined={this.state.logined}
                    n_day={this.state.n_day}
                     />
                </div>

                </ReactFullpage.Wrapper>
            </div>);}}
        />

      );
    }
  }

  export default FullPage;