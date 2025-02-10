import { addDays, format, subDays } from 'date-fns'
import React, { useCallback, useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'

import { Button } from '@/components/Button'
import CalendarHeader from '@/components/DayCalendar/Header'
import { Icon } from '@/components/Icons'
import { addMeal, removeMeal, setCurrentDate } from '@/store/slicer/mealsSlice'
import { RootState } from '@/store/store'
import { Colors } from '@/theme'

export function Home() {
  const dispatch = useDispatch()
  const currentDate = useSelector((state: RootState) => state.meals.currentDate)
  const meals = useSelector(
    (state: RootState) => state.meals.meals[state.meals.currentDate] || [],
  )
  const totalCalories = meals.reduce((sum, meal) => sum + meal.calories, 0)
  const [mealName, setMealName] = useState('')
  const [calories, setCalories] = useState('')

  const handleAddMeal = () => {
    if (!mealName || !calories) {
      return
    }
    dispatch(
      addMeal({
        date: currentDate,
        meal: {
          id: Date.now().toString(),
          name: mealName,
          calories: Number(calories),
        },
      }),
    )
    setMealName('')
    setCalories('')
  }

  const handleRemoveMeal = (mealId: string) => {
    dispatch(removeMeal({ date: currentDate, mealId }))
  }

  const onPrevDayPress = useCallback(() => {
    dispatch(
      setCurrentDate(format(subDays(new Date(currentDate), 1), 'yyyy-MM-dd')),
    )
  }, [currentDate])
  const onNextDayPress = useCallback(() => {
    dispatch(
      setCurrentDate(format(addDays(new Date(currentDate), 1), 'yyyy-MM-dd')),
    )
  }, [currentDate])

  return (
    <SafeAreaView style={styles.page} edges={['top', 'right', 'left']}>
      <View>
        <Text style={styles.header}>Diary</Text>
      </View>
      <View style={{ padding: 20, paddingTop: 5 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        />
        <CalendarHeader
          title={format(currentDate, 'EEE, dd MMM')}
          onPressArrowLeft={onPrevDayPress}
          onPressArrowRight={onNextDayPress}
        />
        <TextInput
          placeholder="Meal name"
          value={mealName}
          onChangeText={setMealName}
          style={styles.input}
        />
        <TextInput
          placeholder="Nutrition value"
          value={calories}
          onChangeText={setCalories}
          keyboardType="numeric"
          style={styles.input}
        />
        <Button onPress={handleAddMeal}>Add meal</Button>
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            Total Calories: {totalCalories} cal
          </Text>
        </View>
        <View>
          {meals.length > 0 ? (
            meals?.map(meal => (
              <View key={meal.id} style={styles.row}>
                <View>
                  <Text>{meal.name}</Text>
                  <Text>{meal.calories} cal</Text>
                </View>
                <Pressable
                  onPress={() => handleRemoveMeal(meal.id)}
                  style={styles.deleteButton}
                >
                  <Icon name="delete" width={20} height={20} />
                </Pressable>
              </View>
            ))
          ) : (
            <Text style={styles.emptyText}>It's empty here.</Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    marginTop: 10,
    marginHorizontal: 30,
    fontSize: 30,
  },
  row: {
    padding: 10,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  emptyText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20,
  },
  deleteButton: {
    backgroundColor: Colors.primary.orange10,
    padding: 6,
    borderRadius: 15,
  },
})
