import React from 'react'
import {render} from 'react-dom'
import Radium from 'radium'

class BurgerButton extends React.Component {
  constructor(props){
    super(props)
    this.state = {hover:false,isClick:false}
    this.handleHover = this.handleHover.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  getIconStyle(index){
    let style = {
      position: 'absolute',
      height: '10%',
      left: 0,
      right: 0,
      top: 20 * (index * 2) + '%',
      opacity: this.state.hover ? 0.6 : 1,
      background: 'white',
      transition: 'all 0.5s'
    }
    if(index == 0 && this.state.isClick){
      style.transform = 'rotate(45deg)';
      style.top = '50%';
    }
    if(index == 1 && this.state.isClick){
      style.background = 'transparent';
    }
    if(index == 2 && this.state.isClick){
      style.transform = 'rotate(-45deg)';
      style.top = '50%';
    }
    return style;
  }

  handleHover(){
    this.setState({hover: !this.state.hover});
  }
  onClick(){
    this.setState({isClick: !this.state.isClick});
  }

  render() {
    const icon = (
      <span>
        <span style={this.getIconStyle(0)}></span>
        <span style={this.getIconStyle(1)}></span>
        <span style={this.getIconStyle(2)}></span>
      </span>
    );

    const buttonStyle = {
      background:'transparent',
      position: 'relative',
      width: '36px',
      height: '30px',
      left: '5%',
      top: '26%',
      zindex: 1
    };
    return(
      <div onMouseEnter={this.handleHover}
           onMouseLeave={this.handleHover}
           onClick={this.onClick.bind(this)}
           style={buttonStyle}>
        {icon}
      </div>
    );
  }
}
module.exports = Radium(BurgerButton);
