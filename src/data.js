
import wallpaper4 from './assets/img/wallpaper2.jpg'
import wallpaper3 from './assets/img/wallpaper3.jpg'
import wallpaper2 from './assets/img/wallpaper4.jpg'

import novedad1 from './assets/img/slash.jpg';
import novedad2 from './assets/img/gibson.jpg';
import novedad3 from './assets/img/marshall.jpg';
import novedad4 from './assets/img/shawnJames.jpeg';

import lesPaul11 from './assets/img/les-paul1-1.jpg';
import lesPaul12 from './assets/img/les-paul1-2.jpg';
import lesPaul21 from './assets/img/les-paul2-1.jpg';
import lesPaul22 from './assets/img/les-paul2-2.jpg';
import lesPaul31 from './assets/img/les-paul3-1.jpg';
import lesPaul32 from './assets/img/les-paul3-2.jpg';
import ibanez11 from './assets/img/ibanez1-1.jpg';
import ibanez12 from './assets/img/ibanez1-2.jpg';
import ibanez21 from './assets/img/ibanez2-1.jpg';
import ibanez22 from './assets/img/ibanez2-2.jpg';
import jackson11 from './assets/img/jackson1-1.jpg';
import jackson12 from './assets/img/jackson1-2.jpg';
import jackson21 from './assets/img/jackson2-1.jpg';
import jackson22 from './assets/img/jackson2-2.jpg';
import jackson31 from './assets/img/jackson3-1.jpg';
import jackson32 from './assets/img/jackson3-2.jpg';
import jackson41 from './assets/img/jackson4-1.jpg';
import jackson42 from './assets/img/jackson4-2.jpg';
import jackson51 from './assets/img/jackson5-1.jpg';
import jackson52 from './assets/img/jackson5-2.jpg';
import sg11 from './assets/img/sg1-1.jpg'
import sg12 from './assets/img/sg1-2.jpg'
import sg21 from './assets/img/sg2-1.jpg'
import sg22 from './assets/img/sg2-2.jpg'
import sg31 from './assets/img/sg3-1.jpg'
import sg32 from './assets/img/sg3-2.jpg'
import stratocaster11 from './assets/img/stratocaster1-1.jpg'
import stratocaster12 from './assets/img/stratocaster1-2.jpg'
import stratocaster21 from './assets/img/stratocaster2-1.jpg'
import stratocaster22 from './assets/img/stratocaster2-2.jpg'
import stratocaster31 from './assets/img/stratocaster3-1.jpg'
import stratocaster32 from './assets/img/stratocaster3-2.jpg'
import telecaster11 from './assets/img/telecaster1-1.jpg'
import telecaster12 from './assets/img/telecaster1-2.jpg'
import telecaster21 from './assets/img/telecaster2-1.jpg'
import telecaster22 from './assets/img/telecaster2-2.jpg'


export const sliderImages = [
    
    {
        id:1,
        img: wallpaper2
    },
    {
        id:2,
        img: wallpaper3
    },
    {
        id:3,
        img: wallpaper4
    },
]

export const novedades = [
    {
        id:1,
        img: novedad1,
        title: 'Slash',
        description: 'Nueva gira del ex-guitarrista de Guns&Roses para el nuevo año 2021.'
    },
    {
        id:2,
        img: novedad3,
        title: 'Marshall',
        description: 'La compañía de amplificadores Marshall estrena nueva línea de gama alta.'
    },
    {
        id:3,
        img: novedad4,
        title: 'Shawn James',
        description: 'El conocido cantante de música country Shawn James vuelve a los escenarios'
    },
    {
        id:4,
        img: novedad2,
        title: 'Gibson',
        description: 'La famosa compañía Gibson presenta su nueva línea de guitarras estilo Vintage'
    },
]

