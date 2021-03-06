import React from 'react'
import { Segment, Container, Grid, Header, List } from 'semantic-ui-react'

const AppFooter = () => {
  return (
    <Segment inverted vertical style={{ padding: '2em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={4}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Call us: 9620114334 </List.Item>
                <List.Item as='a'>Email us: evitrust.official@gmail.com</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={4}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Awareness Programs</List.Item>
                <List.Item as='a'>Crowd management at Bandipur & BRT</List.Item>
                <List.Item as='a'>Clean up drives</List.Item>
                <List.Item as='a'>Anti snaring</List.Item>
                <List.Item as='a'>Fire lining</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted> Our Mission </Header>
              <p>
                Let us leave this earth in a better shape than before
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  )
}

export default AppFooter
