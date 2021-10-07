import React from 'react'

export const GifGridItem = ({id,title,url}) => {
    // console.log({id,title,url})
    return (
        <div className="card animate__animated  animate__fadeIn"
            // key={img.id}
            >
                <img src={url} alt={title}/>
                <p>{title}</p>
            {/* {img.title} */}
        </div>
    )
}
