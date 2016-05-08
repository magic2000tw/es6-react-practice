import React from 'react'
import {render} from 'react-dom'
import Radium from 'radium'

class BurgerMenu extends React.Component{

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
