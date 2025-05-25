// CREATING CUSTOM HOOKS
import { useEffect,useState } from "react";

function useCurrencyInfo(currency)
{   
    //var-data is used to store the json result fetched by api
    const [data, setData] = useState({})  
    // why use Effect - as we need to fetch this api result several times 
    // when the currency is changed,  so currency is a dependecy
    useEffect( ()=> {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then( (res) => {
            console.log("Response: ",res);            
            return res.json()
         })
        .then( (res) => setData(res[currency]))
        .catch(err => console.error("Fetch error:", err));
        
    },[currency]) // currency - dependency
    console.log("Final data",data);   
    
    return data
}

export default useCurrencyInfo;

// exporting the whole function as react hooks also return the whole function 
// which is used to set the data required
