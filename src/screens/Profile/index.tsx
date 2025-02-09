import React from 'react'
import { View, Text } from 'react-native'
import { MainTabScreenProps } from '../../types/navigation'


export function Profile({}: MainTabScreenProps<'profile'>) {
    return (
        <View>
            <Text>Profile Screen</Text>
        </View>
    )
}
