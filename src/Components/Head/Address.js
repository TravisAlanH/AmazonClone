import React from 'react'
import { FiMapPin } from 'react-icons/fi'
//import { useTranslation } from 'react-i18next'

export default function Address() {

    //const {t} = useTranslation();

    const styles = {
    "main": {
        "display": "flex",
        "flexDirection": "row",

    } ,
    "main:hover" : {
        
    },
    "child": {
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "center",

    },
    "Hello": {
        "fontSize" : ".7em",
        "padding" : 0,
        "margin" : 0,
        "color" : "rgb(204,204,204)"
    },
    "SelectYourAddress": {
        "fontSize" : ".9em",
        "padding" : 0,
        "margin" : 0,
        "color" : "white",
        "fontWeight" : "bold"
    },
    "iconContainer": {
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "end",
    },
    "icon": {
        "color" : "white",
        "fontSize" : "1.1em",
        "paddingRight" : ".2em",

    } }


  return (
    <div className="Header-Vertical-Center">
        <div style={styles.main}>
            <div style={styles.iconContainer}>
                <FiMapPin style={styles.icon}/>
            </div>
            <div style={styles.child}>
                <p style={styles.Hello}>Hello</p>
                <p style={styles.SelectYourAddress}>Select you address</p>
            </div>
        </div>
    </div>
  )


}
