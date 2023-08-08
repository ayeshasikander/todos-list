import React from 'react'
import { Link } from 'react-router-dom'
import { useTaskCount } from './Taskcountcontext'
function Header(props) {
    const { taskCount } = useTaskCount();
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
        
            <div className='mx-5 mt-1'>
                <button className=""><svg className="svg" xmlns="http://www.w3.org/2000/svg" version="1.0" width="256.000000pt" height="256.000000pt" viewBox="0 0 256.000000 256.000000" preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                        <path d="M200 2525 c-60 -19 -123 -74 -152 -133 -22 -44 -23 -60 -26 -269 -4 -213 -3 -222 17 -242 l21 -21 1180 0 1180 0 -2 -820 -3 -820 -38 -37 -37 -38 -1058 0 c-1041 0 -1057 0 -1084 20 -60 44 -58 23 -58 729 0 633 0 646 -20 666 -11 11 -29 20 -40 20 -11 0 -29 -9 -40 -20 -20 -20 -20 -33 -20 -663 0 -738 -2 -716 80 -797 84 -85 13 -80 1180 -80 1167 0 1096 -5 1180 80 85 84 80 13 80 1180 0 1167 5 1096 -80 1180 -84 85 -12 80 -1184 79 -853 0 -1039 -3 -1076 -14z m231 -254 c64 -65 20 -171 -71 -171 -33 0 -48 6 -71 29 -64 65 -20 171 71 171 33 0 48 -6 71 -29z m400 0 c64 -65 20 -171 -71 -171 -33 0 -48 6 -71 29 -64 65 -20 171 71 171 33 0 48 -6 71 -29z m1427 -27 c30 -20 30 -68 0 -88 -20 -14 -82 -16 -482 -16 -413 0 -461 2 -478 17 -22 20 -23 61 -1 85 15 17 43 18 477 18 402 0 464 -2 484 -16z"></path>
                    </g>
                </svg>
                    <i className="fas fa-fingerprint"></i>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {taskCount > 0 ? taskCount : null}
                        <span className="visually-hidden">unread tasks</span>
                    </span>
                </button>
            </div>
        </nav>
    )
}

export default Header
