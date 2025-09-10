import Head from 'next/head';
import Link from 'next/link';
import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <div style={{ maxWidth: '768px', margin: '0 auto', padding: '2rem' }}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{postData.title}</h1>
        <div style={{ color: 'var(--text-color)', marginBottom: '2rem' }}>
          {postData.date}
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <div style={{ marginTop: '3rem' }}>
        <Link href="/blog">
          <a>← Back to blog</a>
        </Link>
      </div>
    </div>
  );
}
