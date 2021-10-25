import { LOAD_USERS, ADD_USER } from '../types'
import { DATA } from '../../data'
import { DB } from '../../db'

export const loadUsers = () => {
  
  return async dispatch => {
    const users = await DB.getUsers()
    //
    console.log("loadUsers1")
    console.log(users)
    //
    dispatch({
      type: LOAD_USERS,
      payload: users,
    })
    ////
    console.log("loadusers2")
    console.log(users)
    ///
  }
}

// export const loadUsers = () => {
//   console.log(DATA[0])
//   return {
//       type: LOAD_USERS,
//       payload: DATA[0],
//     }
// }

export const addUser = user => async dispatch => {
// 
console.log("user")
console.log(user[0])
//
  const payload = { ...user }
  const id = await DB.createUser(payload)

  payload.id = id
// 
console.log("id")
console.log(id)
console.log("payload")
console.log(payload)
//
  dispatch({
    type: ADD_USER,
    payload
  })
}
