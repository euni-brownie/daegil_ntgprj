import React, {Component} from 'react';
class SubjectResult extends Component{

  constructor(props){
    super(props);
    this.state={
      user : this.props.user,
      total_count : this.props.total_count,
      logined : this.props.logined,
      n_day : this.props.n_day,
      day_overed : this.props.day_overed,
      rank : '-'
    }
  }

  getTitle =() =>{
    if(this.props.day_overed){
      if(!this.props.logined){
        return `로그인 후 버튼을 눌러주세요`
      }else{
        if(this.props.rank==='-') return `순위를 찾을 수 없습니다`;
        else return `🎉${this.props.rank}위 입니다🎉`
      }
    }else{
      if(!this.props.logined){
        return `${this.props.n_day}일차 완료!!`
      }else{
        return `총 ${this.props.total_count}회 성공!!`;
      }
    }

  }

    render(){
      return(
        <header>
                <h1>{this.getTitle()}</h1>
                <p className='sub'>{this.props.sub}</p>
        </header>
      );
    }
  }

  export default SubjectResult;