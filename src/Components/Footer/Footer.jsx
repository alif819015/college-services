import img from "../../../public/education.png";

const Footer = () => {
  return (
    <>
      <footer className="footer px-4 pt-10 pb-4 bg-base-200 text-base-content">
        <div>
          <img className="w-20" src={img} alt="" />
          <p>UniBookJunction</p>
        </div>
        <div>
          <span className="footer-title">Contact Us</span>
          <a className="link link-hover">Email: info@unibookjunction.com</a>
          <a className="link link-hover">Phone: +1 (123) 456-7890</a>
          <a className="link link-hover">
            Address: 123 College Avenue, City, State ZIP Code
          </a>
        </div>
        <div>
          <span className="footer-title">Quick Links</span>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Buy Books</a>
          <a className="link link-hover">Sell Books</a>
          <a className="link link-hover">Exchange Books</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <div className="text-center text-sm bg-base-200 text-base-content">
        <p>
          &copy; {new Date().getFullYear()} UniBookJunction. All rights
          reserved.
        </p>
        <p>Terms of Service | Privacy Policy</p>
      </div>
    </>
  );
};

export default Footer;
