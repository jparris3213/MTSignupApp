import './App.css';
import { Routes, Route, BrowserRouter as Router, Outlet, Link } from "react-router-dom";
import Layout from './components/Layout';
import SplatPage from './components/404';
import Signin from './components/Signin';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path ="/" element={<Layout/>}/>
        <Route exact path ="*" element={<SplatPage/>}/>
        <Route exact path ="signin" element={<Signin/>}/>
      </Routes>
    </Router>


  );
}

export default App;