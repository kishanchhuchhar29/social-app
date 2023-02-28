import "./profile.css"
import Sidebar from "../../componets/sidebar/Sidebar";
import Topbar from "../../componets/topbar/Topbar";
import Feed from "../../componets/feed/Feed";
import Rightbar from "../../componets/rightbar/Rightbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
export default function Profile() {
  const PF=process.env.REACT_APP_PUBLIC_FOLDER;
  const username=useParams().username;

  const [user,setUser]=useState({});
  useEffect(()=>{
    const fetchUser= async()=>{
   const res= await  axios.get(`/users?username=${username}`);
   setUser(res.data);
  }
   fetchUser();
   
  },[username])
  return (
    <>
    <Topbar />
    <div className="profile"> 
    <Sidebar />
        <div className="profileright">
            <div className="profilerighttop">
                <div className="profilecover">
                <img src={user.coverPicture || PF+"person/noCover.png"} alt="" className="profileCoverImg" />
                <img src={user.profilePicture? PF+user.profilePicture: PF+"person/noAvatar.png"}  alt="" className="profileUserImg" />
                </div>
            <div className="profileinfo">
                <h4 className="profileinfoName">{user.username}</h4>
                <span className="profileinfoDesc">{user.desc}</span></div>    
            </div>
            <div className="profilerightbottom">
                   <Feed username={username}/>
                   <Rightbar user={user} />
            </div>
        </div>
     
     
    </div>
  </>
  )
}

