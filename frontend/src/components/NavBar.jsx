import React , {useContext} from "react";
import { Navbar,Container,Nav,Badge, Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const NavBar = ()=>{

const {logout,user,login} = useContext(UserContext)

const {cartItems} = useContext(CartContext);
const totalItems = cartItems.reduce((acc,item)=> acc + item.quantity,0)


return(
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand href="/">Foodie🐼</Navbar.Brand>
        <Nav className="ms-auto">

            <div className="ms-auto d-flex align-items-center gap-3">
            {user ? (
                <>
                <span className="text-white">Hi, {user.name}</span>
                <Button size="sm" variant="outline-light" onClick={logout}>Logout</Button>
                 <Nav.Link href="/cart">
                Cart <Badge bg="success">{totalItems}</Badge>
                </Nav.Link>
                </>
            ):(
                <>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
                
                </>

                
              
            )}
          </div>



            
            </Nav>
        </Container>
    </Navbar>
);

};
export default NavBar