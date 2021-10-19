import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import { ClubPageScreen } from '../screens/ClubPageScreen'
import { NewUserScreen } from '../screens/NewUserPage'

const ScreenNavigator = createStackNavigator({
    Club: ClubPageScreen,
    NewUser: NewUserScreen,
},
{
    initialRouteName: 'NewUser'
}
)

export const AppNavigation = createAppContainer(ScreenNavigator)
