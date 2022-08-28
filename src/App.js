import React, { Component } from "react";
import "./App.css";
import Navi from "./components/Navigation";
import About from "./components/About";
import Skill from "./components/Skill";
import Like from "./components/Like";
import Link from "./components/Link";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Col from "react-bootstrap/Col";
const { SkillList } = require("./components/Data/SkillList");

class App extends Component {
  render() {
    const skillList = SkillList;

    const likeList = [
      {
        likeName: "Cooking",
        image: require("./components/images/cooking.jpg"),
        likeDesc:
          "Cooking helps me stay healthy,  also cooking helps me relax and relieve stress. Food is important for your daily life because what you are what you eat.",
      },
      {
        likeName: "Running",
        image: require("./components/images/Run2.jpg"),
        likeDesc:
          "I really hated running 8 years ago. I didn't understand why people like running, but I started running for my health. I attend local races once a month. I prefer running outside, because I can feel experience nature and my environment. It feels really good. If you would like to start jogging don't worry about speed. The a slow speed is good, increase your speed day by day.",
      },
      {
        likeName: "Traveling",
        image: require("./components/images/Beach.JPG"),
        likeDesc:
          "I am originaly from Japan. I have traveled to a lot of places, and would like to go to new places where I have never been. I like how each country or city has their own culture, I enjoy seeing things I have never seen before. I like walking around town taking pictures. I like to see the pictures after the trip is finished. ",
      },
    ];

    return (
      <div className="App" id="main">
        <Navi />
        <Col lg={{ offset: 1, span: 10 }}>
          <div className="Main" id="about">
            <About />
            <h2 className="skill-h2" id="skills">
              Skills
            </h2>
            <p className="skill-ptag">
              I started learning programming in 2017. My first programming
              language was Ruby. When I first started, I was surprised to find
              out I could build programs and applications on my laptop. I always
              taught this took specialized equipment.
              <br />
              After Ruby, I learned Javascript and how to make websites more
              aesthetically pleasing. I then got my first tester job after I
              learned programming.
              <br />
              {/* As more than 4 years experience, I learned python and
              Robotframework to run end to end automation test. I also learned
              to run automation test daily bases to use powershell script */}
            </p>
            <div className="skill-bord">
              {skillList.map((skillItem) => {
                return (
                  <Skill
                    key={skillItem.id}
                    skillName={skillItem.skillName}
                    image={skillItem.image}
                    introduction={skillItem.introduction}
                  />
                );
              })}
            </div>
            <h2 className="like-h2tag" id="like">
              What I like
            </h2>
            <p className="like-ptag">
              {" "}
              I spend most of my free time cooking, running and traveling.
              <br />
              I cook a Japanese style lunch box everyday, to help me stay
              healthy. My favorite cooking tool is my Le Creuset pot, which is
              amazing. I use it to cook curry, my favorite dish.
              <br />
              I also like running. I run almost everyday to stay healthy and
              achieve a good mental balance. I like to attend local races for
              fun and explore the local area.
              <br />
              Part of my travels also includes exploring the local area. I like
              visiting local cafes, restaurants and public spaces, and learn
              about the lives of the people in my community.
            </p>
            <div className="like-raw">
              {likeList.map((likeItem) => {
                return (
                  <Like
                    likeName={likeItem.likeName}
                    image={likeItem.image}
                    likeDesc={likeItem.likeDesc}
                  />
                );
              })}
            </div>
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
