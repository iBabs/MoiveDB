import { Outlet } from "react-router-dom";
import Navi from "./Nav";
import { Container } from "react-bootstrap";


const RootLayout = () => {
    return ( <Container
    style={{
        minHeight:'100vh',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between'
    }}>
        <Navi/>
        <Outlet/>
        <footer>
            &copy; 2023
        </footer>
    </Container> );
}
 
export default RootLayout;