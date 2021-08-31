import React from 'react';
import styles from "./Skills.module.css";

function Skills () {

  return (

      <div className={styles.skills}>
              <div className={styles.container}>

                  <div className={styles.headerTitle}>
                  <h2 className={styles.blockTitle}>My skills </h2>
                  <div className={styles.line}></div>
                  </div>

                  <div className={styles.skillsWrapper}>

                      <div className={styles.skill}>
                          <div className={styles.icon}>
                              <img src="" alt="" />
                          </div>
                          <span className={styles.skillTitle}>HTML CSS</span>
                          <span className={styles.description}>HTML HTML HTML HTMht mlll llL</span>
                      </div>

                      <div className={styles.skill}>
                          <div className={styles.icon}>
                              <img src="" alt="" />
                          </div>
                          <span className={styles.skillTitle}>Java script</span>
                          <span className={styles.description}>JavaJ avaJa dgd  script  dfg dJ avaJa dgd  dgdfgfdg  dfg dJ avaJa dgd  dgdfgfdg  dfg dJ avaJa dgd  dgdfgfdg  dfg dd d vaJavaJ avaJav aJava sfsfs </span>
                      </div>

                      <div className={styles.skill}>
                          <div className={styles.icon}>
                              <img src="" alt="" />
                          </div>
                          <span className={styles.skillTitle}>React</span>
                          <span className={styles.description}>React React ReactRe actRe actReactR eactReact React</span>
                      </div>

                  </div>

              </div>
       </div>

  );
}

export default Skills;

