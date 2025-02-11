import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { NavigatorScreenParams } from '@react-navigation/native'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type ApplicationStackParamList = {
  Main: NavigatorScreenParams<MainTabParamList>
  notifications: undefined
  settings: undefined
}

export type MainTabParamList = {
  home: undefined
  profile: undefined
  statistic: undefined
}

export type MainTabScreenProps<T extends keyof MainTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<MainTabParamList, T>,
    ApplicationStackScreenProps<keyof ApplicationStackParamList>
  >

export type ApplicationStackScreenProps<
  T extends keyof ApplicationStackParamList,
> = NativeStackScreenProps<ApplicationStackParamList, T>
