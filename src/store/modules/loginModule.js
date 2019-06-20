const USER_LOGIN = 'USER_LOGIN'

const INITIAL_STATE = {
  userDetails: {},
}

export function userLoginSuccess (payload) {
  return {type: USER_LOGIN, payload}
}

export function tryUserLogin () {
  return (dispatch, getState) => {
    return fetch('http://localhost:8081/signup', {
      method: 'POST',
      body: JSON.stringify({email: 'test@test.com', password: 'password'})
    }).then(response => response.json())
    .then((response) => {
      console.log(response)
      dispatch(userLoginSuccess(selectedRoom))
    })
  }
}


export default function reducer (state = INITIAL_STATE, action = {}) {
  const {payload} = action
  switch (action.type) {
    case USER_LOGIN:
      return {...state, userDetails: payload}

    default:
      return state
  }
}
