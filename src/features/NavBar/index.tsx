import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from 'src/screens/Home'
import HomeActiveIcon from 'src/assets/home_active.svg'
import PlayList from 'src/screens/PlayList'
import History from 'src/screens/History'
import Profile from 'src/screens/Profile'
import { Screens } from 'src/constants'
import HomeIcon from 'src/assets/home.svg'
import PlayListIcon from 'src/assets/play_list.svg'
import PlayListActiveIcon from 'src/assets/play_list_active.svg'
import ClockIcon from 'src/assets/clock.svg'
import ClockActiveIcon from 'src/assets/clock_active.svg'
import UserActive from 'src/assets/user_active.svg'
import User from 'src/assets/user.svg'
import Spotify from 'src/assets/spotify.svg'
import { useTheme } from 'styled-components'

import TabButton from 'src/components/TabButton'
import { SpotifyButton } from 'src/features/NavBar/styles'

export const NavBar = (): JSX.Element => {
  const Tab = createBottomTabNavigator()
  const { colors, family, sizes } = useTheme()

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.natural.darkGrey,
          height: 75,
          paddingBottom: 10,
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontFamily: family.Montserrat.semiBold,
          fontSize: sizes['3xs'],
        },
        tabBarActiveTintColor: colors.primary,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name={Screens.HOME}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabButton
              focused={focused}
              activeIcon={<HomeActiveIcon />}
              icon={<HomeIcon />}
            />
          ),
        }}
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <TabButton
              focused={focused}
              activeIcon={<PlayListActiveIcon />}
              icon={<PlayListIcon />}
            />
          ),
        }}
        name={Screens.PLAY_LIST}
        component={PlayList}
      />
      <Tab.Screen
        options={{
          tabBarLabelStyle: {
            color: 'transparent',
          },
          tabBarIcon: () => (
            <SpotifyButton>
              <Spotify style={{ left: 1 }} />
            </SpotifyButton>
          ),
        }}
        name={Screens.SONGS}
        component={Profile}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <TabButton
              focused={focused}
              activeIcon={<ClockActiveIcon />}
              icon={<ClockIcon />}
            />
          ),
        }}
        name={Screens.HISTORY}
        component={History}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <TabButton
              focused={focused}
              activeIcon={<UserActive />}
              icon={<User />}
            />
          ),
        }}
        name={Screens.PROFILE}
        component={Profile}
      />
    </Tab.Navigator>
  )
}
