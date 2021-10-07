// El Nombre use... inicia asi para saber que es un hook 

import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

// hook son cunfciones
export const useFetchGifs = (categoria)=>{
    const [state, setState] = useState(
        {
            data:[],
            loading:true
        }
    );

    useEffect(()=>{
        getGifs(categoria)
        .then(img=> {
            setTimeout(() => {
                setState({data:img,loading:false})
            }, 3000);

        }) //setImages)

    },[categoria]);  
    
    // setTimeout(() => {
    //     setState(
    //         {
    //             data:[1,2,3,4],
    //             loading:false
    //         }
    //     )
    // }, 3000);
    return state;
}