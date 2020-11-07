import React from 'react';
import DetallesIcons from './DetailedIcons';

const Detalles = ({ state, selectImg, setHand, addToCart, toggleMensaje }) => {
    return (
        <div className='detalles'>
            <div className='guitar-img'>
                <div>
                    <img
                        src={state.mainImg}
                        alt={'the guitar'}
                        className='main-img'
                    />
                </div>
                <div className='small-guitars-container'>
                    <img
                        src={state.guitar.img1}
                        alt={'the guitar'}
                        className= {state.selectedImg === 1 ? 'small-img selected' : 'small-img'} 
                        onClick={() => selectImg(state.guitar.img1,1)}
                    />
                    <img
                        src={state.guitar.img2}
                        alt={'the guitar'}
                        className= {state.selectedImg === 2 ? 'small-img selected' : 'small-img'} 
                        onClick={() => selectImg(state.guitar.img2,2)}
                    />
                </div>
            </div>
            <div className='guitar-description'>
                <div className='first-div'>
                    <h3>Mucho más por mucho menos!</h3>
                    <p>{state.guitar.description}</p>
                </div>
                <div className='detalles-manos'>
                    <h4>Preferencia</h4>
                    <button onClick={() => setHand('Derecha')}
                        className={state.mano === 'Derecha' ? 'boton-selected' : ''}
                    >
                        Diestro
                    </button>
                    <button onClick={() => setHand('Izquierda')}
                        className={state.mano === 'Izquierda' ? 'boton-selected' : ''}
                    >
                        Zurdo
                    </button>
                </div>
                <div className='guitar-comprar'>
                    <h5 className='price'>{state.guitar.price}.00€</h5>
                    <button onClick = {() => {
                        addToCart(state.guitar)
                        toggleMensaje()}}>Añadir a la cesta</button>
                </div>
                <DetallesIcons />
            </div>
        </div>

    );
};

export default Detalles;