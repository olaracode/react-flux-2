import React, { useState, useContext } from 'react'
import { Context } from '../store/appContext'
// Lo vamos a utilizar para crear y para editar
import { useNavigate } from 'react-router-dom';
const PostForm = ({ btnContent, id }) => {
    const navigate = useNavigate();
    const { actions } = useContext(Context);

    // Es lo que se envia en los formularios
    const [post, setPost] = useState({
        title: "",
        body: "",
    })

    function handleChange(event) {
        setPost({ ...post, [event.target.name]: event.target.value })
    }
    async function handleSubmit(event) {
        event.preventDefault();
        if (id) {
            // Si, tenemos id, estamos editando
            actions.editPost(id, post)
        } else {
            // Si no tenemos id, estamos creando
            const response = await actions.addPost(post)
            if (response) {
                navigate("/");
            }
        }
    }
    return (
        <form className="card-body d-flex flex-column gap-3" onSubmit={handleSubmit}>
            <div>
                <label>
                    Title
                </label>
                <input className="form-control"
                    name="title"
                    onChange={(event) => handleChange(event)}
                    placeholder="Coloca el titulo"
                />
            </div>
            <div>
                <label>
                    Body
                </label>
                <input
                    name="body"
                    onChange={(event) => handleChange(event)}
                    className="form-control" placeholder="Tu contenido"
                />
            </div>
            <button className="btn btn-primary">
                {btnContent}
            </button>
        </form>
    )
}

export default PostForm