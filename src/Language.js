import React from 'react';

const Language = (props) => {
// Übergeben "props" mit Daten als Argument
    return(
        <div className='language-item'>
        <div className="language-name">{props.name}</div>
        <img
        className='language-image'
        src={props.image}
        />
        <div className="language-introduction">{props.introduction}</div>
        </div>
    )
}

export default Language;