import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import HomePage from './HomePage';
import DetailsPage from './DetailsPage';
import Login from './Login';
import Register from './Register';
import SingleAlbum from './SingleAlbum';
import SinglePhoto from './SinglePhoto';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/details' element={<DetailsPage />}  />
          <Route path='/album' element={<SingleAlbum />}  />
          <Route path='/photo' element={<SinglePhoto />}  />
          </Routes>
        </div>
      </Router>
        
      
    </div>
  );
}

export default App;
