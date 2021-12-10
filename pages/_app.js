import NavBar from "../components/NavBar";
import '../styles/globals.css'
import Head from "next/head";

function App({Component, pageComponents}) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico"/>
                <title>My Blog</title>
            </Head>
            <header>
                <NavBar/>
            </header>
            <Component {...pageComponents}/>
        </>
    )
}

export default App
