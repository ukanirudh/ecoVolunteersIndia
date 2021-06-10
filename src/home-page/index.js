import React from 'react'
import {
  Button,
  Grid,
  Header,
  Image,
  Segment
} from 'semantic-ui-react'
import ResponsiveContainer from '../components/ResponsiveContainer'
import HomePageImg from '../static/images/homepageimg.jpg';
import CoverImg from '../static/images/coverimage_1.jpg';

const goToAboutUs = ({history}) => {
  return history && history.push('/aboutus')
}

const HomepageLayout = (props) => (
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}> We Preserve Wildlife </Header>
            <p style={{ fontSize: '1.33em' }}>
              Eco Volunteers India (EVI) is a Registered Trust, purely working
              on the conservation issues across southern and central part of Karnataka.
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}> We Support Conservation Ideas </Header>
            <p style={{ fontSize: '1.33em' }}>
              The Eco Volunteers India Trust supports a wide variety of conservation projects
              in Karnataka within the categories of wildlife management, research and education.
              These projects address the needs of existing wildlife conflicts, seek solutions
              to save endangered species and provide education and training to local people and their communities.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src={HomePageImg} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge' onClick={() => goToAboutUs(props)}>Check Them Out</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "Enthusiastic NGO"
            </Header>
            <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "Always ready to lend a helping hand."
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              <Image avatar src='/images/avatar/large/nan.jpg' />
              <b>APCCF</b>
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment placeholder>
      <Grid columns={2} stackable textAlign='center'>
        <Grid.Row verticalAlign='middle'>
          <Grid.Column>
            <Image bordered rounded size='large' src={CoverImg} />
          </Grid.Column>
          <Grid.Column>
            <Segment style={{ padding: '8em 0em' }} vertical>
              <Header as='h3' style={{ fontSize: '2em' }}>
                Breaking The Grid, Grabs Your Attention
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                Instead of focusing on content creation and hard work, we have learned how to master the
                art of doing nothing by providing massive amounts of whitespace and generic content that
                can seem massive, monolithic and worth your attention.
              </p>
              <Button as='a' size='large'> Read More </Button>
              <Header as='h3' style={{ fontSize: '2em' }}>
                Did We Tell You About Our Bananas?
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
                it's really true. It took years of gene splicing and combinatory DNA research, but our
                bananas can really dance.
              </p>
              <Button as='a' size='large'> I'm Still Quite Interested </Button>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </ResponsiveContainer>
)
export default HomepageLayout
