import "./post.css"
import {MoreVert} from "@material-ui/icons";

export default function Post() {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="/assests/person/1.jpeg" alt="" className="postProfileImg"/>
                        <span className="postUsername">Jennifer Dululu</span>
                        <span className="postDate">5 mins ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">HEY MF</span>
                    <img className="postImg" src="/assests/post/1.jpeg"/>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="/assests/like.png"/>
                        <img className="likeIcon" src="/assests/heart.png"/>
                        <span className="postLikeCounter">32 People liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">9 Comments</span>
                    </div>
                </div>

            </div>
        </div>
    )
}