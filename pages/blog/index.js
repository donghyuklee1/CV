import Head from 'next/head';
import Link from 'next/link';
import { getSortedPostsData } from '../../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  return (
    <div style={{ maxWidth: '768px', margin: '0 auto', padding: '2rem' }}>
      <Head>
        <title>My Blog</title>
      </Head>
      <header>
        <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Blog</h1>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </header>
      <main>
        <section>
          <ul>
            {allPostsData.map(({ id, date, title }) => (
              <li key={id} style={{ listStyle: 'none', marginBottom: '1.5rem' }}>
                <Link href={`/blog/${id}`}>
                  <a style={{ fontSize: '1.5rem', color: 'var(--heading-color)' }}>{title}</a>
                </Link>
                <br />
                <small style={{ color: 'var(--text-color)' }}>
                  {date}
                </small>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
