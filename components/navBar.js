import Link from 'next/link'
import styles from './navBar.module.css'
import Button from './button'

export default function NavBar() {
    return(
        <div className={styles.nav}>
                <Button color="red">
                    <Link href='/home' className={styles["nav-txt"]}>
                        Proto
                    </Link>
                </Button>
          

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
        </div>
    )
}