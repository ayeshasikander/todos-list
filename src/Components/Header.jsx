import React from 'react'
import { Link } from 'react-router-dom'
function Header(props) {
    return (

        <nav className="navbar1 navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand link-dark" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="fix2 navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link link-dark active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link link-dark" to="/about">About</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Header
