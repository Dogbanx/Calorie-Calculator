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
  chatButton: {
    position: 'absolute',
    bottom: 0,
    width: 78,
    height: 78,
    borderRadius: 39,
    borderWidth: 5,
    borderColor: Colors.white,
    backgroundColor: Colors.primary.green,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 10,
    lineHeight: 16,
    color: Colors.black['50'],
    textAlign: 'center',
    marginTop: 4,
  },
  activeText: {
    color: Colors.primary.green,
  },
})
