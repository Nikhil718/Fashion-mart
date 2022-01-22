import React from "react";
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../Asset/crown.svg';
import { auth } from "../firebase/firebase-util";
import './header.style.scss';

const Header = ({ currentUser }) => (
    <div className="header-component">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/contact">
                CONTACT
            </Link>
            {currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>
                   <span> SIGN OUT</span>
                </div>
            ) : (
                <Link className='option' to='/signin'>
                    SIGN IN
                </Link>
            )}

        </div>
    </div>
);



export default Header;