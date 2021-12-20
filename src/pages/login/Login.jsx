import "./login.scss"
import {Link} from 'react-router-dom'
import { useState } from "react"
import { login } from "../../redux/apiCalls"
import {useDispatch} from "react-redux"

const Login = () => {
    const [input, setInput] = useState({})
    const dispatch = useDispatch()
    const handleChange = (e)=>{
        setInput(prev => {
            return {...prev, [e.target.name]: e.target.value}
        })
    }

    const handleClick = async (e) =>{
        e.preventDefault()
        login(dispatch, input)
    }

    return (
        <div className='login'>
            <div className="top">
                <div className="wrapper">
                    <img 
                        className='logo'
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" 
                        alt="" 
                        />
                </div>
            </div>
            <div className="container">
                <form action="">
                    <h1>Sign In</h1>
                    <input type="email" name="username" placeholder="Email or phone number" onChange={handleChange}/>
                    <input type="password" name="password" placeholder="Password" onChange={handleChange}/>
                    <button className="loginButton" onClick={handleClick}>Sign In</button>
                    <span>New to Netflix? 
                        <Link style={{textDecoration:'none'}} to={'/register'}>
                            <b> Sign up now.</b>
                        </Link>
                    </span>
                    <small>
                        This page is protected by Google reCAPTCHA to ensure you're not a
                        bot. <b>Learn more</b>.
                    </small>
                </form>
            </div>
        </div>
    )
}

export default Login
