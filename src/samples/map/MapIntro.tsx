import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import MapView, { Marker, Polyline } from 'react-native-maps'
import { Button, TextInput } from 'react-native-paper'

const MapIntro = () => {

    const [latitude, setlatitude] = useState('0');
    const [longitude, setlongitude] = useState('0');
    const [region, setregion] = useState<any>({
        latitude: Number(0),
        longitude: Number(0),
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    })


    const tokyoRegion = {
        latitude: 35.6762,
        longitude: 139.6503,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    };
    const chibaRegion = {
        latitude: 35.6074,
        longitude: 140.1065,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    };


    const go = () => {

        setregion({
            latitude: Number(latitude),
            longitude: Number(longitude),
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        })

        // latitude: 40.38413271080263,
        // longitude: 49.91057788008916,
    }

    
    return (<>
        <View>
            <TextInput onChangeText={setlatitude} />
            <TextInput onChangeText={setlongitude} />
            <Button onPress={go}>Go</Button>
        </View>
        <View style={styles.container}>
            <MapView
      
                style={styles.map}
                //specify our coordinates.
                // initialRegion={region}
                region={tokyoRegion}
            >

                <Polyline
                    coordinates={[tokyoRegion, chibaRegion]} //specify our coordinates
                    strokeColor={"tomato"}
                    strokeWidth={3}
                    lineDashPattern={[1]}
                />

                {/* <Marker 
                coordinate={region} 
                pinColor='green'
                /> */}

            </MapView>
        </View>
    </>
    )
}

const styles = StyleSheet.create({
    container: {
        // ...StyleSheet.absoluteFillObject,
        flex: 1, //the container will fill the whole screen.
        justifyContent: "flex-end",
        alignItems: "center",
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
})

export default MapIntro