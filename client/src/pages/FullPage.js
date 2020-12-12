import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import axios from 'axios';
import SubjectMain from '../components/subject/SubjectMain.js';
import SubjectImage from '../components/subject/SubjectImage.js';
import SubjectYoutube from '../components/subject/SubjectYoutube.js';
import SubjectBible from '../components/subject/SubjectBible.js';
import SubjectBibleQuiz from '../components/subject/SubjectBibleQuiz.js';
import SubjectProfile from '../components/subject/SubjectProfile.js';
import SubjectResult from '../components/subject/SubjectResult.js';
import Button from '../components/button/Button.js';
import * as Common from '../components/Common.js';

class FullPage extends Component{


  constructor(props){
    super(props);
    this.state={
      user : this.props.user,
      mode : this.props.mode,
      n_day : null,
      logined : false,
      checked : false,
      day_overed : true,
      total_count : 0,
      rank : '-'
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
    if(prevProps.day_overed !== this.props.day_overed) {
      this.setState({day_overed: this.props.day_overed});
    }


  }

  loadData = async() => {
    
    if(this.state.user!=null) {
    }

    let calday = Common.calDays()
    let _day_overed = Common.checkOverDDays();
    this.setState({
      user : this.props.user,
      mode : this.props.mode,
      n_day : calday,
      day_overed : _day_overed
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
  
  checkRanking = async() => {

    try{
      const res = await axios.post('/api/get/rankById',{
        user_id : this.props.user.id})

      if(res.data[0]!=null){
        this.setState({
          rank : res.data[0].rank
        });
      }
      else { }
    }catch(e)
    {
      alert(`ERROR! [${e.name}] : ${e.message}`)
    }

  }

  buttonState = ()=>{
    return (this.state.mode=="guest")? "btn-enabled" : "btn-confirm"
  }

  printDays = () =>{
   if(this.state.day_overed) return `공지 안내 및 순위 보기 🎉`;
   else return (this.state.checked)? `오늘 완료 축하합니다^^` :`${this.state.n_day}일차 시작`
  }

  printCompleteButton=()=>{
    if(this.state.day_overed){
      return '내 순위 확인하기'
    }else{
      if(this.state.checked) return '축하합니다!';
      else return '오늘 도전 완료하기';
    }
  }

  completeButtonAction = () =>{
    if(this.state.day_overed){
      if(!this.state.logined){
 
      }else{
        let _rank = this.checkRanking();
        this.setState({
          rank : _rank
        })
      }
    }else{
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
  }

  subjectBible = () =>{

    return(
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

    );
  }

  subjectGift = (_title, _sub,_sub3, _imghref) =>{
    return(
      <div className="section">
      <SubjectImage
        title={_title}
        sub={_sub}
        sub3={_sub3}
        image={_imghref}
         />
    </div>
    );
  }

  subjectProfile = () =>{
    return(
      <div className="section">
      <SubjectProfile 
                title ="3겹줄 기도" 
                sub="한 사람이면 패하겠거니와 두 사람이면 맞설 수 있나니 세 겹 줄은 쉽게 끊어지지 아니하느니라"
                sub2="- 전4:12 -"
                sub3="오늘은 이분들을 위해 기도 하는건 어때요?" 
                />
    </div>
    );
  }

  sectionColor = () =>{
    if(this.state.day_overed) return ["#DBAFAD", "#BEB7A7","#5B5853","#A57873", "#C6C6C6","#DBAFAD"];
    else return ["#282c34", "#9baec8","#353848","#ff5f45", "#0798ec","#282c34"];
  }


    render(){

      //두가지 조건에 따라 return() 다르게 보여주기 30일 초과 30일 미만 

      return(
        <ReactFullpage
          //fullpage options
          licenseKey = {'OPEN-SOURCE-GPLV3-LICENSE'}
          scrollingSpeed = {1000}
          sectionsColor={this.sectionColor()}
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
                        onClick={ () =>  fullpageApi.moveSectionDown()} />
              </div>
    
              <div className="section">
                <SubjectYoutube 
                  title ="1분 말씀묵상"
                  sub={(this.state.day_overed)?"💓조회수 1순위 영상 공개!!💓":"(오전 11시쯤 업데이트 됩니다 - 주일 제외)"}
                  /> 
              </div>

              {(this.state.day_overed)?this.subjectGift("참여자 선물 하나",
                  "모든 청년부 참여자에게 '2021년 달력'을 선물로 드려요","",
                  "calendar")
                  :this.subjectBible() }
              {(this.state.day_overed)?this.subjectGift("참여자 선물 두울",
                  "여러분이 보여주신 열정에 보답하고자 횟수에 따라 정성을 담은 선물을 순차적으로 보내드립니다😘😘",
                  "연락이 가면 배송에 필요한 주소와 번호를 보내주세요.",
                  "second")
                  :this.subjectProfile() }

                <div className="section">
                  <SubjectMain
                    title ="4랑실천 happy box" 
                    sub="12월 12일까지 사랑의 선물박스를 함께 준비해볼까요?"
                    sub3="📞기간 외 제출 문의 02-831-9700" />
                  <Button classname={this.buttonState()} title={this.printCompleteButton()} 
                        onClick={()=>{
                            this.completeButtonAction()
                            fullpageApi.moveSectionDown()
                           }}/>
                </div>

                <div className="section">
                  <SubjectResult
                    sub=""
                    user={this.state.user}
                    total_count ={this.state.total_count}
                    logined={this.state.logined}
                    n_day={this.state.n_day}
                    day_overed={this.state.day_overed}
                    rank={this.state.rank}
                     />
                </div>

                </ReactFullpage.Wrapper>
            </div>);}}
        />

      );
    }
  }

  export default FullPage;