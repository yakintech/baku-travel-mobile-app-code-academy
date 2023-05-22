import { View, Text, FlatList, Pressable } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { BaseNetwork } from '../../network/api'
import { FavoritesContext } from '../../context/FavoritesContext'
import { Button } from 'react-native-paper'
import Lottie from 'lottie-react-native';


const ExploreMain = () => {

    let { favorites, setFavorites } = useContext(FavoritesContext);

    const [products, setproducts] = useState<any[]>([]);
    const [loading, setloading] = useState(true)

    useEffect(() => {

        setTimeout(() => {
            let baseService = new BaseNetwork();
            baseService.getAll('products').then((response) => {
                setproducts(response);
                setloading(false);
            })   
        }, 3000);

    }, [])

    const favOperation = (item: any) => {

        let favControl = favorites.find((favItem) => favItem.id === item.id);
        if (!favControl)
        {
            setFavorites([...favorites, item])
        }
        else{
            let filteredFavorites = favorites.filter(q => q.id != item.id)
            setFavorites([...filteredFavorites])
        }
           
    }


    const renderItem = ({ item }: any) => {

        let isFavorites = favorites.find(q => q.id == item.id)

        return (<>
         <Text style={{fontSize:20}}>{item.name}</Text>
         <Button onPress={() => favOperation(item)}>
            {
                isFavorites ? "Remove" : "Add"
            }
         </Button>
        </>
           
        )
    }

    return (
        <>
        {
            loading ? <Lottie source={require('./../../assets/loading/loadingLottie.json')} autoPlay loop></Lottie> : <FlatList
            data={products}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
        }
   
        </>
    )
}

export default ExploreMain