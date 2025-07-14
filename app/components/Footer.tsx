import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaMedium,
  FaFacebook,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full text-gray-400 py-6 px-4 mt-20 border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-around items-center gap-4">
        {/* Left: Text */}
        <div className="text-center md:text-left text-sm">
          Made with ❤️ by{" "}
          <span className="text-white font-semibold">Karthik Saladi</span> ©{" "}
          {new Date().getFullYear()}
        </div>

        {/* Right: Social Icons */}
        <div className="flex space-x-5 text-lg">
          {/* Social Icons */}
          <a href="https://github.com/KarthikSaladi047" target="_blank">
            <FaGithub className="hover:text-purple-400 transition" />
          </a>
          <a
            href="https://www.linkedin.com/in/sai-sampath-karthik-saladi-76a42a259/"
            target="_blank"
          >
            <FaLinkedin className="hover:text-blue-400 transition" />
          </a>
          <a
            href="https://www.instagram.com/mr.karthik_saladi/"
            target="_blank"
          >
            <FaInstagram className="hover:text-pink-400 transition" />
          </a>
          <a href="https://medium.com/@karthiksaladidevops" target="_blank">
            <FaMedium className="hover:text-green-400 transition" />
          </a>
          <a
            href="https://www.facebook.com/karthiknaidu.saisampath/"
            target="_blank"
          >
            <FaFacebook className="hover:text-blue-800 transition" />
          </a>
          <a href="https://x.com/karthiksaladi" target="_blank">
            <FaX className="hover:text-red-400 transition" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
