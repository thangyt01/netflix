import { useEffect, useState } from "react"
import Featured from "../../components/featured/Featured"
import List from "../../components/list/List"
import Navbar from "../../components/navbar/Navbar"
import "./home.scss"
import { useSelector } from "react-redux"
import Footer from "../../components/footer/Footer"
import { publicRequest } from "../../requestMethod"

const Home = ({type}) => {
    const [lists, setLists] = useState([])
    const [genre, setGenre] = useState(null)
    const user = useSelector((state) => state.user.currentUser)
    useEffect(() => {
        const getRandomList = async () =>{
            try {
                const res = await publicRequest.get(`lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,
                    {
                        headers: {
                            token:
                            "Bearer " + user.token,
                        },
                    }
                )
                setLists(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getRandomList()
    }, [type, genre, user.token])

    return (
        <div className='home'>
            <Navbar/>
            <Featured type={type} setGenre={setGenre}/>
            {lists.map(list => (
                <List list={list} key={list._id}/>
            ))}
            <Footer/>
        </div>
    )
}

export default Home
