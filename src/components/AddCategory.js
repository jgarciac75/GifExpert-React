import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({addCategoria}) => {

  const [inputValue, setinputValue] = useState(''); // Inicializar siempre el useState
  const handleInputChange = (e)=>{
    setinputValue( e.target.value)
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(inputValue.trim().length>2){
      addCategoria(inputValue);
      setinputValue('');
    }
        // console.log('Submint ya')

  }
    return (
        // <>
        // {/* <h1>{inputValue}</h1> */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={ (e)=> handleInputChange(e)}
             />
        </form>
        // </>
    )
}

AddCategory.propTypes ={
  addCategoria : PropTypes.func.isRequired 
};
