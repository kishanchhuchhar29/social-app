import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from "../online/Online"
export default function Rightbar({user}) {
  const PF=process.env.REACT_APP_PUBLIC_FOLDER;
  const Homerightbar=()=>{
    
    return(
      <>
              <div className="birthdayContainer">
          <img src="assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthDayText">
            <b>anushka kohli </b> and <b>4 other friends</b> have a birthday today.
          </span>
        </div>
        <img src="/assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">online friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u)=>(
            <Online key={u.id} user={u}/>
          ))}
        </ul>
      </>
    )
  }
  const Profilerightbar=()=>{
    return(
      <>
      <h4 className="rightbarTitle">User information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">city:</span>
          <span className="rightbarInfovalue">{user.city}</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">from:</span>
          <span className="rightbarInfovalue">{user.from}</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">relationship:</span>
          <span className="rightbarInfovalue">{user.relationship===1?"Single":
          user.relationship===2?"Married":"-"}</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User friend</h4>
       {/* rightbarTitle:className not same as above */}
       <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src={`${PF}person/1.jpeg`} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">john cartam</span>
        </div>
        <div className="rightbarFollowing">
          <img src={`${PF}person/2.jpeg`} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">john cartam</span>
        </div>
        <div className="rightbarFollowing">
          <img src={`${PF}person/3.jpeg`} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">john cartam</span>
        </div>
        <div className="rightbarFollowing">
          <img src={`${PF}person/4.jpeg`} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">john cartam</span>
        </div>
        <div className="rightbarFollowing">
          <img src={`${PF}person/5.jpeg`} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">john cartam</span>
        </div>
        <div className="rightbarFollowing">
          <img src={`${PF}person/6.jpeg`} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">john cartam</span>
        </div>
       </div>

      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <Profilerightbar/>:<Homerightbar/>}
       
      </div>
    </div>
  )
}
