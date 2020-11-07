import React from 'react';
import GuitarsEmpty from './GuitarsEmpty';
import { Link } from 'react-router-dom';
import { ProductConsumer, ProductContext } from '../../context'

class GuitarList extends React.Component {

    static contextType = ProductContext

    componentDidMount() {
        window.scrollTo(0,0)
    }

    render() {
        const {displayedGuitars, setSlug} = this.context

        const template = () => (
            displayedGuitars.map((guitar, i) => (
                <Link
                to={`guitars/${guitar.id}`} onClick={()=>setSlug(guitar.id)} key={i}
                >
                    <div key={i} className='escaparate-elemento '>
                        <div className='tag-novedad'>NOVEDAD</div>
                        <img
                            src={guitar.img1}
                            alt='guitar'
                            className='guitarra-escaparate'
                        />
                        <h3>{guitar.brand} <span>{guitar.model}</span></h3>
                        <div className='escaparate-detalles'>
                            <p className='escaparate-precio'>{guitar.price} €</p>
                            <button className='escaparate-boton'>Ver más detalles</button>
                        </div>

                    </div>
                </Link>

            ))
        )
        return (

            displayedGuitars.length > 0 ?
                <div className='escaparate'>
                    {template()}
                </div>
                : <GuitarsEmpty />
        )
    }

};

export default GuitarList;