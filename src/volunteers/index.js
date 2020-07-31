import React, {Component} from 'react'
import { Image, List, Segment } from 'semantic-ui-react'
import ResponsiveContainer from '../components/ResponsiveContainer'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getVolunteers } from '../store/modules/volunteersModules'

class VolunteersList extends Component {
  state = {volunteersList: []}

  componentDidMount () {
    this.props.actions.getVolunteers()
  }

  static getDerivedStateFromProps(props, state) {
    //console.log(props, state)
    if (props.volunteers.length !== state.volunteersList.length) {
      return {
        volunteersList: props.volunteers,
      };
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {}

  render () {
    console.log(this.state)
    const {volunteersList} = this.state
    return (
      <Segment className='activity-component-container'>
        <ResponsiveContainer>
        {/* <AppHeaderDesktop fixed={false} customClassName={'others-appHeader'} /> */}
          <List celled>
          {
            volunteersList.map((volunteer, index) => {
              const {volunteerName, email, phoneNumber, occupation, bio} = volunteer
              return (
                <List.Item key={`${volunteerName}-${index}`}>
                  <Image avatar src={require(`../static/images/helen.jpg`)} />
                  <List.Content verticalAlign='middle'>
                    <List.Header>{volunteerName}</List.Header>
                      <List.Description>
                        {email && <p>{email}</p>}
                        {bio && <p>{bio}.</p>}
                        {phoneNumber && <p>{phoneNumber}</p>}
                      </List.Description>
                  </List.Content>
                </List.Item>
              )
            })
          }
          </List>
        </ResponsiveContainer>
      </Segment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  const actions = bindActionCreators(Object.assign({}, {
    getVolunteers
  }), dispatch)
  return {actions, dispatch}
}

function mapStateToProps (state) {
  const { volunteersModules: {volunteers} } = state
  return {
    volunteers
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VolunteersList)
