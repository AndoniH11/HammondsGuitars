import React, { Component } from 'react';
import { AiOutlineShopping } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { ProductContext } from '../context';
import { GiHamburgerMenu } from 'react-icons/gi'

class Header extends Component {

    static contextType = ProductContext
    state = {
        show: false,
        menuDisplayed: false
    }

    componentDidMount() {
        window.addEventListener('scroll', () => this.handleScroll())
    }

    handleScroll = () => {
        if (window.scrollY > 0) {
            this.setState({
                show: true
            })
        } else {
            this.setState({
                show: false
            })
        }
    }

    handleClick = () => {
        this.setState({
            menuDisplayed: !this.state.menuDisplayed
        })
    }

    render() {
        return (
            <header className={this.state.show ? 'header show-header' : 'header'}>
                <h1 className='nombre-tienda'>HAMMOND'S <span>GUITARS</span></h1>
                <GiHamburgerMenu className='ham-menu' onClick={() => this.handleClick()}/>
                <nav className={this.state.menuDisplayed ? 'nav show' : 'nav'}>
                    <ul>
                        <Link to='/' onClick={() => this.handleClick()}> <li>INICIO</li> </Link>
                        <Link to='/guitars' onClick={() => this.handleClick()}> <li>GUITARRAS</li> </Link>
                        <Link to='/cesta' onClick={() => this.handleClick()}>
                            <div className='cesta-container'>
                                <p className='cesta-numero' style={this.context.cart.length === 0 ? { display: 'none' } : { display: 'block' }}>
                                    {this.context.cart.length}
                                </p>
                                <li className='cesta-icono'><AiOutlineShopping /></li>
                            </div>
                        </Link>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;