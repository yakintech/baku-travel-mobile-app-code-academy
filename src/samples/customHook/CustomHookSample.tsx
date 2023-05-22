import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useProductDetail } from './useProductDetail'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native-paper';
import axios from 'axios';


const CustomHookSample = () => {
    let hookResponse = useProductDetail(1);

    return (
        <SafeAreaView>
            <Text style={{ fontSize: 35 }}>{hookResponse?.detail?.name}</Text>
        </SafeAreaView>
    )
}

const CustomHookSample2 = () => {

    const [data, setdata] = useState<any>({});
    const [loading, setloading] = useState(true)


    useEffect(() => {


        axios.get("https://northwind.vercel.app/api/products/" + 5)
            .then(res => {
                setdata(res.data);
                setloading(false);
            })

    }, [])

    return (
        <SafeAreaView>
            <Text style={{ fontSize: 35 }}>{data.name}</Text>
        </SafeAreaView>
    )
}

export default CustomHookSample