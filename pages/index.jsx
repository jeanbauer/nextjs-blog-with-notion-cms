import Link from 'next/link'

// Troque este conteúdo pela primeira parte da URL da sua tabela
const NOTION_BLOG_ID = 'b764c844f53c4aa4ab104ab170df476b'

export const getAllPosts = async () => {
  return await fetch(
    `https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`
  ).then((res) => res.json())
}

export async function getStaticProps() {
  const posts = await getAllPosts()

  return {
    props: {
      posts,
    },
  }
}

function HomePage({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <Link key={post.slug} href='/[slug]' as={`/${post.slug}`}>
          <div>{post.title}</div>
        </Link>
      ))}
    </div>
  )
}

export default HomePage
