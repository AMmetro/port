import React from 'react';
import styles from "./NavMenu.module.css";

function NavMenu() {
    return (
        <div className={styles.nav}>
            <a href="" className="link">Главная</a>
            <a href="" className="link">Скилы</a>
            <a href="" className="link">Проекты</a>
            <a href="" className="link">Контакты</a>
        </div>


    );
}

export default NavMenu;
