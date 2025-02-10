import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { format } from 'date-fns'

import { Meal } from './types'

export interface MealsState {
  currentDate: string
  meals: Record<string, Meal[]>
}

const initialState: MealsState = {
  currentDate: format(new Date(), 'yyyy-MM-dd'),
  meals: {},
}

const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {
    setCurrentDate: (state, action: PayloadAction<string>) => {
      state.currentDate = action.payload
    },
    addMeal: (state, action: PayloadAction<{ date: string; meal: Meal }>) => {
      const { date, meal } = action.payload
      if (!state.meals[date]) {
        state.meals[date] = []
      }
      state.meals[date].push(meal)
    },
    removeMeal: (
      state,
      action: PayloadAction<{ date: string; mealId: string }>,
    ) => {
      const { date, mealId } = action.payload
      if (state.meals[date]) {
        state.meals[date] = state.meals[date].filter(meal => meal.id !== mealId)
      }
    },
  },
})

export const { setCurrentDate, addMeal, removeMeal } = mealsSlice.actions
export default mealsSlice.reducer
