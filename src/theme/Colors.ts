/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

type ThemeNavigationColors = ReactNavigation.Theme['colors']

/**
 * Colors
 */
export const Colors = {
  transparent: 'rgba(0,0,0,0)',
  white: '#FFFFFF',
  white75: '#FFFFFFbf',
  white20: '#FFFFFF33',
  primary: {
    green: '#36B075',
    greenHover: '#23935D',
    greenActioned: '#0D6B3E',
    green15: '#36B07526',
    green8: '#36B07514',
    orange: '#E4601D',
    orange10: '#e77b3d',
  },
  black: {
    '2': '#F5F7FA',
    '8': '#020626',
    '10': '#DADEE5',
    '30': '#A6AAB2',
    '50': '#737780',
    '75': '#363940',
    '90': '#171C26',
    '94': '#EDEEF2',
  },
  additional: {
    blue: '#007FFF',
    blue15: '#D9ECFF',
    blue8: '#F1F8FF',
    darkBlue: '#192BCF',
    darkBlue15: '#DCDFF8',
    violet: '#7E39EE',
    sea: '#05AAC0',
  },
  system: {
    black: '#000000',
    green: '#00933B',
    green15: '#D9EFE2',
    red: '#D42419',
    red15: '#F9DEDD',
    yellow: '#E9981D',
    yellow15: '#FCEFDD',
  },
}

export const NavigationColors: ThemeNavigationColors = {
  primary: Colors.primary.green,
  background: Colors.black['2'],
  card: Colors.white,
  text: Colors.black['75'],
  border: Colors.black['2'],
  notification: Colors.primary.green15,
}

export default {
  Colors,
  NavigationColors,
}
