import { LOAD_USERS, ADD_USER } from '../types'
import { DATA } from '../../data'
import { DB } from '../../db'

// export const loadUsers = () => {
//   return async dispatch => {
//     const users = await DB.getUsers()
//     dispatch({
//       type: LOAD_USERS,
//       payload: users,
//     })
//   }
// }

export const loadUsers = () => {
  return {
      type: LOAD_USERS,
      payload: DATA[0],
    }
}

// export const addUser = user => async dispatch => {
//   const payload = { ...user }
//   const id = await DB.createUser(payload)

//   payload.id = id

//   dispatch({
//     type: ADD_USER,
//     payload
//   })
// }
