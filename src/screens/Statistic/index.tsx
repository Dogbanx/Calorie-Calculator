import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { MainTabScreenProps } from '@/types/navigation'

export function Statistic({}: MainTabScreenProps<'statistic'>) {
  return (
    <SafeAreaView style={styles.page} edges={['top', 'right', 'left']}>
      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <View>
          <Text style={styles.header}>Statistic</Text>
        </View>
      </ScrollView>
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
