import { useState, useEffect } from 'react'
import axios from 'axios'

function useFetch(url) {
    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(null)
    const [error,setError] = useState(null)



    useEffect(() => {
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
    },[])
    
    return {data, loading, error}
}

export default useFetch;