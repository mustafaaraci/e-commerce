import React from "react";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <>
 <div className="container-footer my-5">
      <footer className="text-center text-white">
        <div className="container pt-4">
          <section className="social-media-icons mb-4">
            <Link to="#" className="btn btn-link btn-floating btn-lg m-1">
              <i className="fab fa-facebook-f" />
            </Link>
            <Link to="#" className="btn btn-link btn-floating btn-lg m-1">
              <i className="fab fa-twitter" />
            </Link>
            <Link to="#" className="btn btn-link btn-floating btn-lg m-1">
              <i className="fab fa-google" />
            </Link>
            <Link to="#" className="btn btn-link btn-floating btn-lg m-1">
              <i className="fab fa-instagram" />
            </Link>
          </section>
          <section className="social-media-icons copyright-section">
            <p className="copyright-text">© 2024 Copyright:</p>
            <p>moon.com</p>
          </section>
        </div>
      </footer>
    </div>

</>

  )
}

export default Footer;
