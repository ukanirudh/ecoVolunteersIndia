import VolunteersData from '../../static/data/volunteers.json'
const GET_VOLUNTEERS = 'GET_VOLUNTEERS'

const INITIAL_STATE = {
  volunteers: [],
}

export function fetchVolunteersSuccess (payload) {
  return {type: GET_VOLUNTEERS, payload}
}

export function getVolunteers () {
  // return (dispatch, getState) => {
  //   return fetch('http://localhost:8081/volunteers',
  //   {
  //     method: 'GET',
  //     headers: new Headers({
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imt1c2hhZ3JhLnVyc0BnbWFpbC5jb20iLCJpZCI6IjRkZGQ1ZDY0ZmY3Yjg2YWMxY2NjNDBmM2UzYWM4ZWE3IiwiaWF0IjoxNTY3Mzk3NzE0fQ.Dcl4PH7uhG7IujED1Fb1KdTCXoofZh4YUS-skszJUTs'}`
  //     })
  //   }).then(response => response.json())
  //   .then((response) => {
  //     const data = response.data
  //     //console.log(data)
  //     dispatch(fetchVolunteersSuccess(data))
  //   })
  // }
  return (dispatch, getState) => {
    dispatch(fetchVolunteersSuccess(VolunteersData))
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
