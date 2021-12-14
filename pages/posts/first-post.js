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
                <h1>{post.title}</h1>
                <p>{post.content}</p>
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
