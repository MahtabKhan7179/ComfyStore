import { Outlet } from "react-router-dom";
import { Header } from "../components";
import Navbar from "../components/Navbar";
function HomeLayout() {
    return (
        <>
            <Header />
            <nav>
                <Navbar />
            </nav>
            <section className="align-element">
                <Outlet />
            </section>
        </>)
}

export default HomeLayout;