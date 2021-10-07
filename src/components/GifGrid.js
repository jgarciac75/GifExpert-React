// import React, { useState, useEffect } from 'react'
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import {GifGridItem} from './GifGridItem'
// import {getGifs} from '../helpers/getGifs'

export const GifGrid = ({categoria}) => {
    const {data:images,loading} = useFetchGifs(categoria);
    // console.log(data,loading)
    // const [images, setImages] = useState([]);
    // // const [count, setCount] = useState(0);
    // // Ejectura una instruccioon cuando se ejecuta por primera vez
    // // Primer Parametros es la funcion a utilizar y la segunda las dependencias
    // useEffect(()=>{
    //     // getGifs()
    //     getGifs(categoria).then(setImages)

    // },[categoria]);    

//    getGifs();
    return (
        <>
            <h3 className="animate__animated  animate__fadeIn">{categoria}</h3>
            {/* {loading?<p>Cargando...</p>:'Datos Cargados...'} */}
        {loading&&<p>Cargando...</p>}
        <div className="card-grid">
            {/* <ol> */}
                {
                    // images.map(({id,title,url}) =>
                    //      (
                    //         <li 
                    //             key={id} >
                    //             {title}
                    //             <img src={url}/>
                    //         </li>                            
                    //     ))
                    
                    images.map(img =>
                         (
                             <GifGridItem 
                                //img={img} 
                                key={img.id}
                                {...img} // Enviar las Propiedades como una Propuedad Independient
                                />
                        )
                    ) 

                }
                
            {/* </ol> */}
            {/* <h3>{count}</h3> */}
            {/* <button onClick={()=>setCount(count+1)}>Add Count</button> */}
        </div>
        </>
    )
}
