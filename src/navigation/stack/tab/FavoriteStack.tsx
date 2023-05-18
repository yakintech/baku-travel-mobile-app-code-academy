import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavoritesMain from '../../../screens/favorites';
import axios from 'axios';
import { useMutation, useQuery } from 'react-query';
import { Button, TextInput } from 'react-native-paper';
import { queryClient } from '../../../../App';

const Favorites = createNativeStackNavigator();


const FavoriteStack = () => {
  return (
    <Favorites.Navigator>
      <Favorites.Screen name="FavoritesMain" component={FavoritesMain} />
      <Favorites.Screen name="SupplierList" component={SupplierListScreen} />
    </Favorites.Navigator>
  )
}

export default FavoriteStack


const SupplierListScreen = () => {

  const [companyName, setcompanyName] = useState('');


  let { data: response, isLoading, error, refetch } = useQuery("supplierData", () => {
    return axios.get('https://northwind.vercel.app/api/suppliers')
  }
    ,
    {
      staleTime: 100000
      // refetchInterval: 5000
    }
  )


  const { data, isLoading: postloading, mutate } = useMutation({
    mutationFn: async (data: any) => {
      let result = await axios.post('https://northwind.vercel.app/api/suppliers', data)
      return result;
    },
    onSuccess: (response) => {
      console.log('Success!', response.data);
      // refetch();
      queryClient.invalidateQueries({ queryKey: 'supplierData'})
    },
    onError: (err) => {
      console.log('Error!', err);

    }
  })

  const add = () => {
    mutate({ companyName: companyName });
  }

  return (
    <>
    {
      postloading ? <Text style={{fontSize:50}}>loading...</Text> : <></>
    }
      <View>
        <Text>Company Name</Text>
        <TextInput onChangeText={setcompanyName} />
        <Button onPress={add}>Add</Button>
      </View>
      {
        isLoading ? <Text>loading...</Text> : <FlatList
          data={response?.data}
          renderItem={({ item }: any) => <Text style={{ fontSize: 30 }}>{item.companyName}</Text>}
        />
      }
    </>
  )
}
