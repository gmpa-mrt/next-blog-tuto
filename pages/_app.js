import NavBar from "../components/NavBar";
import '../styles/globals.css'

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
