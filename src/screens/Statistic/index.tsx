import React from 'react'
import { Text, View } from 'react-native'

import { MainTabScreenProps } from '@/types/navigation'

export function Statistic({}: MainTabScreenProps<'statistic'>) {
  return (
    <View>
      <Text>Statistic Screen</Text>
    </View>
  )
}
