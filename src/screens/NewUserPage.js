import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

import { THEME } from '../theme'
import { AppIcon } from '../components/AppIcon'

export const NewUserScreen = ({ navigation }) => {
  const goToClub = () => {
    navigation.navigate('Club')
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <AppIcon
          title="notifications-outline"
          name="notifications-outline"
          style = {{marginRight:"25px"}}
          onPress={() => console.log('notifications-outline')}
        />
        <AppIcon
          title="search"
          name="search"
          style = {{marginRight:"25px"}}
          onPress={() => console.log('search')}
        />
      </View>
      <View style={styles.center}>
        <Text>NewUserScreen</Text>
        <Button title="to club" onPress={goToClub} />
      </View>
    </View>
  )
}

NewUserScreen.navigationOptions = {
  headerShown: false,
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: THEME.USER_COLOR,
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    backgroundColor: THEME.USER_COLOR,
  },
  center: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
