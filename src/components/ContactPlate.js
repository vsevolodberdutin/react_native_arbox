import React from 'react'
import { View, StyleSheet, Linking } from 'react-native'
import { THEME } from '../theme'
import { IconClubCard } from './AppIcon'

export const ContactPlate = (data) => {
  return (
    <View style={styles.card}>
      <IconClubCard
        title="phone"
        name="phone"
        color={THEME.MAIN_COLOR}
        onPress={() => console.log('phone')}
      />
      <IconClubCard
        title="language"
        name="language"
        color={THEME.BLACK_COLOR}
        onPress={()=>{ Linking.openURL(data.props)}}
      />
      <IconClubCard
        title="mail-outline"
        name="mail-outline"
        color={THEME.MAIN_COLOR}
        onPress={() => console.log('mail-outline')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 0.5,
    backgroundColor: THEME.WHITE_COLOR,
    borderRadius: 20,
    margin: 10,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
})
