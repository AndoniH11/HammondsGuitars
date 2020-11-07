import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { TiSocialInstagram } from 'react-icons/ti'
import { FaYoutube } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import usa from '../assets/img/usa.jpg'

class Footer extends React.Component {

    state = {
        email: ''
    }

    handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className='footer'>
                <div className='registro-container'>
                    <div className='nombre-container'>
                        <h1 className='nombre-tienda'>HAMMOND'S <span>GUITARS</span></h1>
                    </div>
                    <div>
                        <h3>Se el primero en enterarte!</h3>
                        <p>Inscríbete en nuestra NewsLetter y entérate de todas nuestras novedades.</p>
                    </div>
                    <div className='footer-input-container'>
                        <form>
                            <input
                                name='email'
                                type='email'
                                placeholder='Introduce tu email:'
                                onChange={(e) => this.handleChange(e)}
                            />
                            <input
                                type='submit'
                                className='submit-button'
                                value='REGISTRARSE'
                            />
                        </form>

                    </div>
                </div>
                <div className='informacion-container'>
                    <div className='informacion-apartado'>
                        <p>TERMS OF USE</p>
                        <p>INFORMACIÓN DE PRIVACIDAD</p>
                        <p>INFORMACIÓN DE COOKIES</p>
                    </div>
                    <p>Copyrigtht &copy; 2020 Hammond Guitars - All rights reserved. </p>
                </div>
                <div className='footer-icons-container'>
                    <ul>
                        <li><FaFacebookF /></li>
                        <li><TiSocialInstagram /></li>
                        <li><FaTwitter /></li>
                        <li><FaYoutube /></li>
                        <li><FaLinkedinIn /></li>
                    </ul>
                    <img src={usa} alt='american flag' />
                </div>
            </div>
        );
    }
};

export default Footer;