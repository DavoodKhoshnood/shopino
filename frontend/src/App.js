import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Store } from "./Store";
import Home from "./pages/Home";
import Product from "./pages/Products";
import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;
  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' })
    localStorage.removeItem('userInfo')
  }
  return (
    <BrowserRouter>
      <div className="d-flex flex-column inside-container">
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>Shopino</Navbar.Brand>
              </LinkContainer>
              <Nav className="d-flex justify-content-between">
                <Link to="/cart" className="nav-link">
                  <i title="Cart" className="fa fa-cart-shopping"></i>                
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                </Link>
                {userInfo ? (
                  <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>User Profile</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/orderhistory">
                      <NavDropdown.Item>Order History</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                    <Link to="#signout" className="dropdown-item" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </NavDropdown>
                ) : (
                  <Link to="/signin" className="nav-link">
                  Sign In </Link>
                )}
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products/:slug" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/signin" element={<SignIn />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
