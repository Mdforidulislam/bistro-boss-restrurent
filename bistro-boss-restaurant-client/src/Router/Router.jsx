import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Contactus from "../Pages/ContactUs/Contactus";
import OurMenu from "../Pages/Ourmenu/OurMenu";
import Ourshop from "../Pages/OurShop/Ourshop";
import SingIn from "../Pages/SingIn/SingIn";
import Login from "../Pages/Login/Login";

export const router = createBrowserRouter([
           {
              path:'/',
              element: <Main></Main>,
              errorElement:<Error></Error>,
              children:[
                {
                    path:'/',
                    element:<Home></Home>
                },
                {
                    path:'contactus',
                    element:<Contactus></Contactus>
                },
                {
                   path:'/ourmenu',
                   element:<OurMenu></OurMenu>
                },
                {
                  path:'/ourShope',
                  element:<Ourshop></Ourshop>
                },
                {
                  path:'/singin',
                  element: <SingIn></SingIn>
                },
                {
                  path:'/login',
                  element:<Login></Login>
                }

              ],
           }
])