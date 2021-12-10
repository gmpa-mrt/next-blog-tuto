import NavBar from "../components/NavBar";

function App({Component, pageComponents}) {
    return (
        <>
            <header>
                <NavBar/>
            </header>
            <Component {...pageComponents}/>
        </>
    )
}

export default App
