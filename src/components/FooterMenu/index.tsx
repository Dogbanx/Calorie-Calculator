import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs'
import React, { useMemo } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { withSafeAreaInsets } from 'react-native-safe-area-context'

import { Icon, IconNamesUnion, IconProps } from '../Icons'
import { areAllPropsEqual } from '../helpers'
import styles from './styleSheet'

interface Props extends Pick<BottomTabBarProps, 'navigation'> {
  isFocused: boolean
  name: string
  target: string
  params?: Readonly<object | undefined>
  options: BottomTabNavigationOptions
  onPress?: () => void
}

const FooterButton = React.memo(
  ({
    navigation,
    isFocused,
    name,
    target,
    params,
    options,
    onPress,
  }: Props) => {
    const tabBarIcon = options.tabBarIcon as never as IconProps['name']

    const _onPress = () => {
      const event = navigation.emit({
        type: 'tabPress',
        target: target,
        canPreventDefault: true,
      })

      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(name, params)
      }
    }

    const onLongPress = () => {
      navigation.emit({
        type: 'tabLongPress',
        target: target,
      })
    }

    return (
      <TouchableOpacity
        accessibilityRole="button"
        accessibilityState={isFocused ? { selected: true } : {}}
        accessibilityLabel={options.tabBarAccessibilityLabel}
        onPress={onPress ? onPress : _onPress}
        onLongPress={onPress ? onLongPress : undefined}
        style={styles.footerMenuItem}
        activeOpacity={1}
      >
        {tabBarIcon ? (
          <Icon
            name={
              isFocused
                ? ((tabBarIcon + '-active') as IconNamesUnion)
                : tabBarIcon
            }
          />
        ) : null}
        {typeof options.tabBarLabel === 'string' && (
          <Text style={[styles.footerText, isFocused ? styles.activeText : {}]}>
            {options.tabBarLabel}
          </Text>
        )}
      </TouchableOpacity>
    )
  },
)

const _FooterMenu = React.memo(
  ({ navigation, state, insets, descriptors }: BottomTabBarProps) => {
    const paddingBottom = useMemo(() => {
      return insets.bottom === 0 ? 20 : insets.bottom
    }, [insets])

    return (
      <View style={[styles.footerMenu, { paddingBottom }]}>
        {state.routes.map((route, index) => {
          if (index === 1) {
            return (
              <React.Fragment key={'chat'}>
                <FooterButton
                  isFocused={state.index === index}
                  navigation={navigation}
                  target={route.key}
                  key={route.name}
                  name={route.name}
                  params={route.params}
                  options={descriptors[route.key].options}
                />
              </React.Fragment>
            )
          }
          return (
            <FooterButton
              isFocused={state.index === index}
              navigation={navigation}
              target={route.key}
              key={route.name}
              name={route.name}
              params={route.params}
              options={descriptors[route.key].options}
            />
          )
        })}
      </View>
    )
  },
  areAllPropsEqual,
)

export const FooterMenu = withSafeAreaInsets(_FooterMenu)
