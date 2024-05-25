import React from "react";

function Footer() {
  return (
    <>
 <div className="container-footer my-5">
  <footer className="text-center text-white">
    <div className="container pt-4">
      <section className="social-media-icons mb-4">
        <a className="btn btn-link btn-floating btn-lg m-1" >
          <i className="fab fa-facebook-f" />
        </a>
        <a className="btn btn-link btn-floating btn-lg m-1" >
          <i className="fab fa-twitter" />
        </a>
        <a className="btn btn-link btn-floating btn-lg m-1">
          <i className="fab fa-google" />
        </a>
        <a className="btn btn-link btn-floating btn-lg m-1">
          <i className="fab fa-instagram" />
        </a>
       </section>
     
    </div>
    <div className="text-center text-dark p-3 copyright-text">
      © 2024 Copyright:
      <a className="">moon.com</a>
    </div>
  </footer>
</div>

</>

  )
}

export default Footer;
