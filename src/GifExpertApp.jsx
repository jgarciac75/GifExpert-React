import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory.js";
import { GifGrid } from "./components/GifGrid.js";


const GifExpertApp = () =>{


    // const categorias = ['One Punch','Samurai X','Dragon Ball'];
    //const [categorias, setCategorias] = useState(['One Punch','Samurai X','Dragon Ball'])
    const [categorias, setCategorias] = useState(['One Punch']); //,'Samurai X','Dragon Ball']);

    const addCategorias = categoria => setCategorias([categoria, ...categorias]);
    // const handleAdd = (e)=>{
    //     //
    //     // setCategorias('Valor') ==> Este toca el estado y solo queda el valor como string
    //     // Toca Manipulas la Categoria...
    //     // setCategorias(categ => [...categ,'otroValor'])
    //     //
    //     setCategorias([...categorias,'Super Agente Cobra']);
    // }
    return(
        <>
        
        <h2>GifExpertApp</h2>
        {/* <button  onClick={handleAdd}>Agregar</button> */}
         {/* Paso una Funcion para poder comunicar entre todas */}
        <AddCategory addCategoria={addCategorias}/>
        <hr />
        <ol>
            {
                 categorias.map((categoria,index) => {
                    return (
                        <GifGrid 
                            key={categoria}
                            categoria={categoria}
                        />
                    //   <li key={categoria}> {categoria}</li>
                    )
                 })
            }
        </ol>
 
        </>
    );
}

export default GifExpertApp
