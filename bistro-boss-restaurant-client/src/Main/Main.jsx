import { Outlet, useLocation } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";


const Main = () => {
    const uselocationset = useLocation()
    const removeItem = uselocationset.pathname.includes('login') || uselocationset.pathname.includes('singin')
    console.log(uselocationset);
    return (
        <div>
            { removeItem ? undefined : <Header></Header>}
            <Outlet></Outlet>
            {removeItem? undefined : <Footer></Footer>}
        </div>
    );
};

export default Main;