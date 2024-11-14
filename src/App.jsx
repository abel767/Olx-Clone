import Home from './pages/FrontPage/Home';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import SellForm from './pages/SellForm/SellForm';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import DetailOfProduct from './pages/DetailOfProduct/DetailOfProduct';

function App() {
  const [user, setUser] = useState(null);

  // Check authentication status when the component mounts
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe; // Cleanup subscription on unmount
  }, []);

  return (
    <Routes>
      {/* Home route: Accessible to all users */}
      <Route path="/" element={<Home />} />
      
      {/* Login route: Redirect to home if user is logged in */}
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      
      {/* Sell route: Only accessible if user is logged in; otherwise, redirect to login */}
      <Route path="/sell" element={user ? <SellForm /> : <Navigate to="/login" />} />
      
      {/* Product detail route: Accessible to all users */}
      <Route path="/productdetail/:id" element={<DetailOfProduct />} />
    </Routes>
  );
}

export default App;
