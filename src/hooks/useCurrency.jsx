import {useEffect,useState} from 'react'


function useCurrency(currency){

    const [data,setData]=useState({})

    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((resp)=> resp.json())
        .then((json_resp)=> {
            setData(json_resp[currency])
        })
    },[currency])
    console.log(data)
    return data 
}

export default useCurrency;