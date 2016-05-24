import React from 'react'
import {render} from 'react-dom'
import Radium from 'radium'
import MenuContainer from './MenuContainer.js'
import MenuButton from  './MenuButton.js'



class BurgerMenu extends React.Component{
  constructor(props){
    super(props)
    this.state = {isOpen:false}
    // this.onClick = this.onClick.bind(this)
  }

  render(){
    const onClick = () =>{
      console.log(this.state.isOpen);
      this.setState({isOpen: !this.state.isOpen});
    }
    return(
      <div className={'BurgerMenu'}>
        <MenuContainer isOpen={this.state.isOpen}
                       menuContents={this.props.menuContents}/>
        <MenuButton onClick={onClick}
                    isOpen={this.state.isOpen}
                    menuLable={this.props.menuLable}>
                    {this.props.menuLable}
        </MenuButton>
      </div>
    );
  }
}

export default BurgerMenu;
