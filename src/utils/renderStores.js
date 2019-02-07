import StoreItem from '../components/store.template';
import stores from '../data/stores';

export default function () {
const container = document.querySelector('.store-list');

stores.map((store, index) => {
    container.innerHTML += StoreItem(store, index+1);
});
}