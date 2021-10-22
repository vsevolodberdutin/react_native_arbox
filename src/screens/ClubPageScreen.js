import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {useDispatch, useSelector} from 'react-redux'

import { Information } from '../components/Information'
import { THEME } from '../theme'
import { AppIcon } from '../components/AppIcon'
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
        <AppIcon
          title="arrow-back-sharp"
          name="arrow-back-sharp"
          style={{marginLeft:"25px"}}
          onPress={goToUser}
        />
      </View>
      <View style={styles.center}>
        <Text>ClubPageScreen</Text>
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
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
