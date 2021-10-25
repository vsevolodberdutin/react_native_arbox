import React, {useState, useEffect} from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {useDispatch, useSelector} from 'react-redux'

import { THEME } from '../theme'
import { loadUsers } from '../store/actions/userAction'

export const Information = ({ data }) => {
  const [isActive, setIsActive] = useState(true)

  const dispatch = useDispatch()
  const User = useSelector(state => state.users.allUsers)

  useEffect(() => {
    dispatch(loadUsers())
  },[dispatch])

  return (
    <View style={styles.main}>
      <View style={styles.headerBlock}>
        <View style={styles.label}>
          <Text 
            style={styles.header}
            onPress={() => setIsActive(true)}
          >
            My Memberships</Text>
          {isActive?
          <View style={styles.underline} />
          : <View/>}
        </View>
        <View style={styles.label}>
          <Text 
            style={styles.header}
            onPress={() => setIsActive(false)}
          >My Forms</Text>
          {isActive?
          <View/>
          :<View style={styles.underline} />
          }
        </View>
      </View>
      <View style={styles.info}>
        <View
          style={{
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: THEME.MAIN_COLOR,
            height: 20,
            width: '100%',
          }}
        />
          <View style={styles.cardTitle}>
          {isActive?
            <Text style={styles.titleTop}> {User? User.memTitle: '_About memberships'}</Text>
          : <Text style={styles.titleTop}> {User? User.formTitle: '_About forms'}</Text>
          }   
          </View>
          {isActive?
            <Text style={styles.text}>{User? User.memInfo: '_Some text memberships'}</Text>
          :  <Text style={styles.text}>{User? User.formInfo: '_Some text forms'}</Text>
          }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 15,
    flex:4,
  },
  headerBlock: {
    flex:0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    paddingLeft: 25,
    paddingRight: 25,
  },
  label: {
    alignItems: 'center',
  },
  header: {
    color: THEME.GREY_COLOR,
    fontSize: 20,
  },
  underline: {
    backgroundColor: THEME.WHITE_COLOR,
    height: 2,
    width: '60%',
    borderRadius: 2,
    marginTop: 5,
  },
  info: {
    flex: 3.5,
    backgroundColor: THEME.WHITE_COLOR,
    borderRadius: 20,
    margin: 10,
  },
  cardTitle: {
    backgroundColor: THEME.MAIN_COLOR,
  },
  titleTop: {
    color: THEME.BLACK_COLOR,
    fontSize: 18,
    marginLeft: '25px',
    marginBottom: '20px',
  },
  text: {
    color: THEME.BLACK_COLOR,
    fontSize: 16,
    margin: '25px',
  },
  
})
