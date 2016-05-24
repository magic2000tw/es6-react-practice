import React from 'react'
import {render} from 'react-dom'
import Radium from 'radium'
import {StyleRoot} from 'radium'
import MenuContent from './MenuContent.js'
import classNames from 'classnames'

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
    let i = 1;
    let subMenuId = 'subMenu';
    menus.forEach( menu => {
      jsx.push(<MenuContent title={menu.title} contents={menu.contents} key={subMenuId+(i++)}/>);
    });
    return jsx
  }

  render(){
    const contentStyle = {
      position: 'fixed',
      width:'300px',
      height:'92%',
      background:'black',
      top:'0%'
    };
    var menuWrapperClass = classNames({
     'menu-wrapper': true,
     'show': this.props.isOpen,
     'hide': !this.props.isOpen
   });
    const menu = this.genMenu(this.props.menuContents);
    return(
      <div  className={menuWrapperClass}>
        <ul className={'dropdown-lists'}>
          {menu}
        </ul>
      </div>
    )
  }
}

module.exports = Radium(MenuContainer);
