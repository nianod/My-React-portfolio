import Header from "./Header";
import Footer from "./Footer";

export default function Layout ({ children }) {
    return (
        <>
        <Header/>
        <main className="p-20"> {children} </main>
        <Footer/>
        </>
    )
}