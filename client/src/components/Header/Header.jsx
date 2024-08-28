import { assets } from "../../assets/assests";
import { IoSearchOutline } from "react-icons/io5";
import { TiWorldOutline } from "react-icons/ti";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoShieldCheckmark } from "react-icons/io5";


const Header = () => {
  return (
    <header className="relative w-full">
      <div className="flex absolute rotate-180 top-[-8rem] left-[45%]">
        <img
          className="mt-[-4rem] mr-[-2.8rem]"
          src={assets.hdbar2}
          alt="bar1"
        />
        <img src={assets.hdbar1} alt="bar2" />
      </div>
      <div className="cont px-4 md:px-8 w-full py-4">
        <div className="content flex items-center justify-between">
          <div className="logo-and-nav-wraper flex items-center gap-14">
            <div className="logo w-[133px] text-[14px]">
              <img src={assets.logo} alt="logo" />
            </div>
            <nav className="nav">
              <ul className="flex items-center gap-10 text-[1rem] text-gray-600 font-medium">
                <li className="navItem cursor-pointer border-b border-b-transparent hover:border-b-gray-500 duration-500">About Us</li>
                <li className="navItem flex items-center space-x-1 cursor-pointer border-b border-b-transparent hover:border-b-gray-500 duration-500">
                  <span>Features</span> <IoIosArrowDown />
                </li>
                <li className="navItem cursor-pointer border-b border-b-transparent hover:border-b-gray-500 duration-500">Blogs</li>
              </ul>
            </nav>
          </div>

          <div className="actions">
            <ul className="flex items-center gap-10 text-[1rem] font-medium text-gray-600">
              <li className="text-xl w-[2.5rem] h-[2.5rem] flex items-center justify-center text-black rounded-full bg-gray-200 hover:bg-white duration-500 cursor-pointer">
                <IoSearchOutline />
              </li>
              <li className="text-xl w-[2.5rem] h-[2.5rem] flex items-center justify-center text-black rounded-full bg-gray-200 hover:bg-white duration-500 cursor-pointer">
                <TiWorldOutline />
              </li>
              <li>
                <button className="border-4 border-[#4069E5FF] px-6 py-3 rounded-full text-[#4069E5FF] font-bold hover:bg-[#4069E5FF] hover:text-white duration-500">
                  Sign Up
                </button>
              </li>
              <li className="h-[40px] w-[40px] bg-[#00BDD6FF] flex items-center justify-center text-white font-bold rounded-[6px] hover:bg-[#69d2e0] duration-500 cursor-pointer text-xl">
                <IoPersonOutline />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" ml-4 flex items-center space-x-2 h-[52px] w-fit py-4 px-6 border-[.3px] border-[#8353E2FF] shadow-[0_4px_6px_-1px_rgba(131,83,226,1)]">
        <span><IoShieldCheckmark /></span> <span>POWERED BY BRAINSTORM GROUP</span>
      </div>
    </header>
  );
};

export default Header;
