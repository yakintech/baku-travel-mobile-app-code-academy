import { useState } from "react"


const useLoading = (loading: boolean) => {

    const [isLoading, setIsLoading] = useState(loading);



    return { isLoading }
}