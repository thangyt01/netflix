import "./footer.scss"
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import ContactsIcon from '@mui/icons-material/Contacts'
import RoomIcon from '@mui/icons-material/Room'
import MailIcon from '@mui/icons-material/Mail'

const Footer = () => {
    return (
        <div className="footer">
            <div className="left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos voluptatem doloremque explicabo nisi incidunt, rem amet hic quam sunt quasi deleniti dignissimos molestiae ut itaque consequatur? Dolores sit atque vel?</span>
                <div className="containerIcon">
                    <div className="icon" style={{color:"#0f90f3"}}>
                        <FacebookIcon/>
                    </div>
                    <div className="icon" style={{color:"#ff0000"}}>
                        <YouTubeIcon/>
                    </div>
                    <div className="icon" style={{color:"#55ACEE"}}>
                        <TwitterIcon/>
                    </div>
                </div>
            </div>
            <div className="right">
                <h1 className="title">Contact</h1>
                <div><RoomIcon style={{marginRight:"5px"}}/> Yen Mo , Ninh Binh, Viet Nam</div>    
                <div><ContactsIcon style={{marginRight:"5px"}}/> +84 493 756 23</div>
                <div><MailIcon style={{marginRight:"5px"}}/> contact@dxt.dev</div>
            </div>
        </div>
    )
}

export default Footer
