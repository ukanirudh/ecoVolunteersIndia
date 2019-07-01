const GET_VOLUNTEERS = 'GET_VOLUNTEERS'

const INITIAL_STATE = {
  volunteers: [],
}

export function userLoginSuccess (payload) {
  return {type: GET_VOLUNTEERS, payload}
}

export function getVolunteers () {
  return (dispatch, getState) => {
    return fetch('http://localhost:8081/volunteers').then(response => response.json())
    .then((response) => {
      console.log(response)
      //dispatch(userLoginSuccess(selectedRoom))
    })
  }
}


export default function reducer (state = INITIAL_STATE, action = {}) {
  const {payload} = action
  switch (action.type) {
    case GET_VOLUNTEERS:
      return {...state, volunteers: payload}

    default:
      return state
  }
}
