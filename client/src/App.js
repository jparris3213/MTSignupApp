import './App.css';
import { Routes, Route, BrowserRouter as Router} from "react-router-dom";
import Layout from './components/Layout';
import SplatPage from './components/404';
import Signin from './components/Signin';
import Signout from './components/Signout';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path ="/" element={<Layout/>}/>
        <Route exact path ="*" element={<SplatPage/>}/>
        <Route exact path ="signin" element={<Signin/>}/>
        <Route exact path ="signout" element={<Signout/>}/>
      </Routes>
    </Router>


  );
};

export default App;