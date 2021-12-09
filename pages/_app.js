import NavBar from "../components/NavBar";

function App({Component, pageComponents}) {
    return(
        <>
            <header>
                <NavBar/>
            </header>
            <main>
                <Component {...pageComponents}/>
            </main>
        </>
    )
}

export default App
