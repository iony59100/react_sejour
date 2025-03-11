import { Link } from 'react-router-dom';

function Navbar({ user }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Mon Application</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        {user?.role === 'ROLE_INF' && (
                            <>
                                <li className="nav-item">
                                    <Link className="btn btn-primary" to="/sejour-date">Séjours à une date donnée</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="btn btn-primary" to="/arrivee-patient">Arrivée Patient</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="btn btn-primary" to="/sortie-patient">Sortie Patient</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="btn btn-primary" to="/prochain-sejour">Séjours à venir</Link>
                                </li>
                            </>
                        )}

                    </ul>
                </div>

                <span className="navbar-text ms-auto">
                    {user ? (
                        <>
                            Connecté en tant que {user.username} ({user.role})  
                            <button className="btn btn-danger ms-2" onClick={() => window.location.href = '/'}>Déconnexion</button>
                        </>
                    ) : (
                        "Vous n'êtes pas connecté."
                    )}
                </span>
            </div>
        </nav>
    );
}

export default Navbar;
