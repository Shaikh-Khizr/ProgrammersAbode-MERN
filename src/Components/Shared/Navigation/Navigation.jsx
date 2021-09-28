import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
    return (
        <nav className="container">
            <Link to="/">
            <img className={styles.navItem} src="/images/logo.png" alt="logo" />
            </Link>
        </nav>
    )
}

export default Navigation;
