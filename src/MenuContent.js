import React from 'react'
import {render} from 'react-dom'
import Radium from 'radium'

class MenuContent extends React.Component{
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
    const contentStyle = {
      position: 'fixed',
      width:'20%',
      height:'90%',
      background:'black',
      top:'0%',
      opacity: this.state.hover ? 0.6 : 1
    };
    return(
      <div style={contentStyle}>
      {this.props.children}
      </div>
    )
  }
}

module.exports = Radium(MenuContent);
