import React from 'react';

const GuitarsEmpty = () => {
    return (
        <div className='no-resultados-container'>
            <h3>Lo sentimos, ninguna de nuestras guitarras coinciden con los parámetros de su búsqueda.</h3>
            <p>Prueba a cambiar los párametros de busqueda e intentalo de nuevo.</p>
        </div>
    );
};

export default GuitarsEmpty;