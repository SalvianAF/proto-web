import Link from 'next/link'
import styles from './navBar.module.css'
import Button from './button'
import ListIcon from '@mui/icons-material/List';
import { useState } from "react";
import Image from 'next/image';

export default function NavBar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    console.log(isNavExpanded)
    return(
        <div className={styles.nav}>
                <div>
                    <Link href='#tagline' className={styles["nav-txt"]}>
                        <Image
                            src="/images/porto-putih.png" // Route of the image file
                            height={43} // Desired size with correct aspect ratio
                            width={150} // Desired size with correct aspect ratio
                            className={styles.logo}
                            alt="Background"
                        />
                    </Link>
                </div>
          
            <div style={{alignSelf:"center"}}>
                <div className={styles["nav-menu"]}>
                    <Button type="outlined" isActive={true} style={{marginRight:10}}  color={"white"}>
                        <Link href='#sample' className={styles["nav-txt"]}>
                            HOME
                        </Link>
                    </Button>
                    <Button type="outlined" isActive={true} style={{marginRight:10}}  color={"white"}>
                        <Link href='#service' className={styles["nav-txt"]}>
                            SERVICE
                        </Link>
                    </Button>
                    <Button type="outlined" isActive={true} style={{marginRight:10}}  color={"white"}>
                        <Link href='#contact' className={styles["nav-txt"]} >
                            CONTACT
                        </Link>
                    </Button>
                </div>
                <button  onClick={() => {setIsNavExpanded(!isNavExpanded)}} className={styles["nav-icon"]}>
                    <ListIcon />
                </button>
            </div>
            <div className={isNavExpanded? `${styles["nav-menu-mobile"]} ${styles["expanded"]}` : styles["nav-menu-mobile"]}>
                <div className={styles["nav-btn-mobile"]}>
                    <Link href='#sample' className={styles["nav-txt"]} onClick={() => {setIsNavExpanded(false)}}>
                        Home
                    </Link>
                </div>
                <div className={styles["nav-btn-mobile"]}>
                    <Link href='#service' className={styles["nav-txt"]} onClick={() => {setIsNavExpanded(false)}}>
                        Service
                    </Link>
                </div>
                <div className={styles["nav-btn-mobile"]}>
                    <Link href='#contact' className={styles["nav-txt"]} onClick={() => {setIsNavExpanded(false)}}>
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    )
}