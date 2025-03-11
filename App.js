import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';

function App() {
    const [user, setUser] = useState(null);

    return (
        <Router>
            <Navbar user={user} />
            <Routes>
                <Route path="/" element={<Login setUser={setUser} />} />
                <Route path="/home" element={user ? <Home user={user} /> : <Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

export default App;
