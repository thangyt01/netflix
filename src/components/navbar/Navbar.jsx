import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search'
import NotificationsIcon from '@mui/icons-material/Notifications'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { logout } from "../../redux/apiCalls"
import { useDispatch } from "react-redux"

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    window.onscroll = ()=>{
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return ()=> (window.onscroll = null)
    }

    const handleClick=()=>{
        logout(dispatch)
        navigate("/login")
    }

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt=""
                    />
                    <Link style={{textDecoration:"none", color:"white"}} to={"/home"}>
                        <span>HomePage</span>
                    </Link>
                    <Link style={{textDecoration:"none", color:"white"}} to={"/series"}>
                        <span>Series</span>
                    </Link>
                    <Link style={{textDecoration:"none", color:"white"}} to={"/movies"}>
                        <span>Movies</span>
                    </Link>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <SearchIcon className="icon"/>
                    <span>KID</span>
                    <NotificationsIcon className="icon"/>
                    <img
                        src="https://photo-cms-tpo.zadn.vn/w890/Uploaded/2021/thpsvhu/2021_08_11/1-2163.jpg"
                        alt=""
                    />
                    <div className="profile">
                        <ArrowDropDownIcon className="icon"/>
                        <div className="options">
                            <span>Setting</span>
                            <span onClick={handleClick}>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
