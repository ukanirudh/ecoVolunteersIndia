import React, {Component} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { tryUserLogin } from '../store/modules/loginModule'

class LoginForm extends Component {
  render () {
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
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button type='submit' onClick={this.props.actions.tryUserLogin}>Submit</Button>
      </Form>
    )
  }
}


const mapDispatchToProps = dispatch => {
  const actions = bindActionCreators(Object.assign({}, {
    tryUserLogin
  }), dispatch)
  return {actions, dispatch}
}

function mapStateToProps (state) {
  const { loginModule} = state
  return {
    loginModule
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
