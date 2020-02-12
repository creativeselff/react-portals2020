import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import './style.css';




class Portal extends Component {
  render ( ) { 

    if (!this.props.visible) {
      return null 
    }


    const styles = {
      width: '100%',
      height: '100%',
      position: 'center',
      top: '0',
      left: '0',
      background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
      color: '#FFF'
    }
    return ReactDOM.createPortal((
      <div  style = {styles}>
        {this.props.children}
      </div>
    ), document.getElementById('modal-root'))
  }
}




class App extends Component {
  state = {
    visible: false
  }

  mostrar = () => {
    this.setState({ visible: true })
  }

   cerrar = () => {
    this.setState({ visible: false })
  }

  render() {
    return (
      <div>
      <button onClick = {this.mostrar}>
      Mostrar
      </button>
       <Portal visible={this.state.visible}>
       <button onClick = {this.cerrar}>
       Cerrar
       </button>
       <h1>
  hola desde un portal :D
  </h1>
       </Portal>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
