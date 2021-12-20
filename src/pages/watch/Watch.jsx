import "./watch.scss"
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined'
import { useLocation, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { useSelector } from "react-redux"

const Watch = () => {
    const location = useLocation()
    const id = location.pathname.split("/")[2]
    const [urlVideo, setUrlVideo] = useState("")
    const user = useSelector((state) => state.user.currentUser)
    useEffect(() => {
        const getUrlVideo = async ()=>{
            try {
                const res = await axios.get("http://localhost:8800/api/movies/find/" + id, 
                    {
                        headers: {
                            token:
                            "Bearer " + user.token,
                        },
                    }
                )
                setUrlVideo(res.data.video)
            } catch (error) {
               console.log(error) 
            }
        }
        getUrlVideo()
    }, [urlVideo, id, user.token])

    return (
        <div className='watch'>
            <Link to={"/"}>
            <div className="back">
                <ArrowBackOutlinedIcon/>
                Home
            </div>
            </Link>
            <video src={urlVideo} 
                className='video' autoPlay progress="true" controls 
            />
        </div>
    )
}

export default Watch
