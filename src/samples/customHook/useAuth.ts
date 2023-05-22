import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react"


const useAuth = () => {

    const [isLogin, setisLogin] = useState(false);


    useEffect(() => {

        AsyncStorage.getItem('login')
            .then(res => {
                if (res?.toString() == "true")
                    setisLogin(true)
            })

    })

    return isLogin

}