import "./rightbar.css";

export default function Rightbar() {
    return(
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img src="/assests/gift.png" className="birthdayImg"/>
                    <span className="birthdayText">
                        <b>Mark Ayles</b> and <b>3 other friends</b> have a birthdays today
                    </span>
                </div>
                <img className="rightbarAd" src="/assests/ad.png"/>
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="/assests/person/3.jpeg"/>
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Jessica White</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="/assests/person/3.jpeg"/>
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Jessica White</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="/assests/person/3.jpeg"/>
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Jessica White</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}