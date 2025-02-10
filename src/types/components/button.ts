import React from 'react'
import { PressableProps, ViewStyle } from 'react-native/types'

export interface IButtonProps extends Omit<PressableProps, 'style'> {
  style?: ViewStyle
  children: React.ReactNode
}
