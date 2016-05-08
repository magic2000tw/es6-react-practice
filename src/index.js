import React from 'react'
import {render} from 'react-dom'
import Radium from 'radium'
import MenuContent from './MenuContent.js'
import MenuButton from './MenuButton.js'

class Example extends React.Component{
  // constructor(props){
  //   super(props)
  //   this.getMenu = this.get.bind(this)
  // }

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
      <div>
        <MenuContent>
          {this.getMenu()}
        </MenuContent>
        <main>
          <MenuButton>This is Menu</MenuButton>
        </main>
      </div>
    )
  }
}
module.exports = Radium(Example);
render(<Example />, document.getElementById('example'));
