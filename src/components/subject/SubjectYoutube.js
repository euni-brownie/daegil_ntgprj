import React, {Component} from 'react';

class SubjectYoutube extends Component{

    render(){
      return(
        <div>
          <header>
                  <h1>{this.props.title}</h1>
                 <br/>
          </header>
          <div class="video">
            <div class="video-container">
              <iframe title="youtube" width="100%" height="100%" 
                      src={this.props.url}
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