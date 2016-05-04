import React from 'react'
import {render} from 'react-dom'
import Radium from 'radium'
import BurgerButton from './BurgerMenu.js'

class MenuButton extends React.Component{
  constructor(props){
    super(props)
    this.state = {hover:false}
    this.handleHover = this.handleHover.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  handleHover(){
    this.setState({hover: !this.state.hover});
  }

  onClick(){
    alert('clicked');
  }


  render(){
    const buttonStyle = {
      position: 'fixed',
      width:'200px',
      height:'50px',
      background:'black',
      top:'80%',
      opacity: this.state.hover ? 0.6 : 1
    };
    const fontStyle = {
      position:'absolute',
      width:'60%',
      height:'20%',
      top:'40%',
      left:'45%',
      fontFamily:'sans-serif',
      fontSize:'100%',
      color:'white'
    };
    return(
      <a style={buttonStyle}
           onMouseEnter={this.handleHover}
           onMouseLeave={this.handleHover}
           href={this.onClick}>
        <BurgerButton></BurgerButton>
        <div style={fontStyle}>{this.props.children}</div>
      </a>
    )
  }
}
module.exports = Radium(MenuButton);
render(<MenuButton>This is a menu</MenuButton>, document.getElementById('example'));
