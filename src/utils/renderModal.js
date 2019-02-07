import Map from './map';
import ProductsModal from '../components/products-modal.template';
import products from '../data/products';

export default function () {
const container = document.querySelector('.store-list');
const modal = document.querySelector('.wrapp-products-table');
const contentModal = document.querySelector('.wrap-content');
modal.style.visibility = 'hidden';

container.addEventListener('click', (event) => {
    contentModal.innerHTML = '';
    let store;
    products.map((e) => {
        let href = event.target.href.split('');
        e.id === parseInt(href[href.length-1], 10) ? store = e : null;
    })
    contentModal.innerHTML += ProductsModal(store);
    Map(store);
    modal.style.visibility  = 'visible';
});
}