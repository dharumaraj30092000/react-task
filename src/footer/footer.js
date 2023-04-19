import "./footer.css";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

function Footer() {
  return (
    <div className="container footer-color">
      <div className="row">
        <div className="col-7">
          <div className="pt-4 pb-4">
            <h1 className="pt-2 pb-3 m-0">W3Layouts</h1>
            <p className="m-0 pt-2 pb-4">
              We help developers, designers and website owner's create stunning
              websites. We have been building a huge collection of website
              templates for every business and industry needs. Simply select
              your favourite template, edit, download and launch.
            </p>
          </div>
          <div className="footer-icon">
            <div className="icon-design d-inline-block m-2">
              <BsInstagram className="fs-5" />
            </div>
            <div className="icon-design d-inline-block m-2">
              <FaFacebookF className="fs-5" />
            </div>
            <div className="icon-design d-inline-block m-2">
              <AiOutlineTwitter className="fs-5" />
            </div>
            <div className="icon-design d-inline-block m-2">
              <FaLinkedinIn className="fs-5" />
            </div>
          </div>
        </div>
        <div className="col-5">
          <ul className="mt-5 p-0">
            <li>
              <a href="#" title="Help">
                Licenses
              </a>
            </li>
            <li>
              <a href="#" title="Help">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" title="Help">
                Support
              </a>
            </li>
            <li>
              <a href="#" title="WordPress Themes">
                WordPress Themes
              </a>
            </li>
            <li>
              <a href="#" title="Decentralised Website Builder">
                Decentralised Website Builder
              </a>
            </li>
          </ul>
          <div>
            <h4>Are you a Designer?</h4>
          </div>
          <div>
            <ul className="p-0 mt-3">
              <li className="mb-2">Add Your Designs</li>
              <li className="mb-2">Signup as Creator</li>
              <li>Members</li>
            </ul>
          </div>
        </div>
        <div className="row align-items-center pt-3 pb-3">
          <div className="col-6">
            <p className="m-0">© All rights reserved by W3layouts limited</p>
          </div>
          <div className="col-6">
            <ul className="p-0 m-0 text-end">
              <li className="ms-3 me-3 d-inline-block">
                <a href="">Help Center</a>
              </li>
              <li className="ms-3 me-3 d-inline-block">
                <a href="">Privacy policy</a>
              </li>
              <li className="ms-3 me-3 d-inline-block">
                <a href="">Terms & Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
