import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';
import './src/assets/i18n/i18n'
import { Button } from 'react-native-paper';
import ProductList from './src/languageSample/ProductList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ProductDetail from './src/languageSample/ProductDetail';

const AppStack = createNativeStackNavigator();


const App2 = () => {

    return (
            <NavigationContainer>
                <AppStack.Navigator>
                    <AppStack.Screen name="ProductList" component={ProductList} />
                    <AppStack.Screen name="ProductDetail" component={ProductDetail} />

                </AppStack.Navigator>
            </NavigationContainer>

    )
}

export default App2




// const ExploreStack = () => {
//   return (
//     <Explore.Navigator>
//       <Explore.Screen name="ExploreMain" component={ExploreMain} />
//     </Explore.Navigator>
//   )
// }