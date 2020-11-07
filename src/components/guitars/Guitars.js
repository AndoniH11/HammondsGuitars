import React, { Component } from 'react';
import {guitars} from '../../data';
import GuitarList from './GuitarList';
import BrandSelection from './BrandSelection';
import { ProductContext } from '../../context';

class Guitars extends Component {

    static contextType = ProductContext

    render() {
        const {price, minPrice, maxPrice, handleChange} = this.context
        console.log(this.context)
        return (
             <div className='guitars-container'>
                 <div className='guitars-left'>
                     <BrandSelection/>
                 </div>
                 <div className='guitars-right'>
                     <div className='guitar-sorter'>
                         <label htmlFor='price'>
                             <strong>Precio:</strong> {price} €
                         </label>
                         <input 
                             type='range'
                             name='price'
                             min={minPrice}
                             max={maxPrice}
                             value={price}
                             id='price'
                             onChange={(e) => handleChange(e)}
                             className='sorter-input'
                         />
                     </div>
                     <GuitarList />
                 </div> 
               
            </div>
        );
    }
}

export default Guitars;