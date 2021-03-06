import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useRoutes } from './routes';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';
import { Navbar } from './components/NavBar/Navbar';
import { Loader } from './components/Loader/Loader';
import 'materialize-css';

//import './App.css';

function App() {
  const { token, login, logout, userId, ready } = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)

  if (!ready) {
    return <Loader />
  }

  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
    }}>
      <BrowserRouter>
      { isAuthenticated && <Navbar /> }
     <div className="container">
      {routes}
     </div>
    </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
