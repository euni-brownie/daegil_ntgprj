import React, { Component } from 'react';
import ReadContent from './components/ReadContent.js';
import CreateContent from './components/CreateContent.js';
import UpdateContent from './components/UpdateContent.js';
import LoginHeader from './components/header/LoginHeader.js';
import FullPage from './pages/FullPage.js';
import './css/App.css';



class App extends Component{

  constructor(props){
    super(props);
    this.max_content_id = 3; //ui에 영향을 줄 이유가 없는 변수이므로 state값이 아닌 변수로!
    this.state ={
      mode : "guest",
      subject : {title : 'WEB', sub : 'World wide web!'},
      welcome : {title : 'welcome', desc : 'Hello,React!!!'},
      contents : [
        {id : '1', title : "HTML", desc : 'HTML is for information'},
        {id : '2', title : "CSS", desc : 'CSS is for design'},
        {id : '3', title : "JavaScript", desc : 'JavaScript is for interactive'},

      ],
      selected_content_id : '2',
    }
  }
  getReadContent(){
    var i=0;
    console.log(this.state.contents.length);
    while(i < this.state.contents.length){
      var data = this.state.contents[i];
      if(data.id == this.state.selected_content_id){
      
        return data;
      }
      i= i+1;
    }
  }

  getContent(){

    var _title, _desc, _article = null;
    if(this.state.mode ==='welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    }else if (this.state.mode==='read'){
      var readData = this.getReadContent();
      console.log("readData : "+ readData.id);
      _article = <ReadContent title={readData.title} desc={readData.desc}></ReadContent>;
    }else if (this.state.mode==='create'){
      _article = <CreateContent onSubmit={function(_title,_desc){
          // add content to this.state.contents
          this.max_content_id++;
          var result = Array.from(this.state.contents);
          result.push({id : this.max_content_id, title : _title, desc : _desc});          
          this.setState({
            contents : result,
            selected_content_id : this.max_content_id,
            mode : 'read'

          });
      }.bind(this)}></CreateContent>
    }else if (this.state.mode==='update'){
      var updateData = this.getReadContent();


      _article = <UpdateContent onSubmit={function(_id,_title,_desc){
          var result = Array.from(this.state.contents);
          for(var i=0; i<result.length; i++){
            if(result[i].id === _id){
              result[i] = {id:_id, title: _title, desc: _desc};
              break;
            }
          }

          this.setState({
            mode : 'read',
            contents : result
          });
      }.bind(this)}
        updateData={updateData} ></UpdateContent>
    }

    return _article;

  }



  render(){
    return(
      <div>
      <LoginHeader mode={this.state.mode}></LoginHeader>
      <FullPage></FullPage>
      </div>
    );
  }
}


export default App;
