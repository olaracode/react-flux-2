import React from 'react'
import PostForm from '../component/PostForm.jsx';
// Cuando de un archivo jsx .... from "./CreatePost.jsx"
const CreatePost = () => {
    // post
    return (
        <div className="vh-100 d-flex justify-content-center align-items-center">
            <div className="card w-75">
                <div className="card-header">
                    Crea un post nuevo
                </div>
                <PostForm btnContent={"Crear"} />
            </div>
        </div>
    )
}

export default CreatePost