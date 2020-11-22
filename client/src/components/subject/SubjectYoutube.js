import React, {Component} from 'react';
import axios from 'axios';
class SubjectYoutube extends Component{

  constructor(props){
    super(props);
    this.state={
      url : 'https://www.youtube.com/embed/zYoP9Lz2mO4'
    }
  }
  componentDidMount() {
    this.load();
  }

  load = async() =>{
    
    try{
      const res = await axios.get('/api/get/videoURL')
      if(res.data[0]!=null){
        this.setState({
          url : 'https://www.youtube.com/embed/'+res.data[0].url
        })
      }
      else {}
    }catch(e)
    {
      alert(`ERROR! [${e.name}] : ${e.message}`)
    }
  }

    render(){
      return(
        <div>
          <header>
                  <h1>{this.props.title}</h1>
                 <p className="sub">{this.props.sub}</p>
          </header>
          <div className="video">
            <div className="video-container">
              <iframe title="youtube" width="100%" height="100%" 
                      src={this.state.url}
                      frameBorder="0" 
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen></iframe>
            </div>
        </div> 
      </div>  
      );
    }
  }

  export default SubjectYoutube ;