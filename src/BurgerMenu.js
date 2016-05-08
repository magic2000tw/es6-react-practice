import React from 'react'
import {render} from 'react-dom'
import Radium from 'radium'

class BurgerMenu extends React.Component{
  constructor(props){
    super(props)
  }

  handleHover(){
    this.setState({hover: !this.state.hover});
  }

  onClick(){
    this.setState({isClick: !this.state.isClick});
  }

  render(){
    return(
      <div>
        <MenuContent>
          {this.getMenu()}
        </MenuContent>
        <MenuButton>This is Menu</MenuButton>
      </div>
    );
  }
}
