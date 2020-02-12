import React from 'react';
import styles from "./Projects.module.css";

function Projects() {

    return (
        <div className={styles.projects}>
            <div className={styles.container}>
                <span className={styles.blockTitle}>My projects </span>
                <div className={styles.projectsWrapper}>

                    <div className={styles.project}>
                        <div className={styles.projectImg}>
                            <a className={styles.BtnShow} href="">show</a>
                        </div>
                        <span className={styles.projectsTitle}>To do list</span>
                        <span className={styles.description}>To do listTo do listTo do listTo do listTo do listTo do listTo do listTo do listTo do listTo do listTo do list</span>
                    </div>

                    <div className={styles.project}>
                        <div className={styles.projectImg}>
                            <a className={styles.BtnShow} href="">show</a>
                        </div>
                        <span className={styles.projectsTitle}>Social network</span>
                        <span className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Possimus quia sapiente tempora unde voluptatibus. Accusantium adipisci consectetur consequatur,
                      doloribus dolorum eligendi explicabo fugiat itaque laborum magni maxime possimus, quas, voluptatibus</span>
                    </div>

                    <div className={styles.project}>
                        <div className={styles.projectImg}>
                            <a className={styles.BtnShow} href="">show</a>
                        </div>
                        <span className={styles.projectsTitle}>Calculator</span>
                        <span className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Possimus quia sapiente tempora unde voluptatibus. Accusantium adipisci consectetur consequatur,
                      doloribus dolorum eligendi explicabo fugiat itaque laborum magni maxime possimus, quas, voluptatibus</span>
                    </div>

                </div>
            </div>
        </div>


    );
}

export default Projects;

