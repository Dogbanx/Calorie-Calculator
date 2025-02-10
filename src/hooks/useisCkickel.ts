import { useCallback, useRef } from 'react'

import { IButtonProps } from '@/types/components/button'

export function useIsClickable(onPress: IButtonProps['onPress']) {
  const isClickable = useRef(true)

  return useCallback(
    (e: any) => {
      if (onPress && isClickable.current) {
        isClickable.current = false
        setTimeout(() => {
          isClickable.current = true
        }, 500)
        return onPress(e)
      }
      return () => {}
    },
    [onPress],
  )
}
