import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import { Navbar } from '@Components/Layout/Navbar';
import { IAnchorLink } from '@Common/interfaces/Layout/IAnchorLink';
import { Lander } from 'src/containers/Lander/Lander';
import { About } from 'src/containers/About/About';
import { Gallery } from 'src/containers/Gallery/Gallery';

const createNavLink = (title): IAnchorLink => ({title, link: `#${title.toLowerCase()}` });
const navLinks: IAnchorLink[] = [
    createNavLink('Home'),
    createNavLink('About'),
    createNavLink('Gallery'),
    createNavLink('Contact'),
]
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <Navbar links={navLinks} />
          <Lander />
          <About />
          <Gallery/>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
