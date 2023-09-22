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
                {/* <Button color="red"> */}
                <div>
                    <Link href='/home' className={styles["nav-txt"]}>
                        <Image
                            src="/images/porto-putih.png" // Route of the image file
                            height={43} // Desired size with correct aspect ratio
                            width={150} // Desired size with correct aspect ratio
                            className={styles.logo}
                            alt="Background"
                        />
                    </Link>
                </div>
                {/* </Button> */}
          
            <div style={{alignSelf:"center"}}>
                <div className={styles["nav-menu"]}>
                    <Button type="outlined" isActive={true} style={{marginRight:10}}>
                        <Link href='/' className={styles["nav-txt"]}>
                            Home
                        </Link>
                    </Button>
                    <Button type="outlined" isActive={true} style={{marginRight:10}}>
                        <Link href='/' className={styles["nav-txt"]}>
                            Service
                        </Link>
                    </Button>
                    <Button type="outlined" isActive={true} style={{marginRight:10}}>
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