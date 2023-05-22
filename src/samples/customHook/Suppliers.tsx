import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useApiData } from './useApiData'

const Suppliers = () => {

    const { data, loading, error } = useApiData('suppliers')

    return (<>{
        loading ? <Text>loading...</Text> : <FlatList
            data={data}
            renderItem={({ item }: any) => <Text style={{fontSize:30}}>{item.companyName}</Text>}
        />
    }

    </>
    )
}

export default Suppliers