import React, {Component} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { tryUserLogin } from '../store/modules/loginModule'

class LoginForm extends Component {
  state = {}

  onTryLogin = () => {
    this.props.actions.tryUserLogin(this.state)
  }

  setFormFeilds = (e, {name, value}) => {
    this.setState({[name]: value})
  }

  render () {
    return (
      <Form>
        <Form.Input fluid label='Email' name='username' onChange={this.setFormFeilds} placeholder='Email' />
        <Form.Input fluid label='Password' type='password' name='password' onChange={this.setFormFeilds} placeholder='Password' />
        <Button type='submit' onClick={this.onTryLogin}>Submit</Button>
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
