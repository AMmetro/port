import React from 'react';
import styles from "./Footer.module.css";

function Footer () {

  return (

      <div className={styles.footer}>
           <div className={styles.container}>
               <span className={styles.blockTitle}>Мицкевич Андрей </span>
               <div className={styles.socialBlock}>
                   <div className={styles.socialIcons}>1</div>
                   <div className={styles.socialIcons}>2</div>
                   <div className={styles.socialIcons}>3</div>
                   <div className={styles.socialIcons}>4</div>
               </div>
               <span className={styles.copyright}>@2019 All right reserved </span>
           </div>
      </div>
  );
}

export default Footer;
