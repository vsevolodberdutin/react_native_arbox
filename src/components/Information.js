import React from 'react'
import { View, StyleSheet, ImageBackground, Text } from 'react-native'

export const Information = ({ data }) => {
  return (
    <View style={styles.info}>
        <View style={styles.textWrap}>
          <Text style={styles.title}>
            dhfadkjsfhkladj
          </Text>
        </View>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni nihil dicta, at aspernatur saepe blanditiis quibusdam explicabo consequatur deserunt dolores temporibus exercitationem facilis, aperiam fugit beatae unde sapiente alias laboriosam sunt architecto esse quod cumque numquam? Aut, debitis! Cumque pariatur nesciunt quia omnis esse at laborum soluta culpa est perspiciatis tempore similique atque vero eum perferendis a totam ut suscipit, obcaecati enim debitis doloribus fuga placeat. Libero provident obcaecati ut error voluptates exercitationem, ea nihil? Sit quas quos officia quo a fugit voluptatum aliquam eveniet exercitationem, autem inventore debitis nemo quidem aliquid mollitia vero commodi iure animi nihil ipsa delectus!
          </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  info: {
    marginBottom: 15,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 200
  },
  textWrap: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 5,
    alignItems: 'center',
    width: '100%'
  },
  title: {
    color: '#fff',
    fontFamily: 'open-regular'
  }
})
