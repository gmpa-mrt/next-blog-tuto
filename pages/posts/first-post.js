import {getPost} from "../../lib/posts";
import Head from "next/head";

function FirstPost({post}) {
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

export default FirstPost

export async function getStaticProps() {
    const post = await getPost('first-post')
    return {
        props: {post}
    }
}
