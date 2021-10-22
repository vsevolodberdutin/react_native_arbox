import { LOAD_USER } from '../types'
import { DATA } from '../../data'

export const loadUser = () => {
  return {
    type: LOAD_USER,
    payload: DATA,
  }
}
