import React from 'react';
import styles from "./Contacts.module.css";
import axios from 'axios'

function Contacts () {


    const [mailData, setData] = React.useState({name:"",mail:"",message:""});


    const inputData =(event, type)=>{
        switch (type) {
            case "name":{
                 setData({...mailData, name: event.target.value})
            };break
            case "mail":{
                setData({...mailData, mail: event.target.value})
            };break
            case "message":{
                setData({...mailData, message: event.target.value})
            }
        }
        return
    }

    const submitForm=(event)=>{
        console.log(mailData)
        event.preventDefault();
        axios.post("http://localhost:3010/sendEmail", {...mailData})
    }

    return (
        <div className={styles.contacts}>
            <div className={styles.container}>
                <span className={styles.blockTitle}>Contacts</span>
                <form
                    className={styles.formWrapper}
                    onSubmit={submitForm}>
                    <input className={styles.formArea} placeholder="Name" type="text" onChange={(e)=>inputData(e,"name")} ></input>
                    <input className={styles.formArea} placeholder="e-mail" type="e-mail" onChange={(e)=>inputData(e,"mail")}></input>
                    <textarea className={styles.messageArea} placeholder="Message" onChange={(e)=>inputData(e,"message")}></textarea>
                    <button className={styles.btnSubmit} type="submit">Send</button>

                </form>
            </div>
        </div>


    );
}

export default Contacts;
