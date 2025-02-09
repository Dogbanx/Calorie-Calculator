import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'

import { FooterMenu } from '@/components/FooterMenu'
import { Home } from '@/screens/Home'
import { Profile } from '@/screens/Profile'
import {
  ApplicationStackScreenProps,
  MainTabParamList,
} from '@/types/navigation'

const Tab = createBottomTabNavigator<MainTabParamList>()

function SettingsPlaceholder() {
  return null
}

interface MainProps extends ApplicationStackScreenProps<'Main'> {}

export function MainNavigator({ navigation }: MainProps) {
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
        name="profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: 'footer-profile' as any,
        }}
      />
      <Tab.Screen
        name="settings"
        component={SettingsPlaceholder}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: 'footer-settings' as any,
        }}
        listeners={() => ({
          tabPress: e => {
            e.preventDefault()
            navigation.navigate('settings')
          },
        })}
      />
    </Tab.Navigator>
  )
}
