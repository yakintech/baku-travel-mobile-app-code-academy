import { View, Text, FlatList } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { FavoritesContext } from '../../context/FavoritesContext'
import { Button } from 'react-native-paper';
import axios from 'axios';
import { useQuery } from 'react-query';

const FavoritesMain = ({navigation}: any) => {

  let { favorites, setFavorites } = useContext(FavoritesContext);


  const removeFav = (id: number) => {

    let filteredFavorites = favorites.filter(q => q.id != id);
    setFavorites([...filteredFavorites])
  }
  const renderItem = ({ item }: any) => {
    return <>
      <Text style={{ fontSize: 20 }}>{item.name}</Text>
      <Button onPress={() => removeFav(item.id)}>Remove</Button>
    </>
  }

  return (<>
  <Button onPress={() => navigation.navigate('SupplierList')}>Go to supplier</Button>
    {/* <Text style={{fontSize:30}}>Length: {favorites.length}</Text>
    <Button onPress={() => setFavorites([])}>Empty</Button>
    <FlatList
      data={favorites}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    /> */}

  </>
  )
}

export default FavoritesMain


