import React, {useEffect} from 'react';
import {FaTwitter} from 'react-icons/fa'
import {FaPhone} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import{Link} from 'react-router-dom';

const CartMensaje = () => {

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return(
        <div className='compra-container'>
            <h3>Tu compra ha sido realizada con éxito</h3>
            <p className='uppercase info-compra'>Te enviaremos un correo electrónico con los datos del pedido para que puedas hacer el seguimiento del envío.</p>
            <p className='uppercase info-compra'>Muchas gracias por confiar en Hammond Guitars</p>
            <Link to='/'>
                <button className='boton-compra-container'>
                    Volver a Inicio
                </button>
            </Link>
            <p className='como-contactar uppercase'>Si tienes cualquier duda, no dudes en contactarnos a través de los siguientes canales: </p>
            <div className='contacto'>
                <div>
                <FaPhone className='icon-compra-contacto'/>
                    <p>671 996 341</p>  
                </div>
                <div>
                <MdEmail className='icon-compra-contacto'/>
                    <p>hammondguitars@barcelona.com</p> 
                </div>
                <div>
                    <FaTwitter className='icon-compra-contacto'/>
                    <p>@hammondguitars</p>
                </div>
            </div>
        </div>
    );
};

export default CartMensaje;