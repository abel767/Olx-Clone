import './navbar.css'
import chatLogo from '../../assets/chat.png'
import olxLogo from '../../assets/olx_logo.png'
import notifiLogo from '../../assets/notification.svg'
import profile from '../../assets/profile.png'
import SellButton from '../SellButton'
export default function Navbar() {
  return (
    <div>
        <div className="navbar">
            <div className="navbar-left">
                <img src={olxLogo} alt="" />
                <input type="search"  placeholder='Location'/>
            </div>
            <div className="navbar-center">
                <input type="search" placeholder='Find Cars, Mobile Phones and more....'/>
            </div>
            <div className='navbar-right'>
              <p>English</p>
              <img src={chatLogo} alt="" />
              <img src={notifiLogo} alt="" />
              <img src={profile} alt="" />
               <SellButton/>
            </div>
        </div>
    </div>
  )
}
