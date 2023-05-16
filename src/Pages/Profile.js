import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add_post, delete_post, edit_post } from '../redux/action/PostAction'

const Profile = () => {
    const data=JSON.parse(localStorage.getItem("data"))
    const posts=useSelector((state)=>state.posts)
    const [newPost,setNewPost]=useState("")
    const dispatch=useDispatch()
  return (
    <>
    <div className='profile-nav'>
        <h1>{data.name}</h1>
        <span>
            <p>{posts.length}</p>
            <p>Post</p>
        </span>
        <span>
            <p>80</p>
            <p>follower</p>
        </span>
        <span>
            <p>500</p>
            <p>following</p>
        </span>
    </div>
    <input type="text" onChange={(e)=>setNewPost(e.target.value)}/>
    <button onClick={()=>dispatch(add_post(newPost))}>Add</button>
    <div className='posts'>
{posts.map((el)=><div >
<img src={el.image} alt="404" />
<button onClick={()=>dispatch(delete_post(el.id))}>Delete</button>
<button onClick={()=>dispatch(edit_post(el.id,newPost))}>edit</button>
</div>)}
    </div>
    </>
  )
}

export default Profile