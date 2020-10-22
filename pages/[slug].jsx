
import { NotionRenderer } from "react-notion";
import { getAllPosts } from './'

export async function getStaticPaths() {
  const posts = await getAllPosts();
  return {
    paths: posts.map((row) => `/${row.slug}`),
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  // Busca todos os posts
  const posts = await getAllPosts();

  // Encontra a postagem com a slug igual ao que você entrou na URL
  const post = posts.find((t) => t.slug === slug);

  const blocks = await fetch(`https://notion-api.splitbee.io/v1/page/${post.id}`)
    .then((res) => res.json());
  
  return {
    props: {
     blocks,
     post,
    },
  };
}

const BlogPost = ({ post, blocks }) => (
  <div className='blog'>
    <div className='blog-post'>
      <h1>{post.title}</h1>
      <NotionRenderer blockMap={blocks} />
    </div>
  </div>
);

export default BlogPost