import React, { useCallback, useState } from 'react'
import {
  Keyboard,
  KeyboardAvoidingView,
  ModalProps,
  Platform,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { Button } from '@/components/Button'
import { InformationModal } from '@/components/Modals/Modal'
import { areAllPropsEqual } from '@/components/helpers'
import { addMeal } from '@/store/slicer/mealsSlice.ts'
import { MealType } from '@/store/slicer/types.ts'
import { RootState } from '@/store/store.ts'
import { Colors } from '@/theme'

interface Props extends Pick<ModalProps, 'visible' | 'onRequestClose'> {
  mealTypes: MealType
}

export const AddMealModal = React.memo((props: Props) => {
  const { visible, onRequestClose = () => {}, mealTypes } = props

  const dispatch = useDispatch()
  const currentDate = useSelector((state: RootState) => state.meals.currentDate)

  const [mealName, setMealName] = useState('')
  const [calories, setCalories] = useState('')

  const handleAddMeal = useCallback(async () => {
    Keyboard.dismiss()
    if (!mealName || !calories) {
      return
    }
    dispatch(
      addMeal({
        date: currentDate,
        mealType: mealTypes,
        meal: {
          id: Date.now().toString(),
          name: mealName,
          calories: Number(calories),
        },
      }),
    )

    setMealName('')
    setCalories('')
    onRequestClose?.({} as any)
  }, [mealName, calories, currentDate, mealTypes])

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <InformationModal
        visible={visible}
        onRequestClose={onRequestClose}
        availableButtons={false}
        content={
          <View style={{ marginBottom: 26 }}>
            <TextInput
              placeholder="Meal name"
              value={mealName}
              onChangeText={setMealName}
              keyboardType="default"
              style={styles.input}
              onSubmitEditing={handleAddMeal}
            />
            <TextInput
              placeholder="Nutrition value"
              value={calories}
              onChangeText={setCalories}
              keyboardType="numeric"
              style={styles.input}
              onSubmitEditing={handleAddMeal}
            />
            <Button onPress={handleAddMeal}>Add meal</Button>
          </View>
        }
      />
    </KeyboardAvoidingView>
  )
}, areAllPropsEqual)

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
  rowMeal: {
    padding: 10,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.primary.green15,
  },
  page: {
    backgroundColor: 'white',
    flex: 1,
    padding: 20,
    paddingTop: 5,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
    borderRadius: 10,
  },
  emptyText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 15,
  },
})
