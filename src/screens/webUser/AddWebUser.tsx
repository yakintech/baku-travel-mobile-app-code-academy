import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import { WebUser } from '../../samples/sqlLite/WebUser';
import { deleteWebUserById, getAllWebUsers, saveWebUser } from '../../samples/sqlLite/webUserServices';
import { createTable, deleteTable, getDBConnection } from '../../samples/sqlLite/dbConfiguration';

const AddWebUser = () => {

    const [name, setname] = useState('');
    const [webUsers, setwebUsers] = useState<WebUser[]>([]);


    //sayfa açıldığında sql e gidip webuser ları çekiyorum. Daha sonra bunları state e dolduruyorum.
    useEffect(() => {
        loadData();
    }, [])

    const loadData = () => {

        getAllWebUsers()
            .then(data => {
                setwebUsers(data);
            })

    }

    const add = async () => {

        let webUser: WebUser = {
            name: name
        }


        saveWebUser(webUser)
            .then(res => {
                loadData();
            })

    }

    const deleteItem = (id: number) => {

                deleteWebUserById(id)
                    .then(res => {
                        loadData();
                    })

    }

    const renderItem = ({ item }: any) => {
        return <>
            <Text style={{ fontSize: 25 }}>{item.id} / {item.name}</Text>
            <Button onPress={() => deleteItem(item.id)}>Delete</Button>
        </>
    }


    return (<>
        <View>
            <Text>Name</Text>
            <TextInput onChangeText={setname} />
            <Button onPress={add}>Add</Button>
        </View>
        <Text style={{ fontSize: 30, textAlign: 'center' }}>Users</Text>
        <FlatList
            data={webUsers}
            renderItem={renderItem}
        />
    </>

    )
}

export default AddWebUser