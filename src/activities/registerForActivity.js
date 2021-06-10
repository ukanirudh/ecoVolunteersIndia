import React from 'react'
import { Button, Form } from 'semantic-ui-react'

const RegisterForActivity = () => {
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
      <Button type='submit'>Submit</Button>
    </Form>
  )
}

export default RegisterForActivity
