import { Routes, Route, Navigate} from 'react-router-dom';
import Login from './pages/login'
import User from './pages/user'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/" element={<Navigate to="/user"/>}/>
      </Routes>
    </div>
  );
}

export default App;
