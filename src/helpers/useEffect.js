import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = url => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(async () => {
        axios.get(url,'')
        .then(res => {
            setData(res.data)
            setLoading(false)
        })
        .catch(err => {
            console.error(err); 
        })
    }, [])

    return {data,loading}
}

export default useFetch