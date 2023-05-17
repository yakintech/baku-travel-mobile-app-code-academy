import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';
import './src/assets/i18n/i18n'
import { Button } from 'react-native-paper';
import ProductList from './src/languageSample/ProductList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ProductDetail from './src/languageSample/ProductDetail';
import axios from 'axios';

const AppStack = createNativeStackNavigator();


const App2 = () => {

    return (
        <RefSample></RefSample>
        // <NavigationContainer>
        //     <AppStack.Navigator>
        //         <AppStack.Screen name="ProductList" component={ProductList} />
        //         <AppStack.Screen name="ProductDetail" component={ProductDetail} />

        //     </AppStack.Navigator>
        // </NavigationContainer>

    )
}

export default App2




const RefSample = () => {

    const [products, setproducts] = useState([])
 

    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/products')
            .then((response) => {
                setproducts(response.data);
            }
            )

    }, [])

    let flatListRef = useRef<FlatList>(null);

    const toEnd = () => {        
        flatListRef.current?.scrollToEnd();
    }

    return (<SafeAreaView>
        <Button onPress={() => toEnd()}>Scroll to End</Button>
        <FlatList
            ref={flatListRef}
            data={products}
            renderItem={({item}:any) => <Text style={{fontSize:30}}>{item.name}</Text>}
        />
    </SafeAreaView>)


}