export const guitars = [
    {
        id:1,
        brand: 'Gibson',
        model: 'Les Paul Classic',
        price: 1200,
        description: 'Nos encontramos ante uno de los modelos más llamativos de la marca, con un acabado brillante y moderno, a la vez que elegante. Fabricada a través de madera de caoba, esta guitarra nos ofrece una gran versatibilidad de sonido a un precio más que asequible. Leyendas de la música y del rock como Jhonny Koeman o Han Smith han elegido esta marca para acompañarles durante todos sus conciertos y desde luego, que el resultado no podía ser mejor.',
        img1: lesPaul11,
        img2: lesPaul12,
        slug: 'les-paul-classic',
        inCart: false,
        count:0,
        total:0
    },
    {
        id:2,
        brand: 'Gibson',
        model: 'Les Paul 67',
        price: 2200,
        description: 'Nos encontramos ante uno de los modelos más llamativos de la marca, con un acabado brillante y moderno, a la vez que elegante. Fabricada a través de madera de caoba, esta guitarra nos ofrece una gran versatibilidad de sonido a un precio más que asequible. Leyendas de la música y del rock como Jhonny Koeman o Han Smith han elegido esta marca para acompañarles durante todos sus conciertos y desde luego, que el resultado no podía ser mejor.',
        img1: lesPaul21,
        img2: lesPaul22,
        slug: 'les-paul-67',
        inCart: false,
        count:0,
        total:0
    },
    {
        id:3,
        brand: 'Gibson',
        model: 'Les Paul 2006',
        price: 800,
        description: 'Nos encontramos ante uno de los modelos más llamativos de la marca, con un acabado brillante y moderno, a la vez que elegante. Fabricada a través de madera de caoba, esta guitarra nos ofrece una gran versatibilidad de sonido a un precio más que asequible. Leyendas de la música y del rock como Jhonny Koeman o Han Smith han elegido esta marca para acompañarles durante todos sus conciertos y desde luego, que el resultado no podía ser mejor.',
        img1: lesPaul31,
        img2: lesPaul32,
        slug: 'les-paul-2006',
        inCart: false,
        count:0,
        total:0
    },
    {
        id:4,
        brand: 'Ibanez',
        model: 'JCR',
        price: 700,
        description: 'Nos encontramos ante uno de los modelos más llamativos de la marca, con un acabado brillante y moderno, a la vez que elegante. Fabricada a través de madera de caoba, esta guitarra nos ofrece una gran versatibilidad de sonido a un precio más que asequible. Leyendas de la música y del rock como Jhonny Koeman o Han Smith han elegido esta marca para acompañarles durante todos sus conciertos y desde luego, que el resultado no podía ser mejor.',
        img1: ibanez11,
        img2: ibanez12,
        slug: 'ibanez-jcr',
        inCart: false,
        count:0,
        total:0
    },
    {
        id:5,
        brand: 'Ibanez',
        model: 'JXR',
        price: 500,
        description: 'Nos encontramos ante uno de los modelos más llamativos de la marca, con un acabado brillante y moderno, a la vez que elegante. Fabricada a través de madera de caoba, esta guitarra nos ofrece una gran versatibilidad de sonido a un precio más que asequible. Leyendas de la música y del rock como Jhonny Koeman o Han Smith han elegido esta marca para acompañarles durante todos sus conciertos y desde luego, que el resultado no podía ser mejor.',
        img1: ibanez21,
        img2: ibanez22,
        slug: 'ibanez-jxr',
        inCart: false,
        count:0,
        total:0
    },
    {
        id:6,
        brand: 'Jackson',
        model: 'Kelly',
        price: 400,
        description: 'Nos encontramos ante uno de los modelos más llamativos de la marca, con un acabado brillante y moderno, a la vez que elegante. Fabricada a través de madera de caoba, esta guitarra nos ofrece una gran versatibilidad de sonido a un precio más que asequible. Leyendas de la música y del rock como Jhonny Koeman o Han Smith han elegido esta marca para acompañarles durante todos sus conciertos y desde luego, que el resultado no podía ser mejor.',
        img1: jackson11,
        img2: jackson12,
        slug: 'kelly',
        inCart: false,
        count:0,
        total:0
    },
    {
        id:7,
        brand: 'Jackson',
        model: 'JXR-400',
        price: 500,
        description: 'Nos encontramos ante uno de los modelos más llamativos de la marca, con un acabado brillante y moderno, a la vez que elegante. Fabricada a través de madera de caoba, esta guitarra nos ofrece una gran versatibilidad de sonido a un precio más que asequible. Leyendas de la música y del rock como Jhonny Koeman o Han Smith han elegido esta marca para acompañarles durante todos sus conciertos y desde luego, que el resultado no podía ser mejor.',
        img1: jackson21,
        img2: jackson22,
        slug: 'jxr-400',
        inCart: false,
        count:0,
        total:0
    },
    {
        id:8,
        brand: 'Jackson',
        model: 'Laurel',
        price: 800,
        description: 'Nos encontramos ante uno de los modelos más llamativos de la marca, con un acabado brillante y moderno, a la vez que elegante. Fabricada a través de madera de caoba, esta guitarra nos ofrece una gran versatibilidad de sonido a un precio más que asequible. Leyendas de la música y del rock como Jhonny Koeman o Han Smith han elegido esta marca para acompañarles durante todos sus conciertos y desde luego, que el resultado no podía ser mejor.',
        img1: jackson31,
        img2: jackson32,
        slug: 'laurel',
        inCart: false,
        count:0,
        total:0
    },
    {
        id:9,
        brand: 'Jackson',
        model: 'Maple',
        price: 450,
        description: 'Nos encontramos ante uno de los modelos más llamativos de la marca, con un acabado brillante y moderno, a la vez que elegante. Fabricada a través de madera de caoba, esta guitarra nos ofrece una gran versatibilidad de sonido a un precio más que asequible. Leyendas de la música y del rock como Jhonny Koeman o Han Smith han elegido esta marca para acompañarles durante todos sus conciertos y desde luego, que el resultado no podía ser mejor.',
        img1: jackson41,
        img2: jackson42,
        slug: 'maple',
        inCart: false,
        count:0,
        total:0
    },
    {
        id:10,
        brand: 'Jackson',
        model: 'JXR-800',
        price: 800,
        description: 'Nos encontramos ante uno de los modelos más llamativos de la marca, con un acabado brillante y moderno, a la vez que elegante. Fabricada a través de madera de caoba, esta guitarra nos ofrece una gran versatibilidad de sonido a un precio más que asequible. Leyendas de la música y del rock como Jhonny Koeman o Han Smith han elegido esta marca para acompañarles durante todos sus conciertos y desde luego, que el resultado no podía ser mejor.',
        img1: jackson51,
        img2: jackson52,
        slug: 'jxr-800',
        inCart: false,
        count:0,
        total:0
    },
    {
        id:11,
        brand: 'Gibson',
        model: 'SG',
        price: 1100,
        description: 'Nos encontramos ante uno de los modelos más llamativos de la marca, con un acabado brillante y moderno, a la vez que elegante. Fabricada a través de madera de caoba, esta guitarra nos ofrece una gran versatibilidad de sonido a un precio más que asequible. Leyendas de la música y del rock como Jhonny Koeman o Han Smith han elegido esta marca para acompañarles durante todos sus conciertos y desde luego, que el resultado no podía ser mejor.',
        img1: sg11,
        img2: sg12,
        slug: 'sg',
        inCart: false,
        count:0,
        total:0
    },
    {
        id:12,
        brand: 'Gibson',
        model: 'SG Black Edition',
        price: 1100,
        description: 'Nos encontramos ante uno de los modelos más llamativos de la marca, con un acabado brillante y moderno, a la vez que elegante. Fabricada a través de madera de caoba, esta guitarra nos ofrece una gran versatibilidad de sonido a un precio más que asequible. Leyendas de la música y del rock como Jhonny Koeman o Han Smith han elegido esta marca para acompañarles durante todos sus conciertos y desde luego, que el resultado no podía ser mejor.',
        img1: sg21,
        img2: sg22,
        slug: 'sg-black',
        inCart: false,
        count:0,
        total:0
    },
    {
        id:13,
        brand: 'Gibson',
        model: 'SG Wood Edition',
        price: 1100,
        description: 'Nos encontramos ante uno de los modelos más llamativos de la marca, con un acabado brillante y moderno, a la vez que elegante. Fabricada a través de madera de caoba, esta guitarra nos ofrece una gran versatibilidad de sonido a un precio más que asequible. Leyendas de la música y del rock como Jhonny Koeman o Han Smith han elegido esta marca para acompañarles durante todos sus conciertos y desde luego, que el resultado no podía ser mejor.',
        img1: sg31,
        img2: sg32,
        slug: 'sg-wood',
        inCart: false,
        count:0,
        total:0
    },
    {
        id:14,
        brand: 'Fender',
        model: 'Stratocaster 64',
        price: 1400,
        description: 'Nos encontramos ante uno de los modelos más llamativos de la marca, con un acabado brillante y moderno, a la vez que elegante. Fabricada a través de madera de caoba, esta guitarra nos ofrece una gran versatibilidad de sonido a un precio más que asequible. Leyendas de la música y del rock como Jhonny Koeman o Han Smith han elegido esta marca para acompañarles durante todos sus conciertos y desde luego, que el resultado no podía ser mejor.',
        img1: stratocaster11,
        img2: stratocaster12,
        slug: 'stratocaster-64',
        inCart: false,
        count:0,
        total:0
    },
    {
        id:15,
        brand: 'Fender',
        model: 'Stratocaster 87',
        price: 1200,
        description: 'Nos encontramos ante uno de los modelos más llamativos de la marca, con un acabado brillante y moderno, a la vez que elegante. Fabricada a través de madera de caoba, esta guitarra nos ofrece una gran versatibilidad de sonido a un precio más que asequible. Leyendas de la música y del rock como Jhonny Koeman o Han Smith han elegido esta marca para acompañarles durante todos sus conciertos y desde luego, que el resultado no podía ser mejor.',
        img1: stratocaster21,
        img2: stratocaster22,
        slug: 'stratocaster-87',
        inCart: false,
        count:0,
        total:0
    },
    {
        id:16,
        brand: 'Fender',
        model: 'Stratocaster Cream',
        price: 1500,
        description: 'Nos encontramos ante uno de los modelos más llamativos de la marca, con un acabado brillante y moderno, a la vez que elegante. Fabricada a través de madera de caoba, esta guitarra nos ofrece una gran versatibilidad de sonido a un precio más que asequible. Leyendas de la música y del rock como Jhonny Koeman o Han Smith han elegido esta marca para acompañarles durante todos sus conciertos y desde luego, que el resultado no podía ser mejor.',
        img1: stratocaster31,
        img2: stratocaster32,
        slug: 'stratocaster-cream',
        inCart: false,
        count:0,
        total:0
    },
    {
        id:17,
        brand: 'Fender',
        model: 'Telecaster Cream',
        price: 800,
        description: 'Nos encontramos ante uno de los modelos más llamativos de la marca, con un acabado brillante y moderno, a la vez que elegante. Fabricada a través de madera de caoba, esta guitarra nos ofrece una gran versatibilidad de sonido a un precio más que asequible. Leyendas de la música y del rock como Jhonny Koeman o Han Smith han elegido esta marca para acompañarles durante todos sus conciertos y desde luego, que el resultado no podía ser mejor.',
        img1: telecaster11,
        img2: telecaster12,
        slug: 'telecaster-cream',
        inCart: false,
        count:0,
        total:0
    },
    {
        id:18,
        brand: 'Fender',
        model: 'Telecaster Sky',
        price: 900,
        description: 'Nos encontramos ante uno de los modelos más llamativos de la marca, con un acabado brillante y moderno, a la vez que elegante. Fabricada a través de madera de caoba, esta guitarra nos ofrece una gran versatibilidad de sonido a un precio más que asequible. Leyendas de la música y del rock como Jhonny Koeman o Han Smith han elegido esta marca para acompañarles durante todos sus conciertos y desde luego, que el resultado no podía ser mejor.',
        img1: telecaster21,
        img2: telecaster22,
        slug: 'telecaster-sky',
        inCart: false,
        count:0,
        total:0
    },


]