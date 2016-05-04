import React from 'react'
import {render} from 'react-dom'
import Radium from 'radium'
import BurgerButton from './BurgerButton.js'

class MenuButton extends React.Component{


  render(){
    const buttonStyle = {
      position: 'fixed',
      width:200,
      height:50,
      background:'black',
      top:'80%'
    };
    const fontStyle = {
      width:'60%',
      height:'50%',
      top:'50%',
      right:'60%',
      fontFamily:'sans-serif',
      fontSize:'100%',
      color:'white'
    };
    return(
      <div style={buttonStyle}>
      <BurgerButton></BurgerButton>
      <div style={fontStyle}>{this.props.children}</div>
      </div>
    )
  }
}
module.exports = Radium(MenuButton);
render(<MenuButton>This is a menu</MenuButton>, document.getElementById('example'));
