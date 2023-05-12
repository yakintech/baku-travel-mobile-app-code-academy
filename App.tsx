import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabMain from './src/navigation/tab'
import ContactList from './src/samples/ContactList'
import AddContact from './src/samples/AddContact'
import { FavoritesProvider } from './src/context/FavoritesContext'
import { getUserCategories, removeAllUserCategories } from './src/utils/storage/usersSavedCategoriesHelper'
import StartStack from './src/navigation/stack/start'

const App = () => {

  const [loading, setloading] = useState(true);
  const [firstLogin, setfirstLogin] = useState(true);

  useEffect(() => {

    getUserCategories()
      .then(res => {
        if (res) {
          setfirstLogin(false)
          setloading(false);
        }
        else {
          setfirstLogin(true);
          setloading(false);
        }
      })

  }, [])


  const openScreen = () => {
    if (loading) {
      return <></>
    }
    else {

      if (firstLogin)
        return <StartStack />
      else
        return <FavoritesProvider>
          <TabMain />
        </FavoritesProvider>
    }
  }


  return (<>
    <NavigationContainer>
      {
        openScreen()
      }
    </NavigationContainer>
  </>
  )
}

export default App