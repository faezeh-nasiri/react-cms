import React from 'react';
import ReactDom from 'react-dom';
import './DeleteModal.css';

export default function DeleteModal({submitAction, cancelAction}) {
    return ReactDom.createPortal(
        <div className="modal-parent active">
            <div className="delete-modal">
                <h1>آیا از حذف محصول اطمینان دارید؟</h1>
                <div className="delete-modal-btns">
                    <button className='delete-btn delete-modal-accept-btn' onClick={() => submitAction()}>بله</button>
                    <button className='delete-btn delete-modal-reject-btn' onClick={() => cancelAction()}>خیر</button>
                </div>
            </div>
        </div>, document.getElementById('modals-parent')
    )
}

