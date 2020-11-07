import React from 'react';
import { novedades } from '../../data';
import Zoom from 'react-reveal/Zoom';

const Novedades = () => {
    let delay = 0
    return (
        <div className='novedades-container'>
            <h2 className='semi-titulo'>NOVEDADES</h2>
            <div className='novedades'>
                {novedades.map((item) => {
                    delay += 50
                    return (
                        
                        <Zoom key={item.id} delay={delay}>
                            <div >
                                <div className='novedad-img'
                                    style={{ backgroundImage: `url(${item.img})` }}>
                                </div>
                                <h3 className='novedad-titulo'>{item.title}</h3>
                                <p className='novedad-descripcion'>{item.description}</p>

                            </div>
                        </Zoom>

                    )
                })
                }
            </div>

        </div>
    );
};

export default Novedades;