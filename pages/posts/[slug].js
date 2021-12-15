import {getPost, getSlugs} from "../../lib/posts";
import Head from "next/head";

function PostPage({post}) {
    console.log(post)
    return (
        <>
            <Head>
                <title>{post.title} - My blog</title>
            </Head>
            <main>
                <p>{post.date}</p>
                <h1>{post.title}</h1>
                <article dangerouslySetInnerHTML={{__html: post.content}}/>
            </main>
        </>
    )
}

export default PostPage

export async function getStaticPaths() {
    const slugs = await getSlugs()
    return {
        paths: slugs.map((slug) => ({
            params: {slug}
        })),
        fallback: false
    }
}

export async function getStaticProps({params: {slug}}) {
    const post = await getPost(slug)
    return {
        props: {post}
    }
}
