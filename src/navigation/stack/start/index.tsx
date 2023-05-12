import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen1 from '../../../screens/start/OnboardingScreen1';
import OnboardingScreen2 from '../../../screens/start/OnboardingScreen2';
import CategoryListScren from '../../../screens/start/CategoryListScren';

const Start = createNativeStackNavigator();

const StartStack = () => {
  return (
    <Start.Navigator>
      <Start.Screen name="Onboarding1" component={OnboardingScreen1} />
      <Start.Screen name="Onboarding2" component={OnboardingScreen2} /> 
      <Start.Screen name="CategoryList" component={CategoryListScren} />       

    </Start.Navigator>
  )
}

export default StartStack