import 'leaflet';

import './styles/index.scss';

import DragManager from './utils/drag';
import Map from './utils/map';

import StoreItem from './components/store.template';
import ProductsModal from './components/products-modal.template';

import stores from './data/stores';
import products from './data/products';


const container = document.querySelector('.store-list');
const modal = document.querySelector('.wrapp-products-table');
const contentModal = document.querySelector('.wrap-content');
modal.style.visibility = 'hidden';

stores.map((store, index) => {
    container.innerHTML += StoreItem(store, index+1);
});

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


const closeModal = document.querySelector('.close-button');
closeModal.addEventListener('click', (event) => { event.target.parentElement.style.visibility = 'hidden'; })


DragManager.onDragCancel = function(dragObject) {
    dragObject.avatar.rollback();
};

DragManager.onDragEnd = function(dragObject, dropElem) {
    let prev;

    Array.from(dropElem.children).map((e) => {
        e.offsetTop >= event.pageY - dragObject.shiftY && prev == null ? prev = e : null;
    })
    dropElem.insertBefore(dragObject.elem, prev);
    dragObject.elem.style = '';
    Array.from(dropElem.children).map((e, index) => {
        e.querySelector('.index').innerHTML = index+1;
    });
};