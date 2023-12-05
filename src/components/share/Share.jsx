import "./share.css"
import {EmojiEmotions, Label, PermMedia, Room} from "@material-ui/icons"

export default function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="/assests/person/1.jpeg" alt="" className="shareProfileImg"/>
                    <input placeholder="What's going on?" className="shareInput"/>
                </div>
                <hr className="shareHr"/>
                <div className="shareBottom">
                        <div className="shareOptions">
                            <div className="shareOption">
                                <PermMedia htmlColor="tomato" className="shareIcon"/>
                                <span className="shareOptionText">photo or video</span>
                            </div>
                            <div className="shareOption">
                                <Label htmlColor="blue" className="shareIcon"/>
                                <span className="shareOptionText">Tag</span>
                            </div>
                            <div className="shareOption">
                                <Room htmlColor="green" className="shareIcon"/>
                                <span className="shareOptionText">Location</span>
                            </div>
                            <div className="shareOption">
                                <EmojiEmotions htmlColor="gold" className="shareIcon"/>
                                <span className="shareOptionText">Feeling</span>
                            </div>
                        </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    )
}