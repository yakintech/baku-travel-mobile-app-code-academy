import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const OnboardingScreen1 = ({navigation}: any) => {
  return (
    <View>
      <Text>Onboarding1 Onboarding1Screen</Text>
      <Button onPress={() => navigation.navigate('Onboarding2')}>Go to Onboarding2 Screen</Button>
    </View>
  )
}

export default OnboardingScreen1