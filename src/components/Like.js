import React, { Component } from 'react';
import Figure from 'react-bootstrap/Figure';
import FigureImage from 'react-bootstrap/FigureImage';
import './Like.css';
import Fade from 'react-reveal/Fade';
import Col from 'react-bootstrap/Col'

class Like extends Component {
  constructor(props){
    super(props);
    this.state = { show: false};
  }

  handleModalOpen() {
    this.setState({ show: true});
  }

  handleModalClose() {
    this.setState({ show: false });
  }
  
  render() {
    let modal = '';
    if(this.state.show){
      modal = (
       
        <div className="like-modal">
          <Fade>
          <div className="like-modal-box">
            <h5>{this.props.likeName}</h5>
            <p>{this.props.likeDesc}</p>
            <button className="like-close-button" 
                    onClick={() =>{this.handleModalClose()}}>Close</button>
          </div>  
          </Fade> 
        </div>
      );
    } 

    return(
      <div className="like-top">
        <div onClick={() => {this.handleModalOpen()}}>     
          <Figure>
            <FigureImage src={this.props.image}
                        width="220px"
                        height="220px" roundedCircle/>
          </Figure>
          <h5>{this.props.likeName}</h5>
        </div>   
          {modal}
      </div>
    );
  }
}

export default Like;
