import Head from 'next/head';
import styles from '../styles/Home.module.css';
import NavBar from '../components/navBar';
import Image from 'next/image';
import Layout from '../components/layout';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <NavBar/>
        <Image
          src="/images/wallpaper3.jpg" // Route of the image file
          height={1000} // Desired size with correct aspect ratio
          width={1500} // Desired size with correct aspect ratio
          className={styles.img}
          alt="Background"
        />
        <div className={styles.tagline}>
          <h3>kami adalah solusi untuk website anda</h3>
          <p>dengan harga termurah dan kualitas yang memusakan</p>
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
