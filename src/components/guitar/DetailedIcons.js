import React from 'react';
import { FaShippingFast} from 'react-icons/fa';
import {FaSuitcase} from 'react-icons/fa';
import {FaTools} from 'react-icons/fa';
import {FaLifeRing} from 'react-icons/fa'


const DetailedIcons = () => {
    return (
        <div className='detalles-icons'>
            <div>
                <FaShippingFast className='icon'/>
                <p>Envío Gratuito</p>
            </div>
            <div>
                <FaSuitcase className='icon'/>
                <p>Maletín Incluido</p>
            </div>
            <div>
                <FaTools className='icon'/>
                <p>Montaje Incluido</p>
            </div>
            <div>
                <FaLifeRing className='icon'/>
                <p>Garantía de por vida</p>
            </div>
        </div>
    );
};

export default DetailedIcons;