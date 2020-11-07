import React from 'react';
import {Link} from 'react-router-dom';

const DetailedAñadido = ({guitar, displayMensaje, toggleMensaje}) => {
    return (
        <div 
            className='añadido-mensaje-container'
            style={displayMensaje ? {display: 'block'}
            : {display:'none'}}
        >
            <p>Hemos añadido esta guitarra a la cesta</p>
            <img src={guitar.img1} alt='guitarra'/>
            <p>{guitar.brand} {guitar.model}</p>
            <p className='price'>€ {guitar.price}</p>
            <div>
                <button onClick={() => toggleMensaje()}>Seguir Comprando</button>
                <Link to='/cesta'><button>Ir a la cesta</button></Link>
            </div>
        </div>
    );
};

export default DetailedAñadido;