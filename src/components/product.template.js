export default function (product) {
    return `
    <tr>
        <td>${product.name}</td>
        <td>${product.description}</td>
    </tr>`;
}