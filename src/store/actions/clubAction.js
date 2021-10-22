import { LOAD_CLUB } from '../types'
import { DATA } from '../../data'

export const loadClub = () => {
  return {
    type: LOAD_CLUB,
    payload: DATA,
  }
}
