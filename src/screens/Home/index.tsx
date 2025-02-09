import React from 'react'
import { View, Text } from 'react-native'
import { MainTabScreenProps } from '../../types/navigation'


export function Home({}: MainTabScreenProps<'home'>) {
    return (
        <View>
            <Text>Home Screen</Text>
        </View>
    )
}
