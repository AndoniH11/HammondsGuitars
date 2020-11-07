import React, { Component } from 'react';
import { ProductContext } from '../../context';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { FaShippingFast } from 'react-icons/fa';
import CartResumen from './CartResumen';

class Cart extends Component {

    static contextType = ProductContext

    emptyTemplate = () => {
        return (
            <div className='cesta-vacia'>
                <h3>La cesta está vacía</h3>
                <p>Añade algún artículo</p>
                <Link to='/guitars'><button>Ir a guitarras</button></Link>
            </div>
        )
    }

    fullTemplate = () => {
        const { increaseGuitar, decreaseGuitar } = this.context
        return (
            <div className='cesta-llena'>
                <div className='cesta-left'>
                    <div className='cesta-valores'>
                        <p className='item-valor'>Item</p>
                        <p className='cantidad-valor'>Cantidad</p>
                        <p className='precio-valor'>Precio</p>
                    </div>
                    {this.context.cart.map((guitar, i) => (
                        <CartItem guitar={guitar} key={i} increaseGuitar={increaseGuitar} decreaseGuitar={decreaseGuitar} />
                    ))}
                    <div className='cesta-total'>
                        <FaShippingFast className='icon' />
                        <p>Envío gratuito en 24-48h</p>
                        <p className='precio-total'>€  {this.context.total}</p>
                    </div>
                </div>
                <div className='cesta-right'>
                    <CartResumen total={this.context.total} restartCesta={this.context.restartCesta}/>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className='cart-container'>
                {this.context.cart.length > 0 ?
                    this.fullTemplate() :
                    this.emptyTemplate()}
            </div>
        );
    }
}

export default Cart;