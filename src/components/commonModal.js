import React, {Component} from 'react'
import { Header, Modal } from 'semantic-ui-react'

class CommonModal extends Component {

  render () {
    const {TriggerComp, modalHeader, ModalContent, size='tiny'} = this.props
    console.log(TriggerComp)
    return (
      <Modal
        trigger={TriggerComp}
        closeIcon
        size={size}
      >
        <Modal.Header>{modalHeader}</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            {/*<Header>Enter your details</Header>*/}
          </Modal.Description>
          <ModalContent />
        </Modal.Content>
      </Modal>
    )
  }
}

export default CommonModal
