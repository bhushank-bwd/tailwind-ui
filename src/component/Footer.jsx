const Footer = () => {
  return (
    <footer className="w-full bg-sky-950 h-fit py-16 px-12">
      <div className=" flex flex-wrap">
        <div className="lg:w-1/4 md:w-1/2 w-full px-1 md:text-left text-center">
          <h3 className="text-cyan-600 font-semibold text-xl p-1">Category</h3>
          <ul className="text-white text-md p-1">
            <li className="hover:scale-y-120 hover:text-cyan-600 hover:font-semibold pt-2">
              Men's
            </li>
            <li className="hover:scale-y-120 hover:text-cyan-600 hover:font-semibold pt-2">
              Women's
            </li>
            <li className="hover:scale-y-120 hover:text-cyan-600 hover:font-semibold pt-2">
              Kid's
            </li>
            <li className="hover:scale-y-120 hover:text-cyan-600 hover:font-semibold pt-2">
              Unisex
            </li>
          </ul>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-1 md:text-left text-center">
          <h3 className="text-cyan-600 font-semibold text-xl p-1">Guides</h3>
          <ul className="text-white text-md p-1">
            <li className="hover:scale-y-120 hover:text-cyan-600 hover:font-semibold pt-2">
              Understanding Prescription
            </li>
            <li className="hover:scale-y-120 hover:text-cyan-600 hover:font-semibold pt-2">
              Face Shape Guide
            </li>
            <li className="hover:scale-y-120 hover:text-cyan-600 hover:font-semibold pt-2">
              Measure Segment Height
            </li>
            <li className="hover:scale-y-120 hover:text-cyan-600 hover:font-semibold pt-2">
              Measure Your PD
            </li>
          </ul>
        </div>

        <div className="lg:w-1/4 md:w-1/2 w-full px-1 md:text-left text-center">
          <h3 className="text-cyan-600 font-semibold text-xl p-1">
            About Company
          </h3>
          <ul className="text-white text-md p-1">
            <li className="hover:scale-y-120 hover:text-cyan-600 hover:font-semibold pt-2">
              Our Story
            </li>
            <li className="hover:scale-y-120 hover:text-cyan-600 hover:font-semibold pt-2">
              Blogs & Articles
            </li>
            <li className="hover:scale-y-120 hover:text-cyan-600 hover:font-semibold pt-2">
              Contact Us
            </li>
            <li className="hover:scale-y-120 hover:text-cyan-600 hover:font-semibold pt-2">
              Measure Your PD
            </li>
          </ul>
        </div>

        <div className="lg:w-1/4 md:w-1/2 w-full px-1 md:text-left text-center">
          <h3 className="text-cyan-600 font-semibold text-xl p-1">
            Important Links
          </h3>
          <ul className="text-white text-md p-1">
            <li className="hover:scale-y-120 hover:text-cyan-600 hover:font-semibold pt-2">
              Privacy Policy
            </li>
            <li className="hover:scale-y-120 hover:text-cyan-600 hover:font-semibold pt-2">
              Terms & Conditions
            </li>
            <li className="hover:scale-y-120 hover:text-cyan-600 hover:font-semibold pt-2">
              Refund & Return Policy
            </li>
            <li className="hover:scale-y-120 hover:text-cyan-600 hover:font-semibold pt-2">
              Shipping Policy
            </li>
            <li className="hover:scale-y-120 hover:text-cyan-600 hover:font-semibold pt-2">
              Security Policy
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-wrap pt-12">
        <div className="lg:w-1/3 md:1/3 w-full lg:text-left text-center pb-12">
          <h3 className="text-cyan-600 font-semibold text-xl p-1">
            Reach us for order related queries
          </h3>
          <p className="text-white text-md p-1">
            Email: support@buymyframes.com
          </p>
          <p className="text-white text-md p-1">
            Call: +91 84858 42085, +91 84858 42585
          </p>
        </div>
        <div className="lg:w-1/3 md:w-1/3 w-full text-center flex justify-center flex-col items-center pb-12">
          <div className=" align-middle">
            <img
              src="https://buymyframes.com/images/footerLogo.svg"
              alt=""
              className="p-2"
            />
          </div>
          <p className="text-white text-md p-1">
            A venture by Kulber Optics pvt. ltd.
          </p>
        </div>
        <div className="lg:w-1/3 w-full pb-12 md:text-center">
          <img
            src="https://buymyframes.com/images/footerCardImg.png"
            alt=""
            className=" lg:ml-auto pr-2 mx-auto"
          ></img>
        </div>
      </div>
      <hr className="text-white"></hr>
      <div className="pt-2 lg:flex lg:justify-between text-white md:text-center">
        <p className="sm:pt-2">
          © 2025 All rights reserved.BuyMyFrames - An Online Eyewear Store.
        </p>
        <p className="sm:pt-2">Website by Trinity</p>
      </div>
    </footer>
  );
};

export default Footer;
