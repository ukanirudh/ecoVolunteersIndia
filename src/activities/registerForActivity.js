import React, {Component} from 'react'
import { Button, Header, Modal, Icon } from 'semantic-ui-react'

class RegisterForActivity extends Component {
  componentWillMount () {
    this.setState({openRegisterModal: false})
  }

  componentWillReceiveProps (nextProps) {
    const {openRegisterModal} = nextProps
    this.setState({openRegisterModal})
  }

  handleClose = () => {
    this.setState({openRegisterModal: false})
  }

  render () {
    const {openRegisterModal} = this.state
    return (
      <Modal
        open={this.state.openRegisterModal}
        onClose={this.handleClose}
      >
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <p>We've found the following gravatar image associated with your e-mail address.</p>
            <p>Is it okay to use this photo?</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={this.handleClose} inverted>
            <Icon name='checkmark' /> Register
          </Button>
          <Button color='red' onClick={this.handleClose} inverted>
            <Icon name='checkmark' /> Register
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default RegisterForActivity
