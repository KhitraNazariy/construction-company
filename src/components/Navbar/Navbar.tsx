import React from 'react';

import styles from './Navbar.module.scss';
import logo from '../../assets/logo.png';
import phone from '../../assets/phone.png';

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <img src={logo} alt="logo"/>
            <ul className={styles.nav_menu}>
                <li className={styles.nav_menu_item}>для будинку</li>
                <li className={styles.nav_menu_item}>для бізнесу</li>
                <li className={styles.nav_menu_item}>технологія</li>
                <li className={styles.nav_menu_item}>контакти</li>
            </ul>
            <div className={styles.nav_phone}>
                <img src={phone} alt="phone img"/>
                <span className={styles.nav_phone_number}>+38 (040) 657-69-09</span>
            </div>
        </nav>
    );
};

export default Navbar;