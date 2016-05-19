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
  }

  onClick(){
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
    const menu = this.genMenu(defaultMenu);
    return(
      <div style={contentStyle} >
      {/*this.props.children*/}
        <ul className={'dropdown-lists'}>
          {menu}
        </ul>
      </div>
    )
  }
}

module.exports = Radium(MenuContainer);
