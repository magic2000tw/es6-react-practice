import React from 'react'
import {render} from 'react-dom'
import Radium from 'radium'
import {StyleRoot} from 'radium'
import classNames from 'classnames'


class MenuContent extends React.Component{
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {isSubOpen: false}
  }

  onClick(){
      this.setState({isSubOpen: !this.state.isSubOpen});
  }

  makeContents(contents){
    let jsx = [];
    contents.forEach( content => {
      jsx.push(<li>
                <a href={'#'}>
                  {content}
                </a>
              </li>);
    });
    return jsx;
  }

render(){
    var dropDownClass = classNames({
     'dropdown-menu': true,
     'show': this.state.isSubOpen,
     'hide': !this.state.isSubOpen
   });

    var contents = this.makeContents(this.props.contents);
    return(
          <li className={'dropdown'}>
            <button onClick={this.onClick}>
                {this.props.title}
                </button>
                <ul className={dropDownClass}>
                  {contents}
                </ul>
          </li>
    )
  }
}
MenuContent.propTypes = { menuContent: React.PropTypes.array};
//MenuContents.defaultProps = {menuContent: defaultMenu};
module.exports = Radium(MenuContent);
