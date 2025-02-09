import DefaultVariables from './Colors'
import ImagesVariables from './Images'

const Theme = {
  Images: ImagesVariables,
  ...DefaultVariables,
}

export default Theme

export const { Images, NavigationColors, Colors } = Theme
