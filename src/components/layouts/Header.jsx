
import { Search, Briefcase, Bell, MessageCircle, Newspaper, User} from "lucide-react";
import Hamburger from "./Hamburger";

const Header = () => {

  return (
    <header className="w-full bg-white shadow-sm border-b py-2">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* LEFT */}
          <div className="flex items-center gap-4">

            {/* Logo */}
            <div className="text-xl font-bold text-blue-600">
                {/* Img tag for logo */}
              Logo
            </div>

            {/* Search */}
            <div className="relative sm:block">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 border-gray-400" />
              <input
                type="text"
                placeholder="Search jobs..."
                className="pl-10 pr-4 py-2 w-44 sm:w-56 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="hidden items-center gap-6 text-gray-600  md:flex">
            
            <NavIcon icon={<Briefcase size={22} />} label="Jobs" />
            <NavIcon icon={<Bell size={22} />} label="Notifications" />
            <NavIcon icon={<MessageCircle size={22} />} label="Messages" />
            <NavIcon icon={<Newspaper size={22} />} label="Feed" />

            {/* Profile */}
            <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300">
              <User size={20} />
            </div>
          </div>

          {/* Hamburger for phone */}
          <div className="md:hidden">
                 <Hamburger/>
          </div>
         
        </div>
      </div>
    </header>
  );
};

const NavIcon = ({ icon, label }) => (
  <button className="flex flex-col items-center text-xs hover:text-blue-600 transition">
    {icon}
    <span className="hidden md:block">{label}</span>
  </button>
);

export default Header;

