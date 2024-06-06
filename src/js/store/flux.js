const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      // vamos a guardar la informacion global
      /**
       * { key: value } - { llave: valor }
       */
      posts: [],
    },
    actions: {
      // vamos a modificar la informacion global
      getPost: async () => {
        try {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
          );
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
        // {title: string, body: string}
        try {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
              method: "POST",
              body: JSON.stringify({
                // title: post.title,
                // body: post.body,
                ...post, // title, body
                userId: 1,
              }),
              // Encabezado de la peticion
              // Content-type -> formato json
              headers: {
                "Content-type": "application/json",
              },
            }
          );
          if (response.ok) {
            // alert("Has creado un post");
            // setTodoList([...todoList, nuevaTarea])
            const data = await response.json();
            setStore({ posts: [...store.posts, data] });
          }
        } catch (error) {
          console.log(error);
        }
      },
      editPost: async () => {},
      deletePost: async () => {},
    },
  };
};

export default getState;
