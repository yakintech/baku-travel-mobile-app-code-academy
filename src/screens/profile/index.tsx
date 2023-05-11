import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { FavoritesContext } from '../../context/FavoritesContext';

const ProfileMain = () => {

  let {favorites, setFavorites} = useContext(FavoritesContext);


  return (<>
    <View>
      <Text>{favorites.length}</Text>
    </View>
  </>)
}

export default ProfileMain