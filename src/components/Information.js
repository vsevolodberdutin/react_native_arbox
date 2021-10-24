import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import { THEME } from '../theme'

export const Information = ({ data }) => {
  return (
    <View style={styles.main}>
      <View style={styles.headerBlock}>
        <View style={styles.label}>
          <Text style={styles.header}>My Memberships</Text>
          <View style={styles.underline} />
        </View>
        <View style={styles.label}>
          <Text style={styles.header}>My Forms</Text>
          <View style={styles.underline} />
        </View>
      </View>
      <View style={styles.info}>
        <View
          style={{
            'border-top-left-radius': 20,
            'border-top-right-radius': 20,
            backgroundColor: THEME.MAIN_COLOR,
            height: 20,
            width: '100%',
          }}
        />
          <View style={styles.cardTitle}>
            <Text style={styles.titleTop}>About memberships</Text>
          </View>
            <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, doloremque consequatur autem aperiam illum sequi libero exercitationem blanditiis! Soluta, explicabo!</Text>
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
    // display:'none',
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
