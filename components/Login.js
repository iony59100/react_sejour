import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setUser }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        
        // Simuler un login (on met un rôle en dur)
        if (email === 'admin@example.com' && password === 'admin') {
            setUser({ username: 'Admin', role: 'ROLE_ADMIN' });
            navigate('/home');
        } else if (email === 'inf@example.com' && password === 'inf') {
            setUser({ username: 'Infirmier', role: 'ROLE_INF' });
            navigate('/home');
        } else {
            setError('Identifiants incorrects');
        }
    };

    return (
        <div className="container mt-4">
            <h2>Connexion</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Mot de passe</label>
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary">Se connecter</button>
            </form>
        </div>
    );
}

export default Login;
