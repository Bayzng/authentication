import './App.css';
import Home from './component/Home/Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Register from './pages/auth/Register';
import UserPage from './component/userPage/UserPage';
import { Navigate } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from './component/context/AuthContext';
import Login from './pages/auth/Login';

function App() {

  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/home" />;
    }

    return children
  };


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<ProtectedRoute><UserPage/></ProtectedRoute>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path="/userPage" element={<UserPage/> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;