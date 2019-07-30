import React, { Component } from 'react';
import Figure from 'react-bootstrap/Figure';
import FigureImage from 'react-bootstrap/FigureImage';
import './Like.css';
import Fade from 'react-reveal/Fade';

class Like extends Component {
  constructor(props){
    super(props);
    this.state = {isModalOpen: false}
  }

  handleModalOpen() {
    this.setState({isModalOpen: true})
  }

  handleModalClose() {
    this.setState({isModalOpen: false})
  }

  render() {
    let modal = '';
    if(this.state.isModalOpen === true){
      modal = (
        <div className="like-modal">
          <h5>{this.props.likeName}</h5>
          <p>{this.props.likeDesc}</p>
          <button onClick={() => {this.handleModalClose()}}>Close</button>
        </div>
      )
    }

    return(
      <div className="like-card"
           onClick={() => {this.handleModalOpen()}}>
        <Fade>
          <Figure>
            <FigureImage src={this.props.image}
                        width="220px"
                        height="220px" roundedCircle/>
          </Figure>
          <h5>{this.props.likeName}</h5>
        </Fade> 
      </div>
     
    );
  }
}

export default Like;