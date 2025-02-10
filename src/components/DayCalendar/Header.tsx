import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { Colors } from '@/theme'

import { Icon } from '../Icons'
import { Direction } from './types'

export interface CalendarHeaderProps {
  onPressArrowLeft: () => void
  onPressArrowRight: () => void
  disableArrowLeft?: boolean
  disableArrowRight?: boolean
  title: string
}

const CalendarHeader = (props: CalendarHeaderProps) => {
  const {
    onPressArrowLeft,
    onPressArrowRight,
    disableArrowLeft,
    disableArrowRight,
    title,
  } = props

  const _renderArrow = (direction: Direction) => {
    const isLeft = direction === 'left'
    const shouldDisable = isLeft ? disableArrowLeft : disableArrowRight
    const onPress = !shouldDisable
      ? isLeft
        ? onPressArrowLeft
        : onPressArrowRight
      : undefined
    const renderArrowDirection = isLeft ? 'left' : 'right'

    return (
      <TouchableOpacity onPress={onPress} disabled={shouldDisable}>
        <Icon
          name={`arrow-${renderArrowDirection}`}
          color={Colors.black['90']}
        />
      </TouchableOpacity>
    )
  }

  return (
    <View>
      <View style={styles.headerContainer}>
        {_renderArrow('left')}
        <Text style={styles.headerTitle}>{title}</Text>
        {_renderArrow('right')}
      </View>
    </View>
  )
}

export default CalendarHeader
CalendarHeader.displayName = 'CalendarHeader'

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  headerTitle: {
    alignSelf: 'center',
    fontSize: 20,
    color: Colors.black[90],
    fontWeight: 'bold',
  },
})
