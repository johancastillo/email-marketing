import React from 'react'
import {Link} from 'react-router-dom'

const Menu = () => {
    return (
        <div className="col-md-4 p-0">
            <nav className="nav flex-column menu">
                <Link to="/" className="nav-link active" href="#">Home</Link>
                <Link to="/clients" className="nav-link" href="#">Clients</Link>
                <Link to="/providers" className="nav-link" href="#">Providers</Link>
            </nav>
        </div>
    )
}

export default Menu