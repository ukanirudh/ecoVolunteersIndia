import React, {Component} from 'react'
import { Button, Form, Input } from 'semantic-ui-react'
import CommonModal from '../components/commonModal'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { eventCreateDispatch } from '../store/modules/eventsModules'

class CreateEvent extends Component {
  state = {}

  onEventCreate = () => {
    this.props.actions.eventCreateDispatch(this.state)
  }

  setFormFeilds = (e, data) => {
    console.log(data)
    const {name, value} = data
    this.setState({[name]: value, 'eventDate': '2019-06-22T08:08:50.200Z'})
  }

  render () {
    console.log(this)
    return (
      <Form>
        <Form.Field>
          <label>Event Name</label>
          <Input name='eventName' placeholder='Event Name' onChange={this.setFormFeilds} />
        </Form.Field>
        <Form.Field>
          <label>Event Description</label>
          <Input name='eventDescription' placeholder='Event Description' onChange={this.setFormFeilds} />
        </Form.Field>
        <Form.Field>
          <label>Number of Volunteers required</label>
          <Input name='noOfVolsReq' placeholder='Number of Volunteers required' onChange={this.setFormFeilds} />
        </Form.Field>
        <Form.Field>
          <label>Event Date</label>
          <Input name='eventDate' placeholder='Event Date' />
        </Form.Field>
        <Button type='submit' onClick={this.onEventCreate}>Submit</Button>
      </Form>
    )
  }
}


const mapDispatchToProps = dispatch => {
  const actions = bindActionCreators(Object.assign({}, {
    eventCreateDispatch
  }), dispatch)
  return {actions, dispatch}
}

function mapStateToProps (state) {
  const { eventsModules} = state
  return {
    eventsModules
  }
}

const ConnectedCreateEvent = connect(mapStateToProps, mapDispatchToProps)(CreateEvent)

const ModalWrapperComponent = () => <CommonModal TriggerComp={<Button> Log in </Button>} modalHeader={'Create Event'} ModalContent={ConnectedCreateEvent} />

export default ModalWrapperComponent
