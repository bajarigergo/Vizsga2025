import React ,{ createContext, useEffect, useState } from 'react'
import { myAxios } from './MyAxios'

export const ApiContext = createContext("")


export const ApiProvider = ({children}) => {
    const [szavak,setSzavak] = useState([])
    const [temak,setTemak] = useState([])
    const [szavakTemaval,setSzavakTemaval] = useState([])


    const fetchSzavak = async () => {
        try{
            const response = await myAxios.get('/szavak')
            setSzavak(response.data)
        }catch (e){
            console.log(e)
        }
    }
    
    const fetchTemak = async () =>{
        try{
            const response = await myAxios.get('/tema')
            setTemak(response.data)
        }catch (e){
            console.log(e);
        }
}
 const fetchSzavakTemaval = async () =>{
    try{
        const response = await myAxios.get('/szavak/tema')
        setSzavakTemaval(response.data)
    }catch (e){
        console.log(e);
    }
}
useEffect(() => {
    fetchSzavak()
    fetchTemak()
    fetchSzavakTemaval()
},[])
    return (
        <ApiContext.Provider
        value={{
            szavak,
            temak,
            szavakTemaval
        }}>
            {children}
        </ApiContext.Provider>
    );
}