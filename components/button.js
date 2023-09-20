import styles from './button.module.css'
import Link from 'next/link'

export default function Button(props) {
    return(
        <>
        {props.type === "outlined"?
            <div className={`${styles["btn"]} ${styles["outlined"]}`} style={props.style}>
                {props.children}
            </div>
        :
            <div className={styles["btn"]} style={{backgroundColor:props.color}}>
                {props.children}
            </div>
        }
        </>

    )
}