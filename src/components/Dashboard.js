import  AboutUs  from "../Pages/AboutUs.js";
import Home from "../Pages/Home";
import Footer from "./Footer";
import Header from "./Header";
import { Main } from "./Main";
function Dashboard(){
    return (
        <div >
              
           <Header/>
           {/* <Main/> */}
           <Home/>
             <AboutUs/>
            <Footer/>
        </div>
    )
}
export default Dashboard;