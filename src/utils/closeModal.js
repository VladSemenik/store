export default function() {
    const closeModal = document.querySelector('.close-button');
    closeModal.addEventListener('click', (event) => { event.target.parentElement.style.visibility = 'hidden'; })
}