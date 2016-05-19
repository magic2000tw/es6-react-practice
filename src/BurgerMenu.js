import React from 'react'
import {render} from 'react-dom'
import Radium from 'radium'
import MenuContainer from './MenuContainer.js'
import MenuButton from  './MenuButton.js'

class BurgerMenu extends React.Component{
  constructor(props){
    super(props)
    this.state = {isOpen:false}
    //this.onClick = this.onClick.bind(this)
  }

  onClick(){
    console.log('clicked!!');
    this.setState({isOpen: !this.state.isOpen});
  }

  getMenu(){
    const menuStyle = {
      position:'absolute',
      width:'60%',
      height:'10%',
      top:'10%',
      left:'30%'
    };
    const contentStyle = {
      position:'absolute',
      width:'60%',
      height:'20%',
      top:'20%',
      left:'20%',
      color:'white'
    };
    return(
      <div style={menuStyle}>
        <i className={'fa fa-camera-retro fa-2x fa-inverse'}></i>
        <span style={contentStyle}>MENU1</span>
      </div>
    );
  }

  render(){
    return(
      <div className={'BurgerMenu'}>
        <MenuContainer>
          {this.getMenu()}
        </MenuContainer>
        <MenuButton onClick={this.onClick.bind(this)}
                    isOpen={this.state.isOpen}>{this.props.menuLable}</MenuButton>
      </div>
    );
  }
}

export default BurgerMenu;
