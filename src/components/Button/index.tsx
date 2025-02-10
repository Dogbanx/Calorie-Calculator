import React, { ReactNode, useMemo } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

import { useIsClickable } from '@/hooks/useisCkickel'
import { Colors } from '@/theme'
import { IButtonProps } from '@/types/components/button'

import { areAllPropsEqual } from '../helpers'
import { hasChild, selectChild } from '../helpers/createSlot'

export const Button = React.memo(
  ({ onPress, children, style, ...rest }: IButtonProps) => {
    const doesHaveChild = useMemo(
      () => hasChild(children, 'string'),
      [children],
    )

    const _onPress = useIsClickable(onPress)

    return (
      <Pressable style={[styles.button, style]} onPress={_onPress} {...rest}>
        {doesHaveChild ? (
          <Text style={styles.buttonText}>
            {selectChild(children, 'string')}
          </Text>
        ) : (
          <View>{children as ReactNode}</View>
        )}
      </Pressable>
    )
  },
  areAllPropsEqual,
)

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary.orange10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})
