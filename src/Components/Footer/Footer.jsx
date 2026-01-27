import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import bg from "../../assets/footer-elements.png"

const Footer = () => {
  return (
    <footer className="relative max-w-7xl mx-auto text-gray-300 px-5 md:px-10 pt-20 pb-8 overflow-hidden">
      {/* watermark background */}
      <div
        className="absolute z-10 inset-0 bg-no-repeat bg-center md:mr-30 bg-contain"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      <div className="relative flex md:flex-row flex-col justify-between">
        {/* Left */}
        <div>
          <h2 className="text-3xl font-medium leading-snug text-white">
            Together, we build smarter <br /> legal outcomes
          </h2>

          <div className="flex gap-6 mt-8 text-sm">
            <a href="#" className="flex items-center gap-1 hover:text-white">
              LinkedIn <FaArrowUpRightFromSquare size={12} />
            </a>
            <a href="#" className="flex items-center gap-1 hover:text-white">
              Facebook <FaArrowUpRightFromSquare size={12} />
            </a>
            <a href="#" className="flex items-center gap-1 hover:text-white">
              Twitter <FaArrowUpRightFromSquare size={12} />
            </a>
          </div>
        </div>

        <div className="flex gap-5 md:gap-25 md:flex-row flex-col">
          {/* Center */}
          <div className="space-y-2 text-sm">
            <p>contact@emailcom</p>
            <p>consultancy@emailcom</p>

            <a
              href="#"
              className="inline-flex items-center gap-1 mt-6 hover:text-white"
            >
              Google Maps <FaArrowUpRightFromSquare size={12} />
            </a>
          </div>

          {/* Right */}
          <div className="text-sm leading-relaxed">
            <p>
              612-7 Roanoke Rd,
              <br />
              Toronto, ON M3A 1E3,
              <br />
              Canada
            </p>

            <p className="mt-3 font-medium">+1-416-8241228</p>
            <p className="font-medium">+1-416-8241228</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className=" mt-14 md:pt-5 flex flex-col md:flex-row justify-between md:items-center gap-4 text-xs text-gray-400">
        <p>© 2025 thememarch All right reserved</p>
        {/* <div className="divider"></div> */}
        <p className=" flex-1 hidden md:block">
          <hr />
        </p>
        <ul className="flex flex-wrap gap-5">
          <li>
            <a className="hover:text-white" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-white" href="#">
              About Us
            </a>
          </li>
          <li>
            <a className="hover:text-white" href="#">
              Practice Areas
            </a>
          </li>
          <li>
            <a className="hover:text-white" href="#">
              Our Team
            </a>
          </li>
          <li>
            <a className="hover:text-white" href="#">
              Case Studies
            </a>
          </li>
          <li>
            <a className="hover:text-white" href="#">
              Blog
            </a>
          </li>
          <li>
            <a className="hover:text-white" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
