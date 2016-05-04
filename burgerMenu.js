import React from 'react'
import {render} from 'react-dom'
import Radium from 'radium'



class Button extends React.Component {

  constructor(props){
    super(props)
    this.props = {styles:''}
    this.state = {hover:false,isOpen:false}
  }
  handleHover(){
    this.setState({hover: !this.state.hover})
  }

  onClick(){
    this.setState({isOpen:!this.state.isOpen});
  }

  getLineStyle(index) {
    return {
      position: 'absolute',
      height: '20%',
      left: 0,
      right: 0,
      top: 20 * (index * 2) + '%',
      opacity: this.state.hover ? 0.6 : 1,
      background: 'black'
    };
  }
  getMenuStyle(isOpen){
    return {
    position: 'fixed',
    left: 0,
    zIndex: 2,
    width:'300px',
    height: '100%',
    transform: isOpen ? '' : 'translate3d(-100%, 0, 0)',
    transition: 'all 2s',
    hidden: isOpen,
    background: 'red'
    };
  }
  getMenuContent(){
    return(
      <div>
        <div>a</div>
        <div>b</div>
        <div>c</div>
      </div>
    )
  }


  render() {
    const  buttonStyle = {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      margin: 0,
      padding: 0,
      border: 'none',
      fontSize: 12,
      color: 'transparent',
      background: 'transparent',
      outline: 'none'
    };
    const divStyle = {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px',
      zindex: 1
    }
    let icon = (
      <span>
         <span className="bm-burger-bars" style={ this.getLineStyle(0)}></span>
         <span className="bm-burger-bars" style={ this.getLineStyle(1)}></span>
         <span className="bm-burger-bars" style={ this.getLineStyle(2)}></span>
       </span>
    );
    return (
     <main>
        <div className="menu" style={this.getMenuStyle(this.state.isOpen)} onClick={this.onClick.bind(this)}>
          {this.getMenuContent()}
        </div>
        <div className="bm-burger-button" style={divStyle}>
          { icon }
          <button
            onMouseEnter={this.handleHover.bind(this)}
            onMouseLeave={this.handleHover.bind(this)}
            onClick={this.onClick.bind(this)}
            style={ buttonStyle }>
            Open Menu
          </button>
        </div>
     </main>
    );
  }
}
module.exports = Radium(Button);

render(<Button>This is a Button</Button>
  , document.getElementById('example'));
