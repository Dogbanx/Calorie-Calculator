import { addDays, format, subDays } from 'date-fns'
import React, { useCallback, useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'

import CalendarHeader from '@/components/DayCalendar/Header'
import { Icon } from '@/components/Icons'
import { AddMealModal } from '@/screens/Home/AddMealModal.tsx'
import { removeMeal, setCurrentDate } from '@/store/slicer/mealsSlice'
import { MealType } from '@/store/slicer/types'
import { RootState } from '@/store/store'
import { Colors } from '@/theme'

export function Home() {
  const dispatch = useDispatch()
  const currentDate = useSelector((state: RootState) => state.meals.currentDate)
  const mealsByType = useSelector(
    (state: RootState) =>
      state.meals.meals[currentDate] ?? {
        breakfast: [],
        lunch: [],
        dinner: [],
        snacks: [],
      } ??
      [],
  )

  const totalCalories = Object.values(mealsByType)
    .flat()
    .reduce((sum, meal) => sum + meal.calories, 0)

  const [selectedMealType, setSelectedMealType] = useState<MealType>()

  const mealTypes: MealType[] = ['breakfast', 'lunch', 'dinner', 'snacks']

  const handleRemoveMeal = (mealType: MealType, mealId: string) => {
    dispatch(removeMeal({ date: currentDate, mealType, mealId }))
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

  // const handleAddMeal = () => {
  //   if (!mealName || !calories) {
  //     return
  //   }
  //   dispatch(
  //     addMeal({
  //       date: currentDate,
  //       mealType: selectedMealType,
  //       meal: {
  //         id: Date.now().toString(),
  //         name: mealName,
  //         calories: Number(calories),
  //       },
  //     }),
  //   )
  //   setMealName('')
  //   setCalories('')
  // }

  return (
    <SafeAreaView
      style={styles.page}
      edges={['top', 'right', 'left', 'bottom']}
    >
      <View>
        <Text style={styles.header}>Diary</Text>
      </View>

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
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            Total Calories: {totalCalories} cal
          </Text>
        </View>
        <View>
          {mealTypes.map(type => (
            <View key={type}>
              <View style={styles.row}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 18,
                  }}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </Text>
                <Pressable
                  key={type}
                  style={[styles.deleteButton, { margin: 10 }]}
                  onPress={() => setSelectedMealType(type)}
                >
                  <Icon name="add" width={20} height={20} />
                </Pressable>
              </View>
              {(mealsByType[type] ?? []).length > 0 ? (
                (mealsByType[type] ?? []).map(meal => (
                  <View key={meal.id} style={styles.rowMeal}>
                    <View>
                      <Text>{meal.name}</Text>
                      <Text>{meal.calories} cal</Text>
                    </View>
                    <Pressable
                      onPress={() => handleRemoveMeal(type, meal.id)}
                      style={styles.deleteButton}
                    >
                      <Icon name="delete" width={20} height={20} />
                    </Pressable>
                  </View>
                ))
              ) : (
                <Text style={styles.emptyText}>No meals added.</Text>
              )}
            </View>
          ))}
        </View>
      </ScrollView>
      {selectedMealType && (
        <AddMealModal
          mealTypes={selectedMealType}
          onRequestClose={() => setSelectedMealType(undefined)}
          visible={Boolean(selectedMealType)}
        />
      )}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowMeal: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
    backgroundColor: Colors.primary.green15,
  },
  page: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 0,
    paddingBottom: 0,
    padding: 20,
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
    fontSize: 14,
    marginTop: 15,
  },
  deleteButton: {
    backgroundColor: Colors.primary.orange10,
    padding: 6,
    borderRadius: 15,
  },
  mealTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  mealTypeButton: {
    flex: 1,
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  selectedMealTypeButton: { backgroundColor: Colors.primary.orange10 },
})
