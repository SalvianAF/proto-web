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
          className={styles.background}
          alt="Background"
          id="tagline"
        />

        <div className={styles.tagline}>
          <h3>kami adalah solusi untuk website anda</h3>
          <p>dengan harga termurah dan kualitas yang memuaskan</p>
        </div>

        <div className={styles["sample"]} id="sample">
          <div className={styles["sample-desc"]}>
              <h3>Web Company Profile mencerminkan perusahaan Anda, menarik pelanggan baru.</h3>
              <div className={styles["sample-btn"]}>
                <Button isActive={false} type={"outlined"}><p className={styles["btn-txt-end"]}>Perkenalkan Bisnis Anda Secara Profesional</p></Button>
              </div>
          </div>
          {/* <div className={styles["sample-web"]}> */}
            <Image
               src="/images/sample1.webp" // Route of the image file
               height={500} // Desired size with correct aspect ratio
               width={1000} // Desired size with correct aspect ratio
               className={styles["sample-web"]}
               alt="sample"
            />
          {/* </div> */}
        </div>

        <div className={styles.service} id="service">
            <div className={styles["title-container"]}>
              <Button isActive={false} color={"#0F044C"}>
                <h3 className={styles.title}>service</h3>
              </Button>
            </div>
            <div className={styles["card-container"]}>
              <Card>
                <div className={styles.square}>
                  <Image
                    src="/images/company-profile.png" // Route of the image file
                    height={200} // Desired size with correct aspect ratio
                    width={230} // Desired size with correct aspect ratio
                    className={styles.img}
                    alt="Background"
                  />
                </div>
                <div className={styles["card-desc"]}>
                  <p>Kami akan menciptakan tampilan web yang elegan dan profesional untuk perusahaan Anda. Tingkatkan citra bisnis Anda secara online dengan website Company Profile</p>
                  <Button type="outlined" isActive={true} color={"black"} style={{marginTop:"20px"}}>
                    <Link href='https://wa.me/6282113119448' className={styles["btn-txt"]}>
                      Pesan Sekarang &nbsp;{'>'}   
                    </Link>
                  </Button>
                </div>
              </Card>
              <Card>
                <div className={styles.square}>
                  <Image
                    src="/images/portofolio-website.png" // Route of the image file
                    height={200} // Desired size with correct aspect ratio
                    width={260} // Desired size with correct aspect ratio
                    className={styles.img}
                    alt="Background"
                  />
                </div>
                <div className={styles["card-desc"]}>
                  <p>Biarkan karya Anda bersinar dengan website Portofolio Pribadi kami. Kami akan membantu Anda menghadirkan prestasi dan kreativitas Anda</p>
                  <Button type="outlined" isActive={true} color={"black"} style={{marginTop:"20px"}}>
                    <Link href='https://wa.me/6282113119448'className={styles["btn-txt"]}>
                      Pesan Sekarang &nbsp;{'>'}   
                    </Link>
                  </Button>
                </div>
              </Card>
            </div>
          </div>

          <div className={styles.contact} id="contact">
            <div className={styles["title-container"]}>
              <Button isActive={false} color={"white"}>
                <h3 className={styles.title} style={{color:"#141E61"}}>Contact</h3>
              </Button>
            </div>
            <div className={styles["card-container"]}>
              <Card>
                <div className={styles.square}>
                <Image
                  src="/images/whatsapp.png" // Route of the image file
                  height={200} // Desired size with correct aspect ratio
                  width={220} // Desired size with correct aspect ratio
                  className={styles.img}
                  alt="Background"
                />
                </div>
                <div className={styles["card-desc"]}>
                  <Button type="outlined" isActive={true} color={"white"}>
                    <Link href='https://wa.me/6282113119448' className={`${styles["btn-txt"]} ${styles["white-txt"]}`}>
                      Hubungi kami Via Whatsapp   
                    </Link>
                  </Button>
                </div>
              </Card>
              <Card>
                <div className={styles.square}>
                  <Image
                    src="/images/email.png" // Route of the image file
                    height={200} // Desired size with correct aspect ratio
                    width={260} // Desired size with correct aspect ratio
                    className={styles.img}
                    alt="Background"
                  />
                </div>
                <div className={styles["card-desc"]}>
                  <Button type="outlined" isActive={true}  color={"white"}>
                    <Link href='mailto:protoindo.agency@gmail.com'className={`${styles["btn-txt"]} ${styles["white-txt"]}`}>
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
            <p>Kami adalah mitra digital Anda untuk solusi website yang terjangkau dan berkualitas. Dapatkan website company profile adan portofolio pribadi Anda dengan harga tebaik</p>
          </div>
          <div className={"fcontainer-section2"}>
            <div className={"fcontainer-icon"}>
              <Link href={"/"} className={"footer-icon"}>
                <LanguageIcon fontSize={"large"}/>
              </Link>
              <Link href={"https://www.instagram.com/portoo.id/"} className={"footer-icon"}>
                <InstagramIcon fontSize={"large"}/>
              </Link>
              <Link href={"/"} className={"footer-icon"}>
                <TiktokIcon/>
              </Link>
            </div>
            <div>
              <b style={{fontSize:18}}>www.portoindo.com</b>
              <p>Jalan remaja II No.58-A RT001/RW010 Kel.Tengah Kec.Kramat Jati Jakarta Timur</p>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
