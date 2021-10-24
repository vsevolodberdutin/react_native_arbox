import { LOAD_USERS } from '../types'
import { DATA } from '../../data'

export const loadUsers = () => {
  return {
    type: LOAD_USERS,
    payload: DATA,
  }
}
