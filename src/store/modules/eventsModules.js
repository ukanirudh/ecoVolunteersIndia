const CREATE_EVENT = 'CREATE_EVENT'

const INITIAL_STATE = {
  eventDetails: {},
  eventList: []
}

export function createEvent (payload) {
  return {type: CREATE_EVENT, payload}
}

export function eventCreateDispatch () {
  return (dispatch, getState) => {
    return fetch('http://localhost:8081/postEvent', {
      method: 'POST',
      body: JSON.stringify({eventName: 'test@test.com', eventDescription: 'password', noOfVolsReq: 10, eventDate: '2019-06-22T08:08:50.200Z'})
    }).then(response => response.json())
    .then((response) => {
      console.log(response)
      //dispatch(userLoginSuccess(selectedRoom))
    })
  }
}


export default function reducer (state = INITIAL_STATE, action = {}) {
  const {payload} = action
  switch (action.type) {
    case CREATE_EVENT:
      return {...state, eventDetails: payload}

    default:
      return state
  }
}
