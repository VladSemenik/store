import './styles/index.scss';

import DragManager from './utils/drag';

import StoreItem from './components/store.template';

import stores from './data/stores';


const container = document.querySelector('.store-list');


stores.map((store, index) => {
    container.innerHTML += StoreItem(store, index+1);
})

container.addEventListener('click', (event) => {
    console.log(event.target.href);
})

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