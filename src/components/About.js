import React, { Component } from 'react';
import Figure from 'react-bootstrap/Figure';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './About.css';
import img from './images/img1.JPG';
import Fade from 'react-reveal/Fade';

class About extends Component {
  render() {
    return(
      <div className="About">
        <h2>About Me</h2> 
        <Row className="bio">
          <Col xs={12} md={6} className="headshot">
            <Figure>
              <Fade>
                <Figure.Image 
                width={300}
                height={180}
                src={img}
                roundedCircle
                />
              </Fade>
            </Figure>
          </Col>
          <Col xs={12} md={6}>
            <Fade>
              <p className>Hi, I'm Anri. I am an experienced automation test engineer, who is passionate for automated testing.<br />
              I have released a couple of rails and react applications, and love working on my web app in my free time. I also used react to create and update this page myself.<br />
              I like cooking, traveling and running in my free time. My hobbies give me inspiration, and help me relieve stress.<br />
              My dream is to share what I enjoy with other like minded people around the world.<br />
              If you would like to know more about me, please explore this page.<br />
              Thank you very much for visiting!
              </p>
            </Fade>
          </Col>
        </Row>
      </div>
    );
  }
}

export default About;