import "./featured.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import { useState, useEffect } from "react"
import {Link} from "react-router-dom"
import axios from "axios"
import { useSelector } from "react-redux"

const Featured = ({type, setGenre}) => {
    const [content, setContent] = useState({})
    const user = useSelector((state) => state.user.currentUser)
    useEffect(() => {
        const getRandomContent = async()=>{
            try {
                const res = await axios.get(`http://localhost:8800/api/movies/random?type=${type}`,
                {
                    headers: {
                        token:
                        "Bearer " + user.token,
                    },
                })
                setContent(res.data[0])
            } catch (error) {
                console.log(error)
            }
        }
        getRandomContent()
    }, [type, user.token])

    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movies" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            <img
                src={content.img}
                alt=""
            />
            <div className="info">
                {content.imgTitle ? 
                    <img
                        src={content.imgTitle}
                        alt=""
                    />
                    :
                    <h1>{content.title}</h1>
                }
                <span className="desc">
                    {content.desc}
                </span>
                <div className="buttons">
                    <Link style={{textDecoration:"none"}} to={"/watch/" + content._id} >
                        <button className="play">
                            <PlayArrowIcon/>
                            <span>Play</span>
                        </button>
                    </Link>
                    <button className="more">
                        <InfoOutlinedIcon />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured
