import React from 'react'
import {render} from 'react-dom'
import Radium from 'radium'
import BurgerMenu from './BurgerMenu.js'

class Example extends React.Component{

  render(){
    return(
      <div>
        <BurgerMenu menuLable={'This is menu'} />
        <main>
          test1
        </main>
      </div>
    )
  }
}
module.exports = Radium(Example);
render(<Example />, document.getElementById('example'));
