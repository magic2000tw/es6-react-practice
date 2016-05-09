import React from 'react'
import {render} from 'react-dom'
import Radium from 'radium'

class MenuContent extends React.Component{
  constructor(props){
    super(props)
    this.state = {isClick: false}
    this.onClick = this.onClick.bind(this)
    this.dropDown = this.dropDown.bind(this)
  }

  onClick(){
    this.setState({isClick: !this.state.isClick});
  }

  dropDown(isClick){
    const dropDownStyle = {
      display: isClick ?'block':'none',
      color:'white',
      minWidth: '160px',
      padding: '12px 16px',
      position: 'absolute',
      transform: isClick ? 'height 200ms ease-in':'none',
      transition: 'all 0.2s'
    };
    return dropDownStyle;
  }

  render(){
    const contentStyle = {
      position: 'fixed',
      width:'300px',
      height:'92%',
      background:'black',
      top:'0%'
    };
    const aStyle = {
      color: 'white',
      padding: '12px 16px',
      textDecoration: 'none',
      display: 'block'
    };
    const btnStyle = {
      background:'black',
      color:'white',
      border:'none',
      cursor:'pointer',
      outline:'none',
      width:'100%',
      height:'15%',
      fontSize:'1.5em',
      textAlign:'left'
    };
    return(
      <div style={contentStyle}>
      {/*this.props.children*/}
        <button onClick={this.onClick}
                  style={btnStyle}>
        Title
        </button>
        <nav>
          <div style={this.dropDown(this.state.isClick)}>
            <a href={'#'} style={aStyle}>content1</a>
            <a href={'#'} style={aStyle}>content2</a>
            <a href={'#'} style={aStyle}>content3</a>
          </div>
        </nav>
      </div>
    )
  }
}

module.exports = Radium(MenuContent);
