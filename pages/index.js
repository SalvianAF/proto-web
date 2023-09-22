import Head from 'next/head';
import styles from '../styles/Home.module.css';
import NavBar from '../components/navBar';
import Image from 'next/image';
import Layout from '../components/layout';
import Button from '../components/button';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Proto Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <NavBar/>
        <Image
          src="/images/mountain-wallpapers.jpg" // Route of the image file
          height={1000} // Desired size with correct aspect ratio
          width={1500} // Desired size with correct aspect ratio
          className={styles.img}
          alt="Background"
        />
        <div className={styles.tagline}>
          <h3>kami adalah solusi untuk website anda</h3>
          <p>dengan harga termurah dan kualitas yang memusakan</p>
        </div>
        <div className={styles["web-sample"]}>
          <div className={styles.section1}>
              <h3>Web Company Profile mencerminkan perusahaan</h3>
              <h3>Anda, menarik pelanggan baru.</h3>
            <div className={styles["sample-btn"]}>
              <Button isActive={false} type={"outlined"}><p className={styles["btn-txt"]}>Perkenalkan Bisnis Anda Secara Profesional</p></Button>
            </div>
          </div>
          <div className={styles.section2}>
            {/* gambar sample */}
          </div>
        </div>
      </Layout>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

    </div>
  );
}
