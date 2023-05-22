import axios from "axios";
import { useEffect, useState } from "react"

export const useApiData = (entityUrl: string) => {

    const [data, setdata] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, seterror] = useState<any>({});

    useEffect(() => {
        async function getData() {

            try {
                let response = await axios.get('https://northwind.vercel.app/api/' + entityUrl);

                setdata(response.data);
                setLoading(false);
                seterror({});
            }
            catch (err) {
                seterror(err);
            }
        }

        getData();

    }, [])



    return { data, loading, error }
}