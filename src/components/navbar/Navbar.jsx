import "./navbar.scss"
import {SearchOutlined} from "@mui/icons-material";
import {LanguageOutlined} from "@mui/icons-material";
import {DarkModeOutlined} from "@mui/icons-material";
import {FullscreenExitOutlined} from "@mui/icons-material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import {ChatBubbleOutlined} from "@mui/icons-material";
import {ListAltOutlined} from "@mui/icons-material";



const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search..."/>
                    <SearchOutlined/>
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlined className="icon"/>
                    </div>
                    <div className="item">
                        <DarkModeOutlined className="icon"/>
                    </div>
                    <div className="item">
                        <FullscreenExitOutlined className="icon"/>
                    </div>
                    <div className="item">
                        <NotificationsNoneIcon className="icon"/>
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlined className="icon"/>
                        <div className="counter">2</div>
                    </div>
                    <div className="item">
                        <ListAltOutlined className="icon"/>
                    </div>
                    <div className="item">
                        <img
                            src="https://images.pexels.com/photos/11532600/pexels-photo-11532600.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                            alt=""
                            className="avatar"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar