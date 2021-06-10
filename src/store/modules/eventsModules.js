const CREATE_EVENT = 'CREATE_EVENT'

const INITIAL_STATE = {
  eventDetails: {},
  eventList: []
}

export function createEvent (payload) {
  return {type: CREATE_EVENT, payload}
}

export function eventCreateDispatch ({eventName, eventDescription, noOfVolsReq, eventDate}) {
  return (dispatch, getState) => {
    return fetch('http://localhost:8081/postEvent', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imt1c2hhZ3JhLnVyc0BnbWFpbC5jb20iLCJpZCI6IjRkZGQ1ZDY0ZmY3Yjg2YWMxY2NjNDBmM2UzYWM4ZWE3IiwiaWF0IjoxNTY3Mzk3NzE0fQ.Dcl4PH7uhG7IujED1Fb1KdTCXoofZh4YUS-skszJUTs'}`
      },
      body: JSON.stringify({eventName, eventDescription, noOfVolsReq, eventDate})
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
