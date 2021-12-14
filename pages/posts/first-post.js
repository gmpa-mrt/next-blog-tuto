import {readFile} from "node:fs/promises"
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
    const data = await readFile('content/posts/first-post.json', 'utf-8')
    const post = JSON.parse(data)
    return {
        props: {post}
    }
}
