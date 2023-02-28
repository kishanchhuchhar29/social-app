import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import { Users } from "../../dummyData";
import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
export default function Post({ post }) {
    const [like, setLike] = useState(post.likes.length);
    const [isliked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const { user: currentUser } = useContext(AuthContext);
    useEffect(()=>{
        setIsLiked(post.likes.includes(currentUser._id));
    },[currentUser._id,post.likes])
    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?userId=${post.userId}`);
            setUser(res.data);
        }
        fetchUser();

    }, [post.userId])
    const likeHandler = () => {
        try {
            axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });

        } catch (err) {

        }
        setLike(isliked ? like - 1 : like + 1);
        setIsLiked(!isliked)
    }
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`profile/${user.username}`}>
                            <img src={user.profilePicture ? PF + user.profilePicture : PF + "person/noAvatar.png"} alt="" className="postProfileImg" />
                        </Link>

                        <span className="postusername">{user.username}</span>
                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="posttext">{post?.desc}</span>
                    <img className="postImg" src={PF + post.img} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" onClick={likeHandler} src={`${PF}like.png`} alt="" />
                        <img className="likeIcon" onClick={likeHandler} src={`${PF}heart.png`} alt="" />
                        <span className="likecounter">{like} like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="commenttext">{post.comment} comments</span>
                    </div>
                </div>
            </div>



        </div>
    )
}
