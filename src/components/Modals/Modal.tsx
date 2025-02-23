import React, { useRef } from 'react'
import {
  Animated,
  Modal,
  ModalProps,
  PanResponder,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Colors } from '@/theme'

import { Button } from '../Button'
import { areAllPropsEqual } from '../helpers'

interface Props extends Pick<ModalProps, 'visible' | 'onRequestClose'> {
  content?: React.ReactNode

  heightPercentage?: number
  onSave?: () => void
  availableButtons?: boolean
}

export const InformationModal = React.memo((props: Props) => {
  const {
    visible,
    onRequestClose = () => {},
    onSave = () => {},
    content,
    heightPercentage = 90,
    availableButtons = true,
  } = props

  const insets = useSafeAreaInsets()
  const translateY = useRef(new Animated.Value(0)).current

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        if (gestureState.dy > 0) {
          translateY.setValue(gestureState.dy)
        }
      },
      onPanResponderRelease: (event, gestureState) => {
        if (gestureState.dy > 100) {
          Animated.timing(translateY, {
            toValue: 500,
            duration: 200,
            useNativeDriver: true,
          }).start(() => onRequestClose?.({} as any))
        } else {
          Animated.spring(translateY, {
            toValue: 0,
            useNativeDriver: true,
          }).start()
        }
      },
    }),
  ).current

  return (
    <Modal
      animationType="fade"
      visible={visible}
      transparent={true}
      onRequestClose={onRequestClose}
      style={{ flex: 1 }}
    >
      <View style={styles.blurView} />
      <Pressable onPress={onRequestClose} style={{ flex: 1 }} />
      <Animated.View
        style={[
          styles.container,
          {
            transform: [{ translateY }],
            paddingBottom: Platform.OS === 'ios' ? insets.bottom : 16,
            paddingHorizontal: 8,
            maxHeight: `${heightPercentage}%`,
          },
        ]}
      >
        <View style={styles.header} {...panResponder.panHandlers}>
          <View style={styles.separator} />
        </View>
        <ScrollView
          style={{ flexGrow: 1 }}
          contentContainerStyle={{
            paddingHorizontal: 15,
            paddingBottom: 0,
          }}
          bounces={false}
          showsVerticalScrollIndicator={true}
        >
          {content}
        </ScrollView>
        {availableButtons && (
          <View style={styles.buttons}>
            <View style={{ flex: 1 }}>
              <Button
                style={{
                  borderColor: Colors.black[10],
                  borderWidth: 1,
                }}
                onPress={onRequestClose}
              >
                Cancel
              </Button>
            </View>
            <View style={{ flex: 1 }}>
              <Button onPress={onSave}>Save changes</Button>
            </View>
          </View>
        )}
      </Animated.View>
    </Modal>
  )
}, areAllPropsEqual)

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingBottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: Colors.white,
  },
  header: {
    alignItems: 'center',
    marginBottom: 26,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    marginTop: 16,
    marginBottom: 8,
    gap: 8,
  },
  separator: {
    marginTop: 10,
    justifyContent: 'center',
    backgroundColor: Colors.black[10],
    width: 40,
    height: 4,
    opacity: 0.35,
    marginBottom: 15,
  },
  blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: Colors.black['90'],
    opacity: 0.7,
  },
})
