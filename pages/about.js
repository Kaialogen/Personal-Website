import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Ka1al0gen, a passionate student currently immersing myself in the fascinating world of Cybersecurity. I have a particular interest in ethical hacking, a field that allows me to use my skills to improve security and protect information. I believe that in our increasingly digital world, the importance of cybersecurity cannot be overstated. Through my studies, I've gained a deep understanding of various security protocols, encryption techniques, and how to identify and exploit vulnerabilities ethically. But my journey is far from over. I'm continuously learning, experimenting, and staying updated with the latest trends and advancements in the field. My goal is to not only become an expert in ethical hacking and cybersecurity but also to contribute to making the digital world a safer place for everyone. Join me as I share my experiences, insights, and tips on this blog. Welcome to my cybersecurity journey!</p>
      </section>
    </Layout>
  );
}
