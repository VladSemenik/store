import '../styles/products-modal.scss';
import product from './product.template';
import map from './map.template';

export default function (store) {
    let modalProducts = '';
    store.products.map((e) => {
        modalProducts += product(e);
    })
    return `
    <table class='table'>
        <caption>Produts</caption>
        <tr>
            <th>Name</th>
            <th>Description</th>
        </tr>
            ${modalProducts}
    </table>
    ${map(store)}
    `;
}