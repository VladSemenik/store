import './styles/index.scss';

import StoreItem from './components/store.template';

import stores from './data/stores';


const container = document.querySelector('.store-list');

stores.map((store) => {
    container.innerHTML += StoreItem(store);
})