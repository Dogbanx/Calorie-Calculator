import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { MainTabScreenProps } from '@/types/navigation'

export function Profile({}: MainTabScreenProps<'profile'>) {
  return (
    <SafeAreaView
      style={styles.page}
      edges={['top', 'right', 'bottom', 'left']}
    >
      <Text style={styles.header}>My profile</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    marginTop: 5,
    fontSize: 30,
    flex: 1,
    textAlign: 'center',
  },
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
})
