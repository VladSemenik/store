import DragManager from './drag';

export default function() {
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
}