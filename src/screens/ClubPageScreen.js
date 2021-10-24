import React,{useEffect} from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import {useDispatch, useSelector} from 'react-redux'

import { Information } from '../components/Information'
import {ContactPlate} from '../components/ContactPlate'
import { THEME } from '../theme'
import { IconClub } from '../components/AppIcon'
import { loadClub } from '../store/actions/clubAction'

export const ClubPageScreen = ({ navigation }) => {
  const goToUser = () => {
    navigation.navigate('NewUser')
  }

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadClub())
  },[dispatch])

  const clubInfo = useSelector(state => state.user)

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <IconClub
          title="keyboard-arrow-left"
          name="keyboard-arrow-left"
          style={{marginLeft:"25px"}}
          onPress={goToUser}
        />
      </View>

      <View style={styles.userInfo}>
        <View>
          <Image
            source={require('../../assets/club.png')}
            style={{
              width: 120,
              height: 120,
              borderRadius: 120 / 2,
              backgroundColor: THEME.MAIN_COLOR,
            }}
          />

        </View>
        <Text
          style={{
            color: THEME.MAIN_COLOR,
            fontSize: 28,
            fontWeight: 'bold',
            marginTop: '15px',
            marginBottom: '5px',
          }}
        >
          JymGym
        </Text>
        <Text
          style={{
            color: '#E6E6FA',
            fontSize: 20,
            fontWeight: '100',
            marginTop: '10px',
          }}
        >
          Open Gym 6:00-18:00
        </Text>
        <Text
          style={{
            color: '#E6E6FA',
            fontSize: 20,
            fontWeight: '100',
            marginTop: '10px',
          }}
        >
          Rotshild 15, Tel Aviv
        </Text>
      </View>

      <View style={styles.center}>
        <ContactPlate/>
        <Information />
      </View>
    </View>
  )
}

ClubPageScreen.navigationOptions = {
  headerShown: false,
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: THEME.CLUB_COLOR,
    flex: 10,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInfo: {
    flex: 3.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    flex: 5.5,
    width: '100%',
  },
 
})
