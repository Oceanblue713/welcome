import React, { Component } from 'react';
import './App.css';
import Navi from './components/Navigation';
import About from './components/About';
import Skill from './components/Skill';
import Like from './components/Like';
import Link from './components/Link';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Col from 'react-bootstrap/Col'

class App extends Component {
  render() {
    const skillList = [
      {
        skillName: 'Ruby',
        image: require('./components/images/ruby.jpg'),
        introduction: 'My first program language.'
      },
      {
        skillName: 'Javascript',
        image: require('./components/images/js.svg')
      },
      {
        skillName: 'Automated Test',
        image: require('./components/images/se.png')
      },
      {
        skillName: 'React',
        image: require('./components/images/React.png')
      },
      {
        skillName: 'RubyonRails',
        image: require('./components/images/Rails.svg')
      },
      {
        skillName: 'HTML5',
        image: require('./components/images/html.png')
      },
      {
        skillName: 'CSS3',
        image: require('./components/images/css3.svg')
      },
      {
        skillName: 'git',
        image: require('./components/images/git.png')
      }
    ];

    const likeList = [
      {
        likeName: 'Cooking',
        image: require('./components/images/cooking.jpg'),
        likeDesc: "Cooking makes me to be able to control my health, and my body shape, also can focus on the"
      },
      {
        likeName: 'Running',
        image: require('./components/images/Run.JPG')
      },
      {
        likeName: 'Traveling',
        image: require('./components/images/Beach.JPG')
      },
    ]

    return (
      <div className="App" id="main">
        <Navi />
        <Col lg={{ offset:1, span:10 }}>
        <div className="Main" id="about">
          <About />
          <h2 className="skill-h2" id="skills">Skills</h2>
          <p className="skill-ptag">
            I started learning programming in 2017.
            My first programming language was Ruby. When I first started, I was surprised to find out I could build programs and applications on my laptop. I always thought this took specialized equipment.<br />
            After Ruby, I learned Javascript and how to make websites more aesthetically pleasing. I then got my first tester job after I learned programming.<br />
            As a tester, I thought myself automation test tools and BDD concepts, since there are no schools for automated testing. When I started I totally could not understand these concepts, but I am learning and can understand and use them right now.
          </p>
          <div className='skill-bord'>
            {skillList.map((skillItem) => {
              return(
                <Skill 
                  skillName={skillItem.skillName}
                  image={skillItem.image}
                  introduction={skillItem.introduction} />
              )
            })}
          </div>
          <h2 className="like-h2tag" id="like">What I like</h2>
          <p className="like-ptag"> I spend most of my free time cooking, running and traveling.<br />
            I cook a Japanese style lunch box everyday, to help me stay healthy. My favorite cooking tool is my Le Creuset pot, which is amazing. I use it to cook curry, my favorite dish.<br />
            I also like running. I run almost everyday to stay healthy and achieve a good mental balance. I like to attend local races for fun and explore the local area.<br />
            Part of my travels also includes exploring the local area. I like visiting local cafes, restaurants and public spaces, and learn about the lives of the people in my community.
          </p>
          <div class="like-raw">
          {likeList.map((likeItem) => {
            return(
              <Like likeName={likeItem.likeName}
                    image={likeItem.image} />
            )
          })}
          </div>
          <div id="contact"></div>
          <Contact />
          <Link />
        </div>
        </Col>
        <Footer />
      </div>
    );
  }
}

export default App;
