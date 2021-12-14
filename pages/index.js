import Head from "next/head";
import Link from "next/link";

function HomePage() {
    return (
        <>
            <Head>
                <title>My Blog</title>
                <meta name="description" value="My blog"/>
            </Head>
            <main>
                <h1>My Blog</h1>
                <ul>
                    <li>
                        <Link href="/posts/first-post">
                            <a>First post</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/posts/second-post">
                            <a>Second post</a>
                        </Link>
                    </li>
                </ul>
            </main>
        </>
    )
}

export default HomePage
