import React from 'react';
import { ProductContext } from '../../context';

class BrandSelection extends React.Component {

    static contextType = ProductContext
    render() {
        const factoresOrdenar = ['Relevancia (mayor)', 'Relevancia (menor)', "Precio (mayor)", "Precio (menor)"]
        const { guitars, brands, handleChange } = this.context
        return (
            <div className='guitars-left-container'>
                <p><span>Inicio</span> <span>/</span> <span>Tienda</span> <span>/</span>   <span>Guitarras</span></p>
                <h3>GUITARRAS ELÉCTRICAS</h3>
                <p className='numero-resultados'>{guitars.length} resultados</p>
                <div className='filter-container'>
                    <div >
                        <h4>MARCAS</h4>

                        <div className='checkbox-container'>
                            {brands.map((item, i) => (
                                <div key={i}>
                                    <input
                                        type='checkbox'
                                        name='brands'
                                        value={item}
                                        onChange={(e) => handleChange(e)}
                                    />
                                    <label>{item}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className='ordenar-titulo'>ORDENAR</h4>
                        <select
                            className='ordenar-select'
                            name='ordenar'
                            onChange={(e) => handleChange(e)}
                        >
                            {factoresOrdenar.map((factor, i) => (
                                <option
                                    key={i}
                                    value={factor}
                                >
                                    {factor}
                                </option>
                            ))}
                        </select>
                    </div>


                </div>

            </div>
        );
    }

};

export default BrandSelection;