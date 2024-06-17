import images from "./images";

export const cities = [
    { label: 'Chelyabinsk', value: '1' },
    { label: 'Moscow', value: '2' },
    { label: 'Kazan', value: '3' },
    { label: 'Yekaterinburg', value: '4' },
    { label: 'Samara', value: '5' },
    { label: 'Novosibirsk', value: '6' },
];


export const categories = [
    { id: 1, title: 'All Coffee' },
    { id: 2, title: 'Machiato' },
    { id: 3, title: 'Latte' },
    { id: 4, title: 'Americano' },
    { id: 5, title: 'Espresso' },
    { id: 6, title: 'Cappuccino' },
    { id: 7, title: 'Mocha' },
]

export const coffees = [
    {
        title: 'Caffe Mocha',
        desc: 'Deep Foam',
        cost: 4.53,
        rating: 4.8,
        image: images.coffee2,
    },
    {
        title: 'Flat White',
        desc: 'Espresso',
        cost: 3.53,
        rating: 4.8,
        image: images.coffee4,
    },
    {
        title: 'Mocha Fusi',
        desc: 'Ice/Hot',
        cost: 7.53,
        rating: 4.8,
        image: images.coffee5,
    },
    {
        title: 'Caffe Panna',
        desc: 'Ice/Hot',
        cost: 5.53,
        rating: 4.8,
        image: images.coffee3,
    },
]