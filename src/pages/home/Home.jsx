import Sidebar from "../../componets/sidebar/Sidebar";
import Topbar from "../../componets/topbar/Topbar";
import Feed from "../../componets/feed/Feed";
import Rightbar from "../../componets/rightbar/Rightbar";
import "./home.css"
export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homecontainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  )
}
