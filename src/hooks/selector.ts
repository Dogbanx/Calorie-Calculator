import { useSelector } from 'react-redux'

import { TState } from '@/store/types'

export function useMeal() {
  return useSelector((state: TState) => state.meals)
}
