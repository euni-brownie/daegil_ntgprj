import React, { Component } from 'react';
class UpdateContent extends Component{
    constructor(props){
      super(props);
      this.state={
          id : this.props.updateData.id,
          title : this.props.updateData.title,
          desc : this.props.updateData.desc
      }
      this.inputFormHandler = this.inputFormHandler.bind(this);
    }

    inputFormHandler(e){
      this.setState({
        [e.target.name] : e.target.value
      });
    }

    render(){      
      return(
        <article>
          <h2>Update</h2>
          <form 
            action="/update_process" 
            method="post"
            onSubmit={function(e){
              e.preventDefault();
              //debugger;
              this.props.onSubmit(this.state.id, this.state.title, this.state.desc);
            }.bind(this)}>
            
            <input type="hidden" value={this.state.id}></input>
            <p><input type = "text" 
                      name = "title" 
                      placeholder="title" 
                      value={this.state.title}
                      onChange={this.inputFormHandler}></input></p>
            <p><textarea name = "desc" 
                          placeholder="desc" 
                          value={this.state.desc}
                          onChange={this.inputFormHandler}></textarea></p>
            <p><input type="submit"></input></p>
          </form>
        </article>
      );
    }
  }

  export default UpdateContent;