import React from "react"
import logo from "../../assets/icons/logo2.gif"
import owlOnFire from "../../assets/images/iaall_owl.gif"
import "./header.css"
import { Link } from "react-scroll"
import { NavLink } from "react-router-dom"
import { useAppSelector } from "../../store/store"



const Header = () => {

    const { web3, accounts, ownerAddress } = useAppSelector((state) => state.web3Connect);

    return (
        <div className="header-container" >
            <div className="elementor-shape elementor-shape-top" data-negative="false">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path className="elementor-shape-fill" d="M500,98.9L0,6.1V0h1000v6.1L500,98.9z"></path>
                </svg>
            </div>

            <div className="elementor-shape elementor-shape-bottom" data-negative="false">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 20" preserveAspectRatio="none">
                    <path className="elementor-shape-fill" d="M0,0v3c0,0,393.8,0,483.4,0c9.2,0,16.6,7.4,16.6,16.6c0-9.1,7.4-16.6,16.6-16.6C606.2,3,1000,3,1000,3V0H0z"></path>
                </svg>
            </div>

            <div className="header-content navbar navbar-expand-lg">
                <div className="header-col-1 navbar-brand">
                    <NavLink to="/"> <img src={logo} /></NavLink>  
                </div>
                <div className="div-gif">
                        <img src={owlOnFire} />
                    </div>
                <button className="navbar-toggler header-col-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                   
                <div className="header-col-2 collapse navbar-collapse"  id="navbarSupportedContent" >
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <NavLink to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item active">
                            <Link to="footer-container">
                                <a>Community</a>
                            </Link>
                        </li>
                        {
                            web3 && accounts === ownerAddress ? <li className="nav-item active">
                                <a>
                                    <NavLink to="admin">
                                        Admin
                                    </NavLink>
                                </a>
                            </li> : ""
                        }
                        {
                            web3 ?
                                <li className="nav-item active">
                                    <NavLink to="collection">
                                        Collection
                                    </NavLink>
                                </li> : ""
                        }


                    </ul>
                </div>

            </div>

        </div>
    )
}

export default Header