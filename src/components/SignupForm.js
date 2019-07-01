import React, {Component} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { tryUserSignup } from '../store/modules/loginModule'

class SingupForm extends Component {
  render () {
    console.log(this.props)
    return (
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input placeholder='First Name' />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Last Name' />
        </Form.Field>
        <Button type='submit' onClick={this.props.actions.tryUserLogin}>Submit</Button>
      </Form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  const actions = bindActionCreators(Object.assign({}, {
    tryUserSignup
  }), dispatch)
  return {actions, dispatch}
}

function mapStateToProps (state) {
  const { loginModule} = state
  return {
    loginModule
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingupForm)
