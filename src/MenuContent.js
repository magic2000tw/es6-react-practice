import React from 'react'
import {render} from 'react-dom'
import Radium from 'radium'
import {StyleRoot} from 'radium'


const openKeyframes = Radium.keyframes(
  {'0%':{transform: 'scaleY(0)'},
  '20%':{transform: 'scaleY(0.2)'},
//'40%':{transform: 'scaleY(0.4)'},
//'60%':{transform: 'scaleY(0.6)'},
'80%':{transform: 'scaleY(0.8)'},
'100%':{transform: 'scaleY(1)'}
},'pulse');

const closeKeyframes = Radium.keyframes(
  {'0%':{transform: 'scaleY(1)'},
 '20%':{transform: 'scaleY(0.8)'},
 //'40%':{transform: 'scaleY(0.6)'},
 //'60%':{transform: 'scaleY(0.4)'},
 '80%':{transform: 'scaleY(0.2)'},
 '100%':{transform: 'scaleY(0)'}
},'pulse');

const styles = {
  dropDown: {
  display: 'block',
  color:'black',
  minWidth: '160px',
  padding: '0',
  margin:'0',
  background: '#EEE',
  position: 'absolute',
  listStyle:'none',
  textDecoration: 'none',
  animationDuration:'0.3s',
  width:'100%',
  height:'10%',
  position:'relative',
  transform : 'scaleY(0)',
  maxHeight : '0',
  transition:'max-height 0.3s'
  //animationName:isClick ? openKeyframes : closeKeyframes,
  //transition:isClick ? 'max-height 1s ease-in-out' : 'max-height 0.6s ease-in-out'
  }
};


class MenuContent extends React.Component{
  constructor(props){
    super(props);
    this.state = {isClick: false, hover:false};
    this.handleHover = this.handleHover.bind(this);
    this.onClick = this.onClick.bind(this);
    /*this.onClick = this.onClick.bind(this)
    this.dropDown = this.dropDown.bind(this)*/
  }

  onClick(){
      this.setState({isClick: !this.state.isClick});
  }

  handleHover(){
    console.log('hover');
    this.setState({hover: !this.state.hover});
  }

  dropDown(isClick,index){
    if(index == this.state.clickIndex){
    styles.dropDown.maxHeight =  isClick ? '9999px' : '0';
    styles.dropDown.transform = isClick ? 'scaleY(1)' : 'scaleY(0)';
    styles.dropDown.transition = isClick ? 'max-height 0.3s' : 'max-height 0.3s';
  }
    /*const styles = {
      dropDown: {
      maxHeight:isClick ? '9999px' : '0',
      display: 'block',
      color:'white',
      minWidth: '160px',
      padding: '12px 16px',
      position: 'absolute',
      transform:isClick ? 'scaleY(1)' : 'scaleY(0)',
      animationDuration:'2s',
      animationName:isClick ? openKeyframes : closeKeyframes,
      transition:isClick ? 'max-height 1s ease-in-out' : 'max-height 0.6s ease-in-out'
      }
    };*/
    return styles.dropDown;
  }
  componentWillUpdate(){
    if(this.state.isClick){
      //console.log(this.state.isClick);
      styles.dropDown.animationName = closeKeyframes;
      //console.log(styles);
    }else{
      //console.log(this.state.isClick);
      styles.dropDown.animationName = openKeyframes;
      //console.log(styles);
    }
  }

  makeContents(contents){
    let jsx = [];
    const aStyle = {
      textDecoration: 'none',
      padding: '5px 10px',
      display: 'block'
    };
    contents.forEach( content => {
      jsx.push(<li>
                <a href={'#'} style={aStyle}>
                  {content}
                </a>
              </li>);
    });
    return jsx;
  }

render(){
    const btnStyle = {
      background:'black',
      color:'white',
      border:'none',
      cursor:'pointer',
      outline:'none',
      width:'100%',
      height:'10%',
      fontSize:'1.5em',
      textAlign:'left',
      opacity: this.state.hover ? 0.6 : 1
    };
    var contents = this.makeContents(this.props.contents);
    return(

        <ul>
          <li>
            <StyleRoot>
                <button onClick={this.onClick}
                        onMouseEnter={this.handleHover}
                        onMouseLeave={this.handleHover}
                          style={btnStyle}>
                {this.props.title}
                </button>
                <ul style={this.dropDown(this.state.isClick)} className={'menu-content'}>
                  {contents}
                </ul>
            </StyleRoot>
          </li>
        </ul>

    )
  }
}
MenuContent.propTypes = { menuContent: React.PropTypes.array};
//MenuContents.defaultProps = {menuContent: defaultMenu};
module.exports = Radium(MenuContent);
