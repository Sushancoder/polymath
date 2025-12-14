import { Facebook_SVG, Twitter_SVG, Github_SVG } from "./SVGs/Socials";
import Logo from "./SVGs/logo";
import Link from "next/link";

function Footer() {

  let otherPagesClassName = "text-sm text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors duration-200"
  let socialsClassName = "text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"

  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-2.5">
            <div className="bg-primary p-2 rounded-lg">
              <Logo />
            </div>
            <span className="text-xl font-bold text-slate-800 dark:text-white">
              PolyMath
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <Link
              className={otherPagesClassName}
              href="#">
              About Us
            </Link>
            <Link
              className={otherPagesClassName}
              href="#">
              FAQ
            </Link>
            <Link
              className={otherPagesClassName}
              href="#">
              Contact
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              className={socialsClassName}
              href="#">
              <Facebook_SVG />
            </Link>
            <Link
              className={socialsClassName}
              href="#">
              <Twitter_SVG />
            </Link>
            <Link
              className={socialsClassName}
              href="#">
              <Github_SVG />
            </Link>
          </div>
        </div>
        <div className="text-center text-sm text-slate-500 dark:text-slate-400 mt-8">
          © 2025 PolyMath. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
