import { View, Text, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import '../assets/i18n/i18n'
import { Button } from 'react-native-paper';

const ProductList = ({ navigation }: any) => {

    const [products, setproducts] = useState('');

    const [currentLanguage, setcurrentLanguage] = useState('az')

    const { t, i18n } = useTranslation();

    const changeLanguage = (language: string) => {

        i18n.changeLanguage(language)
            .then(res => {
                setcurrentLanguage(language);
            })

    }

    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/products')
            .then((response) => {
                setproducts(response.data);
            }
            )

    }, [])


    return (<>
        <Text style={{ fontSize: 35 }}>{currentLanguage}</Text>
        <Text style={{ fontSize: 35 }}>{t('hello')}</Text>
        <Text style={{ fontSize: 35 }}>{t('home')}</Text>

        <Button onPress={() => changeLanguage('en')}>Change Language - English</Button>
        <Button onPress={() => changeLanguage('az')}>Change Language - Azerice</Button>

        <FlatList
            data={products}
            renderItem={({ item }: any) => <Pressable onPress={() => navigation.navigate('ProductDetail', { id: item.id })}><Text style={{fontSize:25}}>{item.name}</Text></Pressable>}
        />
    </>
    )
}

export default ProductList