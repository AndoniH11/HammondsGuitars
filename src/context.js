import React from 'react';
import { guitars } from './data'

const ProductContext = React.createContext();

class ProductProvider extends React.Component {

    state = {
        guitars: guitars,
        displayedGuitars: [],
        price: 0,
        minPrize: 0,
        maxPrice: 0,
        brands: [],
        displayedBrands: [],
        tempBrands: [],
        ordenar: '',
        slug: '',
        cart: [],
        total: 0
    }


    componentDidMount() {
        let guitarsPrice = this.state.guitars.map(guitar => guitar.price)
        let maxPrice = Math.max(...guitarsPrice)
        this.getBrands()
        this.setState({
            price: maxPrice,
            maxPrice,
            displayedGuitars: guitars
        })

    }

    setSlug = (newSlug) => {
        this.setState({
            slug: newSlug
        })
    }

    setTotal = () => {
        let tempTotal = 0
        this.state.cart.forEach((guitar) =>{
            guitar.total = guitar.count * guitar.price
            tempTotal += guitar.total
        })

        this.setState({
            total: tempTotal
        })
    }

    getGuitar = (slug) => {
        let tempGuitars = [...this.state.guitars]
        const guitar = tempGuitars.find((guitar) => guitar.id === parseInt(slug))
        return guitar
    }

    getBrands = () => {
        let tempBrands = []
        this.state.guitars.forEach(guitar => {
            if (guitars.length > 0) {
                if (tempBrands.indexOf(guitar.brand) === -1) {
                    tempBrands.push(guitar.brand)
                }
            }
        })
        this.setState({
            brands: tempBrands,
            displayedBrands: tempBrands
        })
    }

    handleChange = (e) => {
        const name = e.target.name
        const type = e.target.type
        const value = e.target.value
        const checked = e.target.checked
        let tempBrands = [...this.state.tempBrands]

        if (type === 'checkbox') {

            if (checked === true && tempBrands.indexOf(value) === -1) {
                tempBrands.push(value)
            } else if (checked === false && tempBrands.indexOf(value) !== -1) {
                let index = tempBrands.indexOf(value)
                tempBrands.splice(index, 1)
            }

            if (tempBrands.length === 0) {
                this.setState({
                    displayedBrands: [...this.state.brands],
                    tempBrands
                }, () => this.filterGuitars())
            } else {
                this.setState({
                    displayedBrands: tempBrands,
                    tempBrands
                }, () => this.filterGuitars())
            }

        } else {
            this.setState({
                [name]: value
            },
                () => this.filterGuitars())
        }
    }

    addToCart = (item) => {
        let  tempCart = [...this.state.cart]
        if(tempCart.indexOf(item) === -1){
            item.count = 1
            tempCart.push(item);
        }

        this.setState({
            cart:tempCart
        }, () => this.setTotal())
    }

    increaseGuitar = (guitar) => {
        guitar.count += 1

        this.setTotal()
    }

    decreaseGuitar = (guitar) => {
        guitar.count -= 1
        let tempCart = [...this.state.cart]
        let index = this.state.cart.indexOf(guitar)
        if(guitar.count === 0){
            tempCart.splice(index, 1)
        }
        console.log(index)

        this.setState({
            cart: tempCart
        }, () => this.setTotal())
        
    }

    filterGuitars = () => {
        let sortedGuitars = this.state.guitars
        console.log(this.state.ordenar)

        if (this.state.ordenar === 'Precio (mayor)') {
            sortedGuitars.sort((a, b) => (b.price) - (a.price))
        } else if (this.state.ordenar === 'Precio (menor)') {
            sortedGuitars.sort((a, b) => (a.price) - (b.price))
        } else if (this.state.ordenar === 'Relevancia (mayor)') {
            sortedGuitars.sort((a, b) => (a.id) - (b.id))
        } else if (this.state.ordenar === 'Relevancia (menor)') {
            sortedGuitars.sort((a, b) => (b.id) - (a.id))
        }

        let tempGuitars = this.state.guitars


        tempGuitars = tempGuitars.filter((guitar) => this.state.displayedBrands.indexOf(guitar.brand) !== -1)
        tempGuitars = tempGuitars.filter((guitar) => guitar.price <= this.state.price)

        this.setState({
            displayedGuitars: tempGuitars
        })
    }

    restartCesta = () => {
        this.setState({
            cart: []
        })
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                componentDidMount: this.componentDidMount,
                getBrands: this.getBrands,
                handleChange: this.handleChange,
                filterGuitars: this.filterGuitars,
                setSlug: this.setSlug,
                getGuitar: this.getGuitar,
                increaseGuitar: this.increaseGuitar,
                decreaseGuitar: this.decreaseGuitar,
                addToCart: this.addToCart,
                restartCesta:this.restartCesta
            }}>
                {this.props.children}
            </ProductContext.Provider>

        )
    }
}



const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer, ProductContext };