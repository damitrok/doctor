import React, { useState } from 'react';
import cross from "../public/circul/plus.svg";
import styles from "../styles/Circuls.module.scss";



export default function Circuls({imgSrs, imgX, imgY, text, textX, textY, align}) {

    const [showText, setText] = useState(false);
    function Drow(){
        setText(!showText);
    }

    return(
        <div className={styles.circul} style={{left:imgX, top:imgY, position:'absolute'}} onMouseEnter={Drow} onMouseLeave={Drow}>
            <img className={styles.circulImg} src={imgSrs} />
            <img className={styles.cross} src={cross.src}/>
            <div className={styles.descriptions} style={{left:textX, top:textY, position:'absolute', textAlign:align}}>
                { showText ? text : null }
            </div> 
        </div>
    )
}