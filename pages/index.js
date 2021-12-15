import Head from "next/head";
import Link from "next/link";
import {getPosts} from "../lib/posts";

function HomePage({posts}) {
    return (
        <>
            <Head>
                <title>My Blog</title>
                <meta name="description" value="My blog"/>
            </Head>
            <main>
                <h1>My Blog</h1>
                <ul>
                    {posts.map((post) =>
                        <li id={post.slug}>
                            <Link href={`/posts/${post.slug}`}>
                                <a>{post.title}</a>
                            </Link>
                        </li>
                    )}
                </ul>
            </main>
        </>
    )
}

export default HomePage

export async function getStaticProps() {
    const posts = await getPosts()
    return {props: {posts}}
}
