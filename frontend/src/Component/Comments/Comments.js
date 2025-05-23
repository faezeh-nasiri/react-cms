import React, { useEffect, useState } from 'react';
import Errorbox from '../Errorbox/Errorbox';
import DetailsModal from '../DetailsModal/DetailsModal';
import DeleteModal from '../DeleteModal/DeleteModal';
import EditModal from '../EditModal/EditModal';

import './Comments.css'

export default function Comments() {

  const [allComments, setAllComments] = useState([]);
  const [isShowDetailModal, setIsShowDetailModal] = useState(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [isShowAcceptModal, setIsShowAcceptModal] = useState(false);
  const [mainCommentBody, setMainCommentBody] = useState('');
  const [commentID, setCommentID] = useState(null)

  useEffect(() => {
    getAllComments()
  }, []);

  function getAllComments() {
    fetch('http://localhost:8000/api/comments')
      .then(res => res.json())
      .then(comments => setAllComments(comments));
  }

  const closeDetailModal = () => setIsShowDetailModal(false);
  const closeDeleteModal = () => setIsShowDeleteModal(false);
  const closeEditModal = () => setIsShowEditModal(false);

  const closeAcceptModal = () => setIsShowAcceptModal(false)

  const acceptComment = () => {
    console.log('accept');

    fetch(`http://localhost:8000/api/comments/accept/${commentID}`, {
      method: 'POST'
    }).then(res => res.json())
      .then(result => {
        console.log(result); 
        setIsShowAcceptModal(false)
        getAllComments()
      })

  }

  const deleteComment = () => {
    console.log('delete');

    fetch(`http://localhost:8000/api/comments/${commentID}`, {
      method: "DELETE",
    }).then(res => res.json())
      .then(reasult => {
        setIsShowDeleteModal(false) 
        getAllComments()
      })

  }

  const updateCommentModal = (event) => {
    event.preventDefault()

    console.log(commentID);


    fetch(`http://localhost:8000/api/comments/${commentID}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        body: mainCommentBody
      })
    }).then((res) => res.json())
      .then((result) => {
        console.log(result);
        setIsShowEditModal(false);
        getAllComments()
      });

  }

  return (
    <div className='cms-main'>

      {allComments.length ? (

        <table className="cms-table">
          <thead>
            <tr>
              <th>اسم کاربر</th>
              <th>محصول</th>
              <th>متن کامنت</th>
              <th>تاریخ</th>
              <th>ساعت</th>
            </tr>
          </thead>

          <tbody>
            {allComments.map((comment) => (
              <tr key={comment.id}>
                <td>{comment.userID}</td>
                <td>{comment.productID}</td>
                <td>
                  <button onClick={() => {
                    setMainCommentBody(comment.body)
                    setIsShowDetailModal(true)

                  }}>دیدن متن</button>
                </td>
                <td>{comment.date}</td>
                <td>{comment.hour}</td>
                <td>

                  <button onClick={() => {
                    setIsShowDeleteModal(true)
                    setCommentID(comment.id)
                  }}>
                    حذف
                  </button>

                  <button
                    onClick={() => {
                      setIsShowEditModal(true)
                      setMainCommentBody(comment.body)
                      setCommentID(comment.id)
                    }}>
                    ویرایش
                  </button>

                  <button>پاسخ</button>

                  <button
                    onClick={() => {
                      setIsShowAcceptModal(true)
                      setCommentID(comment.id)
                    }}>تایید</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Errorbox msg="هیچ کامنتی یافت نشد" />
      )}

      {
        isShowDetailModal && (
          <DetailsModal
            onHide={closeDetailModal}>
            <p className='text-modal'>
              {mainCommentBody}
            </p>
            <button
              className='text-modal-close-btn'
              onClick={closeDetailModal}>بستن</button>
          </DetailsModal>
        )
      }

      {
        isShowDeleteModal && (
          <DeleteModal
            cancelAction={closeDeleteModal}
            submitAction={deleteComment}
            title={'آیا از حذف مطمئن هستید؟'} />
        )
      }

      {
        isShowEditModal && (
          <EditModal
            onClose={closeEditModal}
            onSubmit={updateCommentModal}
          >
            <textarea value={mainCommentBody} onChange={event => setMainCommentBody(event.target.value)}>
            </textarea>
          </EditModal>
        )
      }

      {
        isShowAcceptModal && (
          <DeleteModal
            title={'آیا از تایید مطمئن هستید؟'}
            cancelAction={closeAcceptModal}
            submitAction={acceptComment}
          />
        )
      }

    </div>
  )
}
