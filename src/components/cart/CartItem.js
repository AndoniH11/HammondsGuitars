import React from 'react';

const CartItem = ({ guitar, increaseGuitar, decreaseGuitar }) => {
    return (
        <div className='cesta-item'>
            <img src={guitar.img1} alt='imagen de la guitarra' className='sml-guitar' />
            <div className='info'>
                <h5>{guitar.brand} {guitar.model}</h5>
                <p className='disponibilidad'>Disponibilidad inmediata</p>
            </div>
            <div className='cantidad'>
                <p onClick={() => decreaseGuitar(guitar)} className='sumador'>-</p>
                <p>{guitar.count}</p>
                <p onClick={() => increaseGuitar(guitar)} className='sumador'>+</p>
            </div>
            <div className='precio'>
                <p>€ {guitar.price},00</p>
            </div>
        </div>
    );
};

export default CartItem;