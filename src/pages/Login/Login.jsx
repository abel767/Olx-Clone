import './login.css'
import olxLogo from '../../assets/olx_logo.png'
function Login() {
  return (
    <>
       <div className="login">
        <div className="image-left">
            <img src={olxLogo} alt="" />
        </div>
        <div className="loginForm">
            <h1>Welcome</h1>
            <form action="">
                <input type="text" placeholder='Username' />
                <input type="email" placeholder='Your Email' />
                <input type="password" placeholder='Password' />
                <input type="text" placeholder='Mobile'/>
                <button>Submit</button>
            </form>
        </div>
       </div>
    </>
  )
}

export default Login