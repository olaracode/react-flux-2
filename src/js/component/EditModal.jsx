import React from 'react'
import PostForm from './PostForm.jsx'
const EditModal = ({ post }) => {

    return (
        <>
            <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target={`#edit-modal-${post.id}`}>
                Editar
            </button>
            <div className="modal fade" id={`edit-modal-${post.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Editar Post
                            </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <PostForm
                                btnContent="Editar"
                                id={post.id}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default EditModal