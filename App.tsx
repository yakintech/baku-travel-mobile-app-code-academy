import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabMain from './src/navigation/tab'
import ContactList from './src/samples/ContactList'
import AddContact from './src/samples/AddContact'
import { FavoritesProvider } from './src/context/FavoritesContext'

const App = () => {

  return (<>
    <NavigationContainer>
      <FavoritesProvider>
        <TabMain />
      </FavoritesProvider>
    </NavigationContainer>
  </>
  )
}

export default App