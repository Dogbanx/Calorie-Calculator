import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { format } from 'date-fns'

import { Meal, MealType } from './types'

export interface MealsState {
  currentDate: string
  meals: Record<string, Record<MealType, Meal[]>>
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
    addMeal: (
      state,
      action: PayloadAction<{ date: string; mealType: MealType; meal: Meal }>,
    ) => {
      const { date, mealType, meal } = action.payload

      // Якщо дати немає — ініціалізуємо
      const dateMeals = state.meals[date] ?? {
        breakfast: [],
        lunch: [],
        dinner: [],
        snacks: [],
      }

      // Створюємо новий масив прийомів їжі
      const updatedMeals = {
        ...dateMeals,
        [mealType]: [...(dateMeals[mealType] ?? []), meal],
      }

      // Оновлюємо весь запис дати в state
      state.meals[date] = updatedMeals
    },
    removeMeal: (
      state,
      action: PayloadAction<{
        date: string
        mealType: MealType
        mealId: string
      }>,
    ) => {
      const { date, mealType, mealId } = action.payload
      if (state.meals[date]) {
        state.meals[date][mealType] = state.meals[date][mealType].filter(
          meal => meal.id !== mealId,
        )
      }
    },
  },
})

export const { setCurrentDate, addMeal, removeMeal } = mealsSlice.actions
export default mealsSlice.reducer
