import React from 'react';
import styles from "./Contacts.module.css";

function Contacts () {

  return (
      <div className={styles.contacts}>
          <div className={styles.container}>
                 <span className={styles.blockTitle}>Contacts</span>
                 <form className={styles.formWrapper}>
                     <input className={styles.formArea} placeholder="Name" type="text"></input>
                     <input className={styles.formArea} placeholder="e-mail" type="e-mail"></input>
                     <textarea className={styles.messageArea} placeholder="Message"></textarea>
                     <button className={styles.btnSubmit} type="submit">Send</button>
                 </form>
          </div>
      </div>


  );
}

export default Contacts;
