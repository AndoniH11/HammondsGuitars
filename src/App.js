import React from 'react';
import Header from './components/Header';
import Home from './components/home/Home';
import {Switch, Route} from 'react-router-dom';
import Guitars from './components/guitars/Guitars';
import Footer from './components/Footer';
import DetailedGuitar from './components/guitar/DetailedGuitar';
import Cart from './components/cart/Cart';
import CartMensaje from './components/cart/CartMensaje'

class App extends React.Component {

  state = {
    slug:''
  }

  setSlug = (newSlug) => {
    this.setState({
      slug: newSlug
    })
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/guitars' component={Guitars} />
          <Route exact path='/guitars/:slug' component={DetailedGuitar}/>
          <Route exact path='/cesta' component={Cart}/>
          <Route exact path='/compra-realizada' component={CartMensaje}/>
        </Switch>
        <Footer/>
      </div>
    );
  } 
}

export default App;
