import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 z-50 bg-black/80 backdrop-blur shadow-md px-6 py-4 flex justify-between items-center">
      {/* Left - Logo + Name */}
      <div className="text-xl font-bold text-white">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" width={22} height={22} alt="Logo" />
          <span>Karthik Saladi</span>
        </Link>
      </div>

      {/* Right - Section Buttons + CV */}
      <div className="flex items-center space-x-6 text-white font-medium">
        <Link href="#about">About</Link>
        <Link href="#work">Work</Link>
        <Link href="#tech">TechStack</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
        <a
          href="/Karthik_Saladi_CV.pdf"
          download
          className="flex items-center gap-2 px-3 py-1 rounded bg-gradient-to-r from-purple-500 to-pink-500 text-sm text-white hover:opacity-80 transition"
        >
          CV
          <Image
            src="/downloads.png"
            width={15}
            height={15}
            alt="Download CV"
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
