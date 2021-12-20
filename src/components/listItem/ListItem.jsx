import "./listItem.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import AddIcon from '@mui/icons-material/Add'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined'
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined'
import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import { useSelector } from "react-redux"
import { publicRequest } from "../../requestMethod"

const ListItem = ({index, item}) => {
    const [isHovered, setIsHovered] = useState(false)
    const [movie, setMovie] = useState({})
    const user = useSelector((state) => state.user.currentUser)
    useEffect(() => {
        const getMovies = async()=>{
            try {
                const res = await publicRequest.get("movies/find/" + item,
                    {
                        headers: {
                            token:
                            "Bearer " + user.token,
                        },
                    }
                )
                setMovie(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getMovies()
    }, [item, user.token])
    return (
        <Link to={`/watch/${movie._id}`}  >
        <div 
            className="listItem" 
            style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
            onMouseEnter={()=>setIsHovered(true)} 
            onMouseLeave={()=>setIsHovered(false)}
        >
            <img
                src={movie.img}
                alt=""
                />
            {isHovered && (
                <>
                    <video src={movie.trailer || "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"} autoPlay={true} loop></video>
                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrowIcon className="icon"/>
                            <AddIcon className="icon"/>
                            <ThumbUpAltOutlinedIcon className="icon"/>
                            <ThumbDownOutlinedIcon className="icon"/>
                        </div>
                        <div className="itemInfoTop">
                            <span>{movie.duration}</span>
                            <span className="limit">+{movie.limit}</span>
                            <span>{movie.year}</span>
                        </div>
                        <div className="desc">
                            {movie.desc}
                        </div>
                        <div className="genre">{movie.genre}</div>
                    </div>
                </>
            )}
        </div>
        </Link>
    )
}

export default ListItem
