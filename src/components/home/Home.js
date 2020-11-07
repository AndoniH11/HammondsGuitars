import React , {useEffect} from 'react';
import Carrousel from './Carrousel'
import Novedades from './Novedades';


const Home = () => {

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        <div className='home-container'>
            <Carrousel />
            <Novedades />
        </div>
    )
}

export default Home;




