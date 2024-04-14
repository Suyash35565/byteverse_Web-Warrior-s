import './App.css';

import Home from './screens/Home';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import SignupPd from './screens/SignupPd';
import SignupCd from './screens/SignupCd';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          
          <Route exact path="/signuppd" element={<SignupPd/>}/>
          <Route exact path="/signupcd" element={<SignupCd/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
