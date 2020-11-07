import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../context';
import Detalles from './Detalles';
import DetailedAñadido from './DetailedAñadido'

class DetailedGuitar extends Component {

    static contextType = ProductContext

    state = {
        slug: this.props.match.params.slug,
        display: 'none',
        guitar: '',
        mainImg: '',
        mano: 'Derecha',
        selectedImg: 1,
        displayMensaje: false,
    }


    componentDidMount = () => {
        const { getGuitar } = this.context
        const guitar = getGuitar(this.state.slug)
        this.setGuitar(guitar)
        this.selectImg(guitar.img1, 1)
        window.scrollTo(0,0)
    }

    selectImg = (img, number) => {
        this.setState({
            mainImg: img,
            selectedImg: number
        })
    }

    setHand = (preferencia) => {
        this.setState({
            mano: preferencia
        })
    }

    setGuitar = (guitar) => {
        this.setState({
            guitar
        })
    }

    toggleMensaje = () => {
        this.setState({
            displayMensaje: !this.state.displayMensaje
        })
    }

    render() {
        return (
            <div className='detailed-guitar'>
                <div
                    className='sombra'
                    style={this.state.displayMensaje ? { display: 'block' }
                        : { display: 'none' }}
                ></div>
                <div className='detailed-guitar-superior'>
                    <ul>
                        <Link to='/'>
                            <li>Inicio</li>
                        </Link>
                        <li>/</li>
                        <Link to='/guitars'>
                            <li>Guitarras</li>
                        </Link>
                    </ul>
                    <h2>{this.state.guitar.brand} {this.state.guitar.model}</h2>
                </div>
                <Detalles state={this.state} selectImg={this.selectImg} setHand={this.setHand} addToCart={this.context.addToCart} toggleMensaje={this.toggleMensaje}/>
                <DetailedAñadido
                    guitar={this.state.guitar}
                    displayMensaje={this.state.displayMensaje}
                    toggleMensaje={this.toggleMensaje}
                />
            </div>
        );
    }
}

export default DetailedGuitar;