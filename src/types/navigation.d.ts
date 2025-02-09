import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { NavigatorScreenParams } from '@react-navigation/native'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

// Основний стек додатку
export type ApplicationStackParamList = {
  Main: NavigatorScreenParams<MainTabParamList>
  notifications: undefined
  settings: undefined
}

// Таби внизу екрану
export type MainTabParamList = {
  home: undefined
  profile: undefined
  settings: undefined
}

// Тип для екранів вкладеного табу
export type MainTabScreenProps<T extends keyof MainTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<MainTabParamList, T>,
    ApplicationStackScreenProps<keyof ApplicationStackParamList>
  >

// Тип для основного стеку додатку
export type ApplicationStackScreenProps<
  T extends keyof ApplicationStackParamList,
> = NativeStackScreenProps<ApplicationStackParamList, T>
