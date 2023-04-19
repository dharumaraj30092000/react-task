import "./banner.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { MdOutlineShoppingCart } from "react-icons/md";
import slipper from "../images/slipper.jpg";
import ironBox from "../images/ironbox.jpg";
import glass from "../images/glass.jpg";
import mobile from "../images/mobile.jpg";
import shirt from "../images/shirt.jpg";
import shoe from "../images/shoe.jpg";
import watch from "../images/watch.jpg";
import pant from "../images/pant.jpg";

function BasicExample() {
  return (
    <div className="container w-100 p-0">
      <div className=" row">
        <div className="text-warning text-uppercase mt-3 mb-3 d-flex align-items-center justify-content-center">
          <MdOutlineShoppingCart className="fs-1" />
          <span className="ms-2 fs-1">Shopping Cart</span>
        </div>
        <div className="banner-align bg-white-color pt-4">
          <div className="col-3 mb-4 pe-2">
            <Card className="text-center banner-hover">
              <Card.Body>
                <div className="banner-scale p-3">
                  <img className="img-fluid" src={slipper} alt="img" />
                </div>
                <div>
                  <h5 className="text-start ps-2">$60.00</h5>
                  <h5 className="text-color text text-end mb-2 pe-2">
                    $115.00
                  </h5>
                </div>
                <Button variant="warning" className="btn-width mb-3">
                  ADD TO
                  <br />
                  CART
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-3 mb-4 pe-2">
            <Card className="text-center banner-hover">
              <Card.Body>
                <div className="banner-scale p-3">
                  <img className="img-fluid" src={ironBox} alt="img" />
                </div>
                <div>
                  <h5 className="text-start ps-2">$60.00</h5>
                  <h5 className="text-color text text-end mb-2 pe-2">
                    $115.00
                  </h5>
                </div>
                <Button variant="warning" className="btn-width mb-3">
                  ADD TO
                  <br />
                  CART
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-3 mb-4 pe-2">
            <Card className="text-center banner-hover">
              <Card.Body>
                <div className="banner-scale p-3">
                  <img className="img-fluid" src={mobile} alt="img" />
                </div>
                <div>
                  <h5 className="text-start ps-2">$60.00</h5>
                  <h5 className="text-color text text-end mb-2 pe-2">
                    $115.00
                  </h5>
                </div>
                <Button variant="warning" className="btn-width mb-3">
                  ADD TO
                  <br />
                  CART
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-3 mb-4 ps-2">
            <Card className="text-center banner-hover">
              <Card.Body>
                <div className="banner-scale p-3">
                  <img className="img-fluid" src={shoe} alt="img" />
                </div>
                <div>
                  <h5 className="text-start ps-2">$60.00</h5>
                  <h5 className="text-color text text-end mb-2 pe-2">
                    $115.00
                  </h5>
                </div>
                <Button variant="warning" className="btn-width mb-3">
                  ADD TO
                  <br />
                  CART
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-3 mb-4 pe-2">
            <Card className="text-center banner-hover">
              <Card.Body>
                <div className="banner-scale p-3">
                  <img className="img-fluid" src={pant} alt="img" />
                </div>
                <div>
                  <h5 className="text-start ps-2">$60.00</h5>
                  <h5 className="text-color text text-end mb-2 pe-2">
                    $115.00
                  </h5>
                </div>
                <Button variant="warning" className="btn-width mb-3">
                  ADD TO
                  <br />
                  CART
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-3 mb-4 pe-2">
            <Card className="text-center banner-hover">
              <Card.Body>
                <div className="banner-scale  p-3">
                  <img className="img-fluid" src={glass} alt="img" />
                </div>
                <div>
                  <h5 className="text-start ps-2">$60.00</h5>
                  <h5 className="text-color text text-end mb-2 pe-2">
                    $115.00
                  </h5>
                </div>
                <Button variant="warning" className="btn-width mb-3">
                  ADD TO
                  <br />
                  CART
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-3 mb-4 pe-2">
            <Card className="text-center banner-hover">
              <Card.Body>
                <div className="banner-scale p-3">
                  <img className="img-fluid" src={watch} alt="img" />
                </div>
                <div>
                  <h5 className="text-start ps-2">$60.00</h5>
                  <h5 className="text-color text text-end mb-2 pe-2">
                    $115.00
                  </h5>
                </div>
                <Button variant="warning" className="btn-width mb-3">
                  ADD TO
                  <br />
                  CART
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-3 mb-4 ps-2">
            <Card className="text-center banner-hover">
              <Card.Body>
                <div className="banner-scale p-3">
                  <img className="img-fluid" src={shirt} alt="img" />
                </div>
                <div>
                  <h5 className="text-start ps-2">$60.00</h5>
                  <h5 className="text-color text text-end mb-2 pe-2">
                    $115.00
                  </h5>
                </div>
                <Button variant="warning" className="btn-width mb-3">
                  ADD TO
                  <br />
                  CART
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="shop-btn text-center mt-3 mb-3">
        <Button className="text-danger bg-light">
          <span className="pe-2">View Cart</span>
          <MdOutlineShoppingCart className="text-primary" />
        </Button>
      </div>
      <div className="text-center">
        <p className="text-light">
          © 2017 Shopping Cart. All rights reserved | Design by W3layouts
        </p>
      </div>
    </div>
  );
}

export default BasicExample;
