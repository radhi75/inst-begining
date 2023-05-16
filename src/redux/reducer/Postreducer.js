import { ADD_POST, DELETE_POST, EDIT_POST } from "../actionTypes/PostTypes";

const initialState = {
  posts: [
    {
        id: Math.random(),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/07_LSG_7338_010_Heidewald_Weg_durch_den_Wald_mit_alten_Robinien.jpg/400px-07_LSG_7338_010_Heidewald_Weg_durch_den_Wald_mit_alten_Robinien.jpg",
      },
    {
      id: Math.random(),
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/07_LSG_7338_010_Heidewald_Weg_durch_den_Wald_mit_alten_Robinien.jpg/400px-07_LSG_7338_010_Heidewald_Weg_durch_den_Wald_mit_alten_Robinien.jpg",
    },
    {
        id: Math.random(),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/07_LSG_7338_010_Heidewald_Weg_durch_den_Wald_mit_alten_Robinien.jpg/400px-07_LSG_7338_010_Heidewald_Weg_durch_den_Wald_mit_alten_Robinien.jpg",
      },
      {
        id: Math.random(),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/07_LSG_7338_010_Heidewald_Weg_durch_den_Wald_mit_alten_Robinien.jpg/400px-07_LSG_7338_010_Heidewald_Weg_durch_den_Wald_mit_alten_Robinien.jpg",
      },
      {
        id: Math.random(),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/07_LSG_7338_010_Heidewald_Weg_durch_den_Wald_mit_alten_Robinien.jpg/400px-07_LSG_7338_010_Heidewald_Weg_durch_den_Wald_mit_alten_Robinien.jpg",
      },
      {
        id: Math.random(),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/07_LSG_7338_010_Heidewald_Weg_durch_den_Wald_mit_alten_Robinien.jpg/400px-07_LSG_7338_010_Heidewald_Weg_durch_den_Wald_mit_alten_Robinien.jpg",
      },
  ],
};

const Postreducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_POST:
    return{...state,posts:[...state.posts,{id:Math.random(),image:payload}]}
  case DELETE_POST:
    return{...state,posts:state.posts.filter((el)=>el.id!==payload)}
    case EDIT_POST:
      return{...state,posts:state.posts.map((el)=>el.id==payload.id?{...el,image:payload.newPost}:el)}
    default:
     return state
  }
};
export default Postreducer
