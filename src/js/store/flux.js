const getState = ({ getStore, getActions, setStore }) => {
  // { store: {...}, actions: {...} }
  return {
    store: {
      // vamos a guardar la informacion global
      /**
       * { key: value } - { llave: valor }
       */
      apiUrl: "https://jsonplaceholder.typicode.com/posts",
      posts: [],
    },
    actions: {
      // vamos a modificar la informacion global
      getPost: async () => {
        const store = getStore();
        try {
          const response = await fetch(store.apiUrl);
          if (!response.ok) {
            throw new Error("There has been an error");
          }
          const data = await response.json();
          setStore({ posts: data });
        } catch (error) {
          console.log(error);
        }
      },
      addPost: async (post) => {
        const store = getStore();
        const actions = getActions();
        try {
          const response = await fetch(store.apiUrl, {
            method: "POST",
            body: JSON.stringify({
              ...post,
              userId: 1,
            }),

            headers: {
              "Content-type": "application/json",
            },
          });
          if (response.ok) {
            // alert("Has creado un post");
            // setTodoList([...todoList, nuevaTarea])
            const data = await response.json();
            setStore({ posts: [...store.posts, data] });
            actions.getPost();
          }
        } catch (error) {
          console.log(error);
        }
      },
      editPost: async (id, post) => {
        const store = getStore();
        const actions = getActions();
        try {
          const response = await fetch(store.apiUrl + `/${id}`, {
            method: "PATCH",
            body: JSON.stringify(post),
            headers: {
              "Content-type": "application/json",
            },
          });
          const data = await response.json();
          if (response.ok) {
            actions.getPost();
          }
        } catch (error) {
          console.log(error);
        }
      },
      deletePost: async (id) => {
        try {
          const store = getStore();
          const response = await fetch(store.apiUrl + `/${id}`, {
            method: "DELETE",
          });
          if (!response.ok) {
            alert("No se puede borrar :(");
            throw new Error("No se pudo borrar :(");
          } else {
            const filteredPosts = store.posts.filter((post) => post.id !== id);
            setStore({ posts: filteredPosts });
          }
        } catch (err) {
          console.log(err);
        }
      },
    },
  };
};

export default getState;
