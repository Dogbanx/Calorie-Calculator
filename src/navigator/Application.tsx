import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import { ApplicationStackParamList } from '@/types/navigation'

import { MainNavigator } from './Main'

const Stack = createNativeStackNavigator<ApplicationStackParamList>()

export function Application() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
