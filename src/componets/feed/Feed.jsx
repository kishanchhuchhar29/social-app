import { useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

// import { Posts } from "../../dummyData";
export default function Feed({username}) {
  const [posts,setPosts]=useState([]);
  const {user}=useContext(AuthContext);
 
  useEffect(()=>{
    const fetchpost= async()=>{
   const res= username?await  axios.get("/posts/profile/"+ username)
   : await  axios.get("posts/timeline/"+user._id);
   setPosts(res.data);
  }
   fetchpost();
   
  },[username,user._id])
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share/>
         {
          posts.map((p)=>(
            <Post key={p._id} post={p}/> 
           ))
          }
       
    
      </div>
    </div>
  )
}
