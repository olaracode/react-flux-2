import React, { useState, useContext } from 'react'
import { Context } from '../store/appContext'

// Cuando de un archivo jsx .... from "./CreatePost.jsx"
const CreatePost = () => {
    const { store, actions } = useContext(Context);
    const [post, setPost] = useState({
        title: "",
        body: "",
        // imageUrl: ""
        // key: value correcto
    })

    function handleChange(event) {
        // key: value
        // spread operator // {...post, title: event.target.value}
        // spread operator // {...post, body: event.target.value}

        setPost({ ...post, [event.target.name]: event.target.value })
    }

    // submit que envie la informacion de nuestro formulario a la api
    function handleSubmit(event) {
        event.preventDefault();
        actions.addPost(post)
    }
    return (
        <div className="vh-100 d-flex justify-content-center align-items-center">
            <div className="card w-75">
                <div className="card-header">
                    Crea un post nuevo
                </div>
                <form className="card-body" onSubmit={handleSubmit}>
                    <div>
                        <label>
                            Title
                        </label>
                        <input className="form-control"
                            name="title"
                            onChange={(event) => handleChange(event)}
                            placeholder="Coloca el titulo" />
                    </div>
                    <div>
                        <label>
                            Body
                        </label>
                        <input
                            name="body"
                            onChange={(event) => handleChange(event)}
                            className="form-control" placeholder="Tu contenido" />
                    </div>
                    <button className="btn btn-primary">
                        Crea tu post
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreatePost