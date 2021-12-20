import Home from "./pages/home/Home";
import "./app.scss"
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom"
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.currentUser)
  return (
    <Router>
      <Routes>
        <Route path="/login" element={!user ? <Login/> : <Navigate replace to="/home" />}/>
        <Route path="/register" element={!user ? <Register/> : <Navigate replace to="/home" />}/>
        <Route path="/*" render element={!user ? <Navigate replace to = "/login" /> : <Home />}/>
        <Route exact path="/" element={!user ? <Navigate replace to = "/login" /> : <Home />}/>
        <Route path="/home" element={!user ? <Navigate replace to = "/login" /> : <Home />}/>
        <Route path="/moives" element={!user ? <Navigate replace to = "/login" /> : <Home type="movies"/>}/>
        <Route path="/series" element={!user ? <Navigate replace to = "/login" /> : <Home type="series"/>}/>
        <Route path="/watch/*" element={!user ? <Navigate replace to = "/login" /> : <Watch/>}/>
      </Routes>
    </Router>
  );
}

export default App;
