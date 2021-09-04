import React from 'react';
import styles from "./Main.module.css";
import photos from "./photos.jpeg"

function Main() {

    return (


        <div className={styles.main}>

            <div className={styles.container}>

                <div className={styles.greeting}>
                    <span className={styles.greeting}>Привет</span>
                    <span className={styles.greeting}>Меня зовут Андрей Мицкевич!</span>
                    <span className={styles.greeting}>Я front-end разработчик</span>
                </div>

                <div className={styles.photo}>
                    <img style={{width: 300}} src={photos} alt="photos"/>
                </div>

            </div>


        </div>

    );
}

export default Main;
