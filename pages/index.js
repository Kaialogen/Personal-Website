import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I am Ka1al0gen. I'm a student interesting in ethical hacking. You can find more on my <a href="https://github.com/Kaialogen"> Github</a>.</p>
        <p>
          <Link href="/posts/first-post">Check this page out</Link>
        </p>
      </section>
    </Layout>
  );
}
