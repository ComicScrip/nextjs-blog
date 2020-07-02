import {useRouter} from 'next/router'
import {useEffect} from 'react'
import {PostModel} from '../models/post'
import Link from 'next/link'

function Post({ post }) {
  return (
    <>
      <Link href="/"><a>Back</a></Link>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </>
  )
}

// This function gets called at build time

export async function getStaticPaths() {
  const paths = (await PostModel.getAll()).map(({slug}) => ({ params: {slug} }))
  return { paths, fallback: false }
}


// This also gets called at build time
export async function getStaticProps({ params }) {
  return { props: { post: (await PostModel.getAll()).find(p => p.slug === params.slug) } }
}

export default Post