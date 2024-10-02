// Importing required modules and components
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

// Home component that renders the homepage
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        {/* Setting the title of the page */}
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        {/* Introduction paragraph */}
        <p>Hello, I am Ka1al0gen. I'm a student interesting in ethical hacking. You can find more on my <a href="https://github.com/Kaialogen"> Github</a>.</p>
      </section>

      <footer>
        <p>© Kaialogen 2024. Made by Humans, for Humans</p>
      </footer>
    </Layout>
  );
}