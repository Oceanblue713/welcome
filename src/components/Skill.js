import React, { Component } from "react";
import Figure from "react-bootstrap/Figure";
import "./Skill.css";
import Fade from "react-reveal/Fade";

class Skill extends Component {
  constructor(props) {
    super(props);
    this.state = { isModalOpen: true };
  }

  handleSkillModalOpen() {
    this.setState({ isModalOpen: true });
  }

  render() {
    let modal;
    if (this.state.isModalOpen === true) {
      modal = <div className="skill-modal"></div>;
    }
    return (
      <div className="skill-card">
        <Fade>
          <Figure>
            <Figure.Image
              link={this.props.link}
              src={this.props.image}
              width={150}
              height={150}
            />
          </Figure>

          <h5>{this.props.skillName}</h5>
        </Fade>
        {modal}
      </div>
    );
  }
}

export default Skill;
