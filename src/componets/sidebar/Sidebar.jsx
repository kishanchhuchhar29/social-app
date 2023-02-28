import "./sidebar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import { Users } from "../../dummyData";
import Closefriend from "../closefriend/Closefriend";
export default function Sidebar() {
  return (
    <div className="sidebar">
       <div className="sidebarWrapper">
          <ul className="sidebarList">
            <li className="sidebarListItem">
                <RssFeedIcon className="sidebarIcon"/>
                <span className="sidebarListItemtext">Feed</span>
            </li>
          </ul>
          <ul className="sidebarList">
            <li className="sidebarListItem">
                <ChatIcon className="sidebarIcon"/>
                <span className="sidebarListItemtext">chats</span>
            </li>
          </ul>
          <ul className="sidebarList">
            <li className="sidebarListItem">
                <PlayCircleIcon className="sidebarIcon"/>
                <span className="sidebarListItemtext">videos</span>
            </li>
          </ul>
          <ul className="sidebarList">
            <li className="sidebarListItem">
                <GroupIcon className="sidebarIcon"/>
                <span className="sidebarListItemtext">groups</span>
            </li>
          </ul>
          <ul className="sidebarList">
            <li className="sidebarListItem">
                <BookmarkIcon className="sidebarIcon"/>
                <span className="sidebarListItemtext">Bookmark</span>
            </li>
          </ul>
          <ul className="sidebarList">
            <li className="sidebarListItem">
                <HelpOutlineIcon  className="sidebarIcon"/>
                <span className="sidebarListItemtext">questions</span>
            </li>
          </ul>
          <ul className="sidebarList">
            <li className="sidebarListItem">
                <WorkOutlineIcon className="sidebarIcon"/>
                <span className="sidebarListItemtext">jobs</span>
            </li>
          </ul>
          <ul className="sidebarList">
            <li className="sidebarListItem">
                <EventIcon className="sidebarIcon"/>
                <span className="sidebarListItemtext">Event</span>
            </li>
          </ul>
          <ul className="sidebarList">
            <li className="sidebarListItem">
                <SchoolIcon className="sidebarIcon"/>
                <span className="sidebarListItemtext">course</span>
            </li>
          </ul>
          <button className="sidebarButton">Show More</button>
          <hr className="sidebarHr" />
          <ul className="sidebarFriendList">
             {Users.map((u)=>(
              <Closefriend key={u.id} user={u}/>
             ))

             }
          </ul>
       </div>
        </div>
  )
}
