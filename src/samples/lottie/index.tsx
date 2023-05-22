import { View, Text, SafeAreaView } from 'react-native'
import React, { useRef } from 'react'
import Lottie from 'lottie-react-native';
import { Button } from 'react-native-paper';


const LottieSample = () => {

    let animationRef = useRef<Lottie>(null);


    const pause = () => {
        animationRef.current?.pause();
    }

    const run = () => {
        animationRef.current?.play();
    }

    return (<>
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>

            <Lottie ref={animationRef} source={require('./runcatrun.json')} autoPlay loop/>

        </SafeAreaView>
        <View>
            <Button onPress={pause}>Pause</Button>
            <Button onPress={run}>Run</Button>

        </View>
    </>


    )
}

export default LottieSample