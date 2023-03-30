import { useState, useEffect } from 'react'
import axios from 'axios'



function useFetch(url) {
    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(null)
    const [error,setError] = useState(null)
    let interval;

    const getData = () => {
        setLoading(true) 
            axios.get(url)
            .then(
                res => {
                    setLoading(false)
                    setData(res.data)                    
                }
            )
            .catch(err => {
                setLoading(false)
                setError(err)
        })
    }


    useEffect(() => {
        getData()
        if(data!=null && error==null && loading == null) {
            interval = setInterval(() => {
                getData()
            },60 * 60 * 1000)
        }
        return () => clearInterval(interval);
    },[url])
    
    return {data, loading, error}
}

export default useFetch;