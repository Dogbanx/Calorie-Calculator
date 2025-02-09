import { ColorValue } from 'react-native'
import { SvgProps } from 'react-native-svg'

export type IIconProps = SvgProps & {
  color?: ColorValue
  width?: number
  height?: number
}
