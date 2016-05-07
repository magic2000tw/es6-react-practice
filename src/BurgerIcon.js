import React from 'react'
import {render} from 'react-dom'
import Radium from 'radium'

class BurgerIcon extends React.Component {
  constructor(props){
    super(props)
  }

  getIconStyle(index){
    let style = {
      position: 'absolute',
      height: '10%',
      left: 0,
      right: 0,
      top: 20 * (index * 2) + '%',
      opacity: this.props.hover ? 0.6 : 1,
      background: 'white',
      transition: 'all 0.5s'
    }
    if(index == 0 && this.props.isOpen){
      style.transform = 'rotate(45deg)';
      style.top = '50%';
    }
    if(index == 1 && this.props.isOpen){
      style.background = 'transparent';
    }
    if(index == 2 && this.props.isOpen){
      style.transform = 'rotate(-45deg)';
      style.top = '50%';
    }
    return style;
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
      top: '20%',
      zindex: 1
    };
    return(
      <div style={buttonStyle}>
        {icon}
      </div>
    );
  }
}
BurgerIcon.propTypes = { hover: React.PropTypes.bool,
                         isOpen: React.PropTypes.bool};
BurgerIcon.defaultProps = { hover: false,
                            isOpen: false };
module.exports = Radium(BurgerIcon);
