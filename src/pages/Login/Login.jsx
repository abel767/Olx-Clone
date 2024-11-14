import './login.css'
import olxLogo from '../../assets/olx_logo.png'
import { useState } from 'react'
import { login,signup } from '../../firebase'


function Login() {
  
  const [signState,setSignState] = useState('login')
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [mobile,setMobile] = useState(0)

const user_auth = async(event)=>{
  event.preventDefault()
  if(signState==='login'){
    await login(email,password)
  }else{
    await signup(name,email,password,mobile)
  }
}

  return (
    <>
       <div className="login">
        <div className="image-left">
            <img src={olxLogo} alt="" />
        </div>
        <div className="loginForm">
            <h1>Welcome</h1>
            <h1>{signState}</h1>
            <form action="">
                {signState === 'Create your Account' ?
                <>
                  <label htmlFor="">User Name</label>
                  <input type="text" value={name} placeholder='Eg: Abel' onChange={(e)=>{setName(e.target.value)} }/>
                </>
               : ''}

                <label htmlFor="">Email</label>
                <input value={email} type="email" placeholder='example@gmail.com' onChange={(e)=>{setEmail(e.target.value)}} />
                <label htmlFor="">Password</label>
                <input value={password} type="password" placeholder='***********' onChange={(e)=>{setPassword(e.target.value)}} />
                {signState === 'Create your Account' ?
                <>
                <label htmlFor="">Mobile</label>
                <input value={mobile} type="text" placeholder='Mobile' onChange={(e)=>{setMobile(e.target.value)}}/>
                </>    
                : ''
                }
                <button onClick={user_auth} type='submit'>Submit</button>
                {signState === 'Create your Account' ?   <p onClick={()=>setSignState('login')}>
                  Already have an account ? <a href="#">SignIn here</a>
                </p>
                 :
                 <p onClick={() => setSignState('Create your Account')}>
                 Don't have an account? <a href="#">Register here</a>
               </p>}
            </form>
        </div>
       </div>
    </>
  )
}

export default Login
