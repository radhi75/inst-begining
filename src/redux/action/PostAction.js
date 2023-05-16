import { ADD_POST, DELETE_POST, EDIT_POST } from "../actionTypes/PostTypes"

export const add_post=(newPost)=>{
    return{type:ADD_POST,payload:newPost}
}
export const delete_post=(id)=>{
    return{type:DELETE_POST,payload:id}
}
export const edit_post=(id,newPost)=>{
    return{type:EDIT_POST,payload:{id,newPost}}
}