import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const ProductDetail = ({ navigation, route }: any) => {

    const [detail, setdetail] = useState<any>({});

    const id = route.params.id;

    const { t } = useTranslation();

    useEffect(() => {
        axios.get(`https://northwind.vercel.app/api/products/${id}`)
            .then((response) => {
                setdetail(response.data);
            }
            )
    })

    return (<>
        <View>
            <Text style={{fontSize:25}}>{t("name")} {detail.name}</Text>
            <Text style={{fontSize:25}}>{t("unitprice")}: {detail.unitPrice}</Text>
        </View>
    </>
    )
}

export default ProductDetail