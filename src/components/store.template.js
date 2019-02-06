import '../styles/store-item.scss';

export default function (store) {
    return `<div class='store-item'>
    <h2 class='title'>${store.number}${' '+store.name}</h2>
    <span class='address'>${store.address}</span>
    <span class='time'>${store.time}</span>
    </div>`;
}