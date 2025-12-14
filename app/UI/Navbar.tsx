import Logo from "./SVGs/logo";
import Link from "next/link";

function Navbar() {

  // ClassNames:
  let inactiveLink_ClassName = "text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors duration-200 font-medium text-sm hover:opacity-75 cursor-pointer "
  let activeLink_ClassName = "text-primary font-bold text-sm hover:opacity-75 cursor-pointer"

  return (
    <div className="w-full fixed top-0 z-50 bg-white dark:bg-slate-900 shadow-sm"> 
    {/* <div className="w-full fixed top-0">  */}
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center space-x-8">
          <Link className="flex items-center space-x-2.5" href="/">
            <div className="bg-primary p-2 rounded-lg"></div>
            <Logo />
            <span className="text-xl font-bold text-slate-800 dark:text-white">
              PolyMath
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link className={activeLink_ClassName} 
            href="/">
              Home
            </Link>
            <Link
              className={inactiveLink_ClassName}
              href="/create">
              Create
            </Link>
            <Link
              className={inactiveLink_ClassName}
              href="/settings">
              Settings
            </Link>
          </div>
        </div>


        <div className="flex items-center">
          
          <Link href="#">
          <button className={activeLink_ClassName}>
            Log In / Sign Up
          </button>
          </Link>
          
          {/* <img
            alt="User avatar"
            className="h-10 w-10 rounded-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyJgIeZfezGnVAFRSkqP9tF4GMSZAFrVhQm0850MEpb6P4ZHSMaYRKJMJlfcxA2-eg4Gm3W2C66oEUld73nXDkiRRBJRSdNdkY-sGHjdeqmw0cY6pp0UkIzdMIFoaSnGX3r93T-lj7q38srwpwruH8Mo3zZQ2PneyjM_OTmdW7_q9tqvl8JWf9d5ZiBBY2apK-_rYyL2PQiw7geDb5UNK3vOmdcopBlpwRI8tiMse5NpGmZurNvKo8eN0Nc2vtFTgY9W7fGuD7iHk"
          /> */}
        </div>
      </div>
    </nav>
     </div>
  );
}

export default Navbar;
