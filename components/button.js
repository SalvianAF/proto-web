import styles from './button.module.css'
import Link from 'next/link'

export default function Button(props) {
    return(
        <>
        {props.isActive == true?
            props.type === "outlined"? 
                <div className={`${styles["btn"]} ${styles["outlined"]}`} style={props.style}>
                    {props.children}
                </div>
            :
                <div className={`${styles["btn"]} ${styles["default"]}`} style={{backgroundColor:props.color}}>
                    {props.children}
                </div>
        :
                props.type === "outlined"? 
                <div className={`${styles["inactive"]} ${styles["outlined"]}`} style={props.style}>
                    {props.children}
                </div>
            :
                <div className={`${styles["inactive"]}`} style={{backgroundColor:props.color}}>
                    {props.children}
                </div>
        }
        {/* {props.type === "outlined"? 
            <div className={`${styles["btn"]} ${styles["outlined"]}`} style={props.style}>
                {props.children}
            </div>
        :
            <div className={styles["btn"]} style={{backgroundColor:props.color}}>
                {props.children}
            </div>
        } */}
        </>

    )
}