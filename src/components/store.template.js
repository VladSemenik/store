import '../styles/store-item.scss';

export default function (store, index) {
    return `<div class='store-item draggable'>
    <h2 class='title'><span class='index'>${index}</span>${' '+store.name}</h2>
    <span class='address'>${store.address}</span>
    <span class='time'>${store.time}</span>
    <a href='#${store.id}'>products</a>
    </div>`;
}