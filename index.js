import React from 'react'
import {render} from 'react-dom'
import Radium from 'radium'
import MenuContent from './MenuContent.js'
import MenuButton from './MenuButton.js'

class examle extends React.Component{
  constructor(props){
    super(props)
  }


  render(){
    return(
        <MenuButton></MenuButton>
    )
  }
}

module.exports = Radium(example);
render(<example />, document.getElementById('example'));
