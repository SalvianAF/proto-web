import Head from 'next/head';
import styles from '../styles/Home.module.css';
import NavBar from '../components/navBar';
import Image from 'next/image';
import Layout from '../components/layout';
import Button from '../components/button';
import Link from 'next/link';
import Card from '../components/card';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import TiktokIcon from '../icons/tiktok';

export default function Home() {
  return (
    <div>
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
        <div className={styles["sample"]}>
          <div className={styles["sample-desc"]}>
              <h3>Web Company Profile mencerminkan perusahaan </h3>
              <h3>Anda, menarik pelanggan baru.</h3>
              <div className={styles["sample-btn"]}>
                <Button isActive={false} type={"outlined"}><p className={styles["btn-txt-end"]}>Perkenalkan Bisnis Anda Secara Profesional</p></Button>
              </div>
          </div>
          <div className={styles["sample-web"]}>
            {/* gambar sample */}
          </div>
        </div>
        <div className={styles.service}>
            <div className={styles["title-container"]}>
              <Button isActive={false} color={"#0F044C"}>
                <h3 className={styles.title}>Service</h3>
              </Button>
            </div>
            <div className={styles["card-container"]}>
              <Card>
                <div className={styles.square}>
                <Image
                  src="/images/group 1.png" // Route of the image file
                  height={200} // Desired size with correct aspect ratio
                  width={220} // Desired size with correct aspect ratio
                  className={styles.img}
                  alt="Background"
                />
                </div>
                <div className={styles["card-desc"]}>
                  <p>Kami akan menciptakan tampilan web yang elegan dan profesional untuk perusahaan Anda. Tingkatkan citra bisnis Anda secara online dengan website Company Profile</p>
                  <Button type="outlined" isActive={true} color={"black"} style={{marginTop:"20px"}}>
                    <Link href='/'className={styles["btn-txt"]}>
                      Pesan Sekarang &nbsp;{'>'}   
                    </Link>
                  </Button>
                </div>
              </Card>
              <Card>
                <div className={styles.square}>
                  <Image
                    src="/images/group 2.png" // Route of the image file
                    height={200} // Desired size with correct aspect ratio
                    width={260} // Desired size with correct aspect ratio
                    className={styles.img}
                    alt="Background"
                  />
                </div>
                <div className={styles["card-desc"]}>
                  <p>Biarkan karya Anda bersinar dengan website Portofolio Pribadi kami. Kami akan membantu Anda menghadirkan prestasi dan kreativitas Anda</p>
                  <Button type="outlined" isActive={true} color={"black"} style={{marginTop:"20px"}}>
                    <Link href='/'className={styles["btn-txt"]}>
                      Pesan Sekarang &nbsp;{'>'}   
                    </Link>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
          <div className={styles.contact}>
            <div className={styles["title-container"]}>
              <Button isActive={false} color={"white"}>
                <h3 className={styles.title} style={{color:"#141E61"}}>Contact</h3>
              </Button>
            </div>
            <div className={styles["card-container"]}>
              <Card>
                <div className={styles.square}>
                <Image
                  src="/images/group 3.png" // Route of the image file
                  height={200} // Desired size with correct aspect ratio
                  width={220} // Desired size with correct aspect ratio
                  className={styles.img}
                  alt="Background"
                />
                </div>
                <div className={styles["card-desc"]}>
                  <Button type="outlined" isActive={true} >
                    <Link href='/'className={styles["btn-txt"]} style={{color:"white"}}>
                      Hubungi kami Via Whatsapp   
                    </Link>
                  </Button>
                </div>
              </Card>
              <Card>
                <div className={styles.square}>
                  <Image
                    src="/images/group 4.png" // Route of the image file
                    height={200} // Desired size with correct aspect ratio
                    width={260} // Desired size with correct aspect ratio
                    className={styles.img}
                    alt="Background"
                  />
                </div>
                <div className={styles["card-desc"]}>
                  <Button type="outlined" isActive={true} >
                    <Link href='/'className={styles["btn-txt"]} style={{color:"white"}}>
                      Hubungi kami Via Email   
                    </Link>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
      </Layout>

      <footer>
        <Image
          src="/images/mountain-wallpapers-cropped.jpg" // Route of the image file
          height={200} // Desired size with correct aspect ratio
          width={1500} // Desired size with correct aspect ratio
          className={"footer-background"}
          alt="Background"
        />
        <div className={"footer-container"}>
          <div className={"fcontainer-section1"}>
            <Image
                src="/images/porto-putih.png" // Route of the image file
                height={50} // Desired size with correct aspect ratio
                width={120} // Desired size with correct aspect ratio
                className={styles.flogo}
                alt="footer-logo"
            />
            <p>Kami adalah mitra digital Anda untuk solusi website yang terjangkau dan berkualitas. Daoatjan website company profile adan portofolio pribadi Anda dengan harga tebaik</p>
            
          </div>
          <div className={"fcontainer-section2"}>
            <div className={"fcontainer-icon"}>
              <LanguageIcon fontSize={"large"} className={"footer-icon"}/>
              <InstagramIcon fontSize={"large"} className={"footer-icon"}/>
              <TiktokIcon/>
            </div>
            <div>
              <b style={{fontSize:18}}>www.protoindo.com</b>
              <p>Jalan remaja II NO.58-A RT001/RW010 Kel.Tengah Kec.Kramat Jati Jakarta Timur</p>
            </div>
          </div>

        </div>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a> */}
      </footer>

    </div>
  );
}
