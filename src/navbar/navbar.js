import "./navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BiHeart } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";

function NavScrollExample() {
  return (
    <div className="bg-color w-100">
      <div class="container text-light p-3 align-items-center">
        <div class="row">
          <div class="col-2 pe-0 header-border">
            <h3 className="d-inline-block mb-0 logo">W3Layouts</h3>
          </div>
          <div className="col-7 ps-0">
            <Navbar expand="lg">
              <Container fluid class="p-0">
                <Navbar.Collapse
                  className="justify-content-lg-start"
                  id="navbarScroll"
                >
                  <Nav style={{ maxHeight: "100px" }} navbarScroll>
                    <Nav.Link className="ms-3 me-3 mt-2 mb-2" href="#action1">
                      Home
                    </Nav.Link>
                    <Nav.Link className="ms-3 me-3 mt-2 mb-2" href="#">
                      Blogs
                    </Nav.Link>
                    <Nav.Link className="ms-3 me-3 mt-2 mb-2" href="#">
                      FAQ
                    </Nav.Link>
                    <Nav.Link className="ms-3 me-3 mt-2 mb-2" href="#action2">
                      Wordpress Themes
                    </Nav.Link>
                    <Nav.Link className="ms-3 me-3 mt-2 mb-2" href="#">
                      1W3
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
          <div class="col-3">
            <div class="text-end">
              <FiSearch class="fs-4 text-light icon m-2" title="search" />
              <BiHeart class="fs-4 text-light icon m-2" title="whistlist" />
              <BsPersonFill class="fs-4 text-light icon m-2" title="account" />
              <MdOutlineShoppingCart
                class="fs-4 icon text-light m-2"
                title="cart"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavScrollExample;
