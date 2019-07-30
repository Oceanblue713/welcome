import React from 'react';
import linkedInLogo from './images/LinkedIn.png';
import gitHubLogo from './images/GitHub.png';
import './Link.css';

class Link extends React.Component {
  render(){
    return(
      <div className="links">
        <ul>
          <li><a className="github" href="https://github.com/Oceanblue713" target="_blank"><img src= {gitHubLogo} width="50" height="50" /></a></li>
          <li><a className="linkedin" href="https://www.linkedin.com/in/anriliy/" target="_blank"><img src= {linkedInLogo} width="50" height="50"/></a></li>
        </ul>
      </div>    
    )
  }
}

export default Link;