import { View, Text, SafeAreaView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabMain from './src/navigation/tab'
import ContactList from './src/samples/ContactList'
import AddContact from './src/samples/AddContact'
import { FavoritesProvider } from './src/context/FavoritesContext'
import { getUserCategories, removeAllUserCategories } from './src/utils/storage/usersSavedCategoriesHelper'
import StartStack from './src/navigation/stack/start'
import { FirstLoginContext, FirstLoginProvider } from './src/context/FirstLoginContext'

const App = () => {


  const [loading, setloading] = useState(true);
  let { firstLogin, setFirstLogin } = useContext(FirstLoginContext);

  useEffect(() => {

    getUserCategories()
      .then(res => {
        if (res) {
          setFirstLogin(false)
          setloading(false);
        }
        else {
          setFirstLogin(true);
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
      <FirstLoginProvider>
        {
          openScreen()
        }
      </FirstLoginProvider>
    </NavigationContainer>
  </>
  )
}

export default App