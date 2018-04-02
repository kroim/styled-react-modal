import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { ModalProvider, Modal } from 'styled-react-modal'

const StyledModal = Modal.styled`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`

class FancyModalButton extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isOpen: false,
      someInput: ''
    }

    this.toggleModal = this.toggleModal.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  toggleModal (e) {
    this.setState({ isOpen: !this.state.isOpen })
  }

  handleInput (e) {
    this.setState({ someInput: e.target.value })
  }

  render () {
    return (
      <div>
        <button onClick={this.toggleModal}>Click me</button>
        <StyledModal
          isOpen={this.state.isOpen}
          onBackgroundClick={this.toggleModal}
          onEscapeKeydown={this.toggleModal}>
          <span>I'm a modal!</span>
          <button onClick={this.toggleModal}>Close me</button>
        </StyledModal>
      </div>
    )
  }
}

class App extends Component {
  render () {
    return (
      <ModalProvider>
        <span>Hey checkout this cool modal!</span>
        <FancyModalButton />
      </ModalProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
