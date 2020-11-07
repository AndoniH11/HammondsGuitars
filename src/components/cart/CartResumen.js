import React from 'react';
import {Link} from 'react-router-dom'

const CartResumen = ({total, restartCesta}) => {
    return (
        <div>
            <h3>Tu pedido</h3>
            <div className='apartado-cesta'>
                <p>Subtotal</p>
                <p className='back'>€ {total},00</p>
            </div>
            <div className='apartado-cesta'>
                <p>Gastos de envío</p>
                <p className='back'>€ 0,00</p>
            </div>
            <div className='apartado-cesta'>
                <p>IVA incluido 21%</p>
                <p className='back'>€ {total - (total / 1.25)},00</p>
            </div>
            <div className='apartado-cesta ultimo'>
                <h4>TOTAL</h4>
                <p className='back'>€ {total},00</p>
            </div>
            <div>
                <p className='back'>IVA incluido</p>
            </div>
            <div>
                <Link to='compra-realizada' className='finalizar-link'>
                <button className='finalizar-boton' onClick={() => restartCesta()}>
                    Realizar Compra
                </button>
                </Link>   
            </div>

        </div>
    );
};

export default CartResumen;