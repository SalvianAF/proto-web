import Link from 'next/link'
import styles from './navBar.module.css'
import Button from './button'
import ListIcon from '@mui/icons-material/List';
import { useState } from "react";

export default function NavBar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    console.log(isNavExpanded)
    return(
        <div className={styles.nav}>
                <Button color="red">
                    <Link href='/home' className={styles["nav-txt"]}>
                        Proto
                    </Link>
                </Button>
          
            <div>
                <div className={styles["nav-menu"]}>
                    <Button type="outlined" style={{marginRight:10}}>
                        <Link href='/' className={styles["nav-txt"]}>
                            Home
                        </Link>
                    </Button>
                    <Button type="outlined" style={{marginRight:10}}>
                        <Link href='/' className={styles["nav-txt"]}>
                            Service
                        </Link>
                    </Button>
                    <Button type="outlined" style={{marginRight:10}}>
                        <Link href='/' className={styles["nav-txt"]}>
                            Contact
                        </Link>
                    </Button>
                </div>
                <button  onClick={() => {setIsNavExpanded(!isNavExpanded)}} className={styles["nav-icon"]}>
                    <ListIcon />
                </button>
            </div>
            <div className={isNavExpanded? `${styles["nav-menu-mobile"]} ${styles["expanded"]}` : styles["nav-menu-mobile"]}>
                <div className={styles["nav-btn-mobile"]}>
                    <Link href='/' className={styles["nav-txt"]}>
                        Home
                    </Link>
                </div>
                <div className={styles["nav-btn-mobile"]}>
                    <Link href='/' className={styles["nav-txt"]}>
                        Service
                    </Link>
                </div>
                <div className={styles["nav-btn-mobile"]}>
                    <Link href='/' className={styles["nav-txt"]}>
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    )
}