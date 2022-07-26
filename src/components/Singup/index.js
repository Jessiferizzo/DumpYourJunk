import React from 'react'
import { Button, Form, Grid, Header, Message, Segment, Icon } from 'semantic-ui-react'

const SignUp = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 500 }}>

      <Header as='h2' color='blue' textAlign='Center'>
        <Icon name='sign in' size='big'></Icon>SignUp for an account</Header>
      <Segment >
        <Form>
        <Form.Input fluid icon='user' iconPosition='left' placeholder='First name' />
        <Form.Input fluid icon='user' iconPosition='left' placeholder='Last name' />
          <Form.Input fluid icon='mail' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />
          <Button type='submit' fluid size='Large' color='blue'>Submit</Button>
        </Form>
      </Segment>
      <Message>
        {/*Link below need to link to our sign-up page */}
        Need to {/*<a href='#'> Login?</a>*/}
      </Message>
    </Grid.Column>

  </Grid>
)

export default SignUp