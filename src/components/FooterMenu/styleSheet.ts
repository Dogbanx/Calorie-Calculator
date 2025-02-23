import { StyleSheet } from 'react-native'

import { Colors } from '@/theme'

export default StyleSheet.create({
  footerMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: Colors.black['10'],
    paddingTop: 8,
    position: 'relative',
    overflow: 'visible',
  },
  footerMenuItem: {
    alignItems: 'center',
    flex: 1,
  },
  chatButtonWrapper: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
  },

  footerText: {
    fontSize: 12,
    lineHeight: 14,
    color: Colors.black['90'],
    textAlign: 'center',
    marginTop: 4,
  },
  activeText: {
    color: Colors.primary.orange10,
  },
})
