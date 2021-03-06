import React from 'react'
import {render} from 'react-dom'
import Radium from 'radium'
import BurgerIcon from './BurgerIcon.js'

class MenuButton extends React.Component{
  constructor(props){
    super(props)
    this.state = {hover:false}
    this.handleHover = this.handleHover.bind(this)
    // this.onClick = this.onClick.bind(this)
  }

  handleHover(){
    this.setState({hover: !this.state.hover});
  }

  /*onClick(){
    this.setState({isOpen: !this.state.isOpen});
  }*/


  render(){
    const buttonStyle = {
      position: 'fixed',
      width:'200px',
      height:'50px',
      background:'black',
      bottom:'0%',
      opacity: this.state.hover ? 0.6 : 1
    };
    const fontStyle = {
      position:'absolute',
      width:'60%',
      height:'20%',
      top:'36%',
      left:'40%',
      fontFamily:'sans-serif',
      fontSize:'100%',
      color:'white'
    };
    return(
      <a style={buttonStyle}
           onMouseEnter={this.handleHover}
           onMouseLeave={this.handleHover}
           onClick={this.props.onClick}
           title={this.props.menuLable}
           href={'javascript:'}>
        <BurgerIcon isOpen={this.props.isOpen}
                    hover={this.state.hover}>
        </BurgerIcon>
        <div style={fontStyle}>{this.props.children}</div>
      </a>
    )
  }
}

module.exports = Radium(MenuButton);
