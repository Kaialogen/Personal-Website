// Importing required modules and components
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';

// Fetches the sorted post data for static site generation
export async function getStaticProps() {
  // Fetch all post data
  const allPostsData = getSortedPostsData();
  
  return {
    props: {
      allPostsData,
    },
  };
}

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
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        {/* Blog posts header */}
        <h2 className={utilStyles.headingLg}>Blog</h2>
        
        {/* List of blog posts */}
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {/* Each post is a link to its individual page */}
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              
              {/* Displaying the date of the post */}
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
        
        {/* Badge from TryHackMe */}
        <img src="https://tryhackme-badges.s3.amazonaws.com/Kaialogen.png" alt="TryHackMe"></img>
        
      </section>
    </Layout>
  );
}