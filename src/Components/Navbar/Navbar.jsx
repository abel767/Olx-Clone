import './navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import chatLogo from '../../assets/chat.png';
import olxLogo from '../../assets/olx_logo.png';
import notifiLogo from '../../assets/notification.svg';
import profile from '../../assets/profile.png';
import { logout, auth, db } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import SellButton from '../../Components/SellButton/SellButton';
import SellButtonPlus from '../../Components/SellButton/SellButtonPlus';

export default function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        const fetchUserName = async () => {
          try {
            const userDoc = await getDoc(doc(db, 'user', currentUser.uid));
            if (userDoc.exists()) {
              setUserName(userDoc.data().name); // Set the username
            }
          } catch (error) {
            console.log(error);
          }
        };
        fetchUserName();
      }
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const handleNavigate = () => {
    if (user) {
      navigate('/sell');
    } else {
      navigate('/login');
    }
  };

  return (
    <div>
      <div className="navbar">
        <div className="navbar-left">
          <img src={olxLogo} alt="" />
          <input type="search" placeholder="Location" />
          <i className="fa-solid fa-chevron-down down"></i>
        </div>
        <div className="navbar-center">
          <div className="search-container">
            <input type="search" placeholder="Find Cars, Mobile Phones and more..." />
            <div className="search-icon-container">
              <i className="fa-solid fa-magnifying-glass search-icon"></i>
            </div>
          </div>
        </div>
        <div className="navbar-right">
          <p>English</p>
          {user ? (
            <p>{userName ? userName : 'Loading...'}</p> // Display the username or 'Loading...'
          ) : (
            ''
          )}
          {user ? (
            <p>
              <a href="#" onClick={() => logout()}>
                <u>Logout</u>
              </a>
            </p>
          ) : (
            <p>
              <a href="#" onClick={() => navigate('/login')}>
                <u>Login</u>
              </a>
            </p>
          )}
          <img src={chatLogo} alt="" />
          <img src={notifiLogo} alt="" />
          <img src={profile} alt="" />
          <div className="sellMenu" onClick={handleNavigate}>
            <SellButton />
            <div className="sellMenuContent">
              <SellButtonPlus />
              <span>SELL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
