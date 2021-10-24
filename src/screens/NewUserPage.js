import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { THEME } from '../theme'
import { Icon, MaterialIcon, MaterialIconCard } from '../components/AppIcon'
import { loadUser } from '../store/actions/userAction'

export const NewUserScreen = ({ navigation }) => {
  const goToClub = () => {
    navigation.navigate('Club')
  }

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch])

  const userInfo = useSelector((state) => state.user)

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Icon
          title="notifications-outline"
          name="notifications-outline"
          style={{ marginRight: '25px' }}
          onPress={() => console.log('notifications-outline')}
        />
        <Icon
          title="search"
          name="search"
          style={{ marginRight: '25px' }}
          onPress={() => console.log('search')}
        />
      </View>

      <View style={styles.userInfo}>
        <View style={styles.userFoto}>
          <Image
            source={require('../../assets/newUser.png')}
            style={{
              width: 160,
              height: 160,
              borderRadius: 160 / 2,
              backgroundColor: THEME.CLUB_COLOR,
            }}
          />

          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 50 / 2,
              backgroundColor: THEME.MAIN_COLOR,
              position: 'absolute',
              bottom: '0px',
              right: '0px',
            }}
          >
            <View
              style={{
                position: 'absolute',
                bottom: '10px',
                right: '10px',
              }}
            >
              <MaterialIcon
                title="add-a-photo"
                name="add-a-photo"
                onPress={() => console.log('add-a-photo')}
              />
            </View>
          </View>
        </View>
        <Text
          style={{
            color: THEME.MAIN_COLOR,
            fontSize: 28,
            fontWeight: 'bold',
            marginTop: '15px',
          }}
        >
          New User
        </Text>
        <Text
          style={{
            color: THEME.GREY_COLOR,
            fontSize: 25,
            fontWeight: '100',
            marginTop: '15px',
          }}
        >
          Body Builder
        </Text>
      </View>

      <View style={styles.card}>
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
          <Text style={styles.titleTop}>My Clubs</Text>
        </View>

        <View style={styles.cardInfo}>
          <Image
            source={require('../../assets/icon.png')}
            style={{
              width: 50,
              height: 50,
              borderRadius: 50 / 2,
              backgroundColor: THEME.CLUB_COLOR,
            }}
          />
          <View style={styles.cardInfoBody}>

            <View style={{marginLeft: 10}}>
              <Text style={styles.cardTextMain}>Jym</Text>
              <Text style={styles.cardTextActive}>Active</Text>
            </View>

            <View style={styles.twoIcons}>
              <MaterialIconCard
                title="phone-forwarded"
                name="phone-forwarded"
                onPress={() => console.log('phone-forwarded')}
              />
              <MaterialIcon
                title="keyboard-arrow-right"
                name="keyboard-arrow-right"
                style={{ marginRight: '20px', marginLeft: '14px' }}
                onPress={goToClub}
              />
            </View>

          </View>

        </View>

        <View style={styles.cardTitle}>
          <Text style={styles.title}>Personal Details</Text>
          <View style={styles.twoIcons}>
            <MaterialIconCard
              title="edit"
              name="edit"
              onPress={() => console.log('edit')}
            />
            <Text
              style={{
                color: THEME.BLACK_COLOR,
                fontSize: 20,
                fontWeight: '100',
                marginLeft: '5px',
              }}
            >
              Edit
            </Text>
          </View>
        </View>
        <View style={styles.cardInfo}>
          <MaterialIconCard
            title="cake"
            name="cake"
            onPress={() => console.log('cake')}
          />
          <View style={{ paddingLeft: '30px' }}>
            <Text style={styles.CardTextLight}>Birthday</Text>
            <Text style={styles.cardTextMain}>January 1, 1990</Text>
          </View>
        </View>
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
  userInfo: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userFoto: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flex: 5,
    justifyContent: 'start',
    alignItems: 'center',
    borderRadius: '20px',
    margin: '10px',
    backgroundColor: THEME.WHITE_COLOR,
  },
  cardTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    backgroundColor: THEME.MAIN_COLOR,
  },
  titleTop: {
    color: THEME.BLACK_COLOR,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: '25px',
    marginBottom: '20px',
  },
  title: {
    color: THEME.BLACK_COLOR,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: '25px',
    marginBottom: '20px',
    marginTop: '20px',
  },
  cardInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 25,
    width: '100%',
    backgroundColor: THEME.WHITE_COLOR,
  },
  cardInfoBody: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  twoIcons: {
    flexDirection: 'row',
    alignContent:'center',
    marginRight: '25px',
  },
  cardTextMain: {
    color: THEME.BLACK_COLOR,
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardTextActive: {
    color: THEME.USER_COLOR,
    fontSize: 18,
    fontWeight: 'bold',
  },
  CardTextLight: {
    color: THEME.BLACK_COLOR,
    fontSize: 18,
    fontWeight: '100',
  },
})
