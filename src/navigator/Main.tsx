import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'

import { FooterMenu } from '@/components/FooterMenu'
import { Home } from '@/screens/Home'
import { Profile } from '@/screens/Profile'
import { Statistic } from '@/screens/Statistic'
import {
  ApplicationStackScreenProps,
  MainTabParamList,
} from '@/types/navigation'

const Tab = createBottomTabNavigator<MainTabParamList>()

interface MainProps extends ApplicationStackScreenProps<'Main'> {}

export function MainNavigator({}: MainProps) {
  return (
    <Tab.Navigator
      safeAreaInsets={{ bottom: 0 }}
      tabBar={props => <FooterMenu {...props} />}
      detachInactiveScreens
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="home"
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: 'footer-home' as any,
        }}
      />
      <Tab.Screen
        name="statistic"
        component={Statistic}
        options={{
          tabBarLabel: 'Statistic',
          tabBarIcon: 'footer-statistic' as any,
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: 'footer-profile' as any,
        }}
      />
    </Tab.Navigator>
  )
}
