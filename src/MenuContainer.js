import React from 'react'
import {render} from 'react-dom'
import Radium from 'radium'
import {StyleRoot} from 'radium'
import MenuContent from './MenuContent.js'

const defaultMenu = [
  {'title': 'title1', 'contents':['content1','content2','content3']},
  {'title': 'title2', 'contents':['content4','content5','content6']}
];

class MenuContainer extends React.Component{
  constructor(props){
    super(props)
    this.state = {isClick: false}
    // this.getMenu = this.getMenu.bind(this);
    /*this.onClick = this.onClick.bind(this)
    this.dropDown = this.dropDown.bind(this)*/
  }

  onClick(index){
      //console.log(index);
      this.setState({isClick: !this.state.isClick});
      this.setState({clickIndex: index});
  }
  genMenu(menus){
    let jsx = [];
    menus.forEach( menu => {
      jsx.push(<MenuContent title={menu.title} contents={menu.contents}/>);
    });
    return jsx
  }

  render(){
    const contentStyle = {
      position: 'fixed',
      width:'300px',
      height:'92%',
      background:'black',
      top:'0%',
      left:'0'
    };
    const divStyle ={
      position: 'relative',
       display: 'block',
       color: 'white',
       boxShadow: '0 1px 0 #409ad5 inset, 0 -1px 0 #20638f inset',
       textShadow: '0 -1px 0 rgba(0, 0, 0, 0.3)',
       padding: '10px'
    };
    const btnStyle = {
      background:'black',
      color:'white',
      border:'none',
      cursor:'pointer',
      outline:'none',
      width:'100%',
      height:'10%',
      fontSize:'1.5em',
      textAlign:'left'
    };
    const menu = this.genMenu(defaultMenu);
    return(
      <div style={contentStyle} >
      {/*this.props.children*/}
        <ul>
          {menu}
        </ul>
      </div>
    )
  }
}

module.exports = Radium(MenuContainer);
