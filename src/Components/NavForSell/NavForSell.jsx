import { useNavigate } from 'react-router-dom'
import arrowLeft from '../../assets/arrow_left.png'
import './navforsell.css'
function NavForSell() {
  const navigate = useNavigate()
  const handleNavigate = ()=>{
    navigate('/')
  }
  return (
    <>
    <div className="nav">
        <img src={arrowLeft} alt="" onClick={handleNavigate}/>
    </div>
    </>
  )
}

export default NavForSell