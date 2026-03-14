import type { NextPage } from 'next'
import Head from 'next/head'
import { posts } from '../data/posts'

const Home: NextPage = () => {
  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 800, margin: '40px auto', padding: '0 20px' }}>
      <Head>
        <title>Artikel Terbaru</title>
      </Head>
      <h1>Artikel Terbaru</h1>
      <ul>
        {posts.map((p) => (
          <li key={p.slug} style={{ marginBottom: 12 }}>
            <a href={`/${p.slug}`}>{p.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
