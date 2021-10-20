import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'

import { ClubPageScreen } from '../screens/ClubPageScreen'
import { NewUserScreen } from '../screens/NewUserPage'
import { THEME } from '../theme'

const ScreenNavigator = createStackNavigator({
    Club: ClubPageScreen,
    NewUser: NewUserScreen,
},
{
    initialRouteName: 'NewUser',
}
)

export const AppNavigation = createAppContainer(ScreenNavigator)
