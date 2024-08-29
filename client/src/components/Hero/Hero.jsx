import { FaRegCheckCircle } from "react-icons/fa";
import { assets } from "../../assets/assests";
import { PiStudentBold } from "react-icons/pi";
import { BiSolidQuoteRight } from "react-icons/bi";
import { ImStatsBars2 } from "react-icons/im";
import { FaGgCircle } from "react-icons/fa";


const Hero = () => {
  return (
    <div>
      <div className="content grid grid-cols-2 gap-y-20 items-start justify-between mb-20 ">
        <div className="">
          <h1 className="text-[64px] text-[#171A1FFF] leading-tight mb-[1rem] font-bold">
            ReadON Prep, Ace <br /> your Exams on the Go!
          </h1>
          <ul className="text-[16px] text-[#171A1FFF] mb-[2rem]">
            <li className="flex items-center gap-2">
              <span className="text-[#117B34FF]">
                <FaRegCheckCircle />
              </span>
              <span>All past questions are available</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#117B34FF]">
                <FaRegCheckCircle />
              </span>
              <span>Access available campus tutorials</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#117B34FF]">
                <FaRegCheckCircle />
              </span>
              <span>Low budget and available 24/7</span>
            </li>
          </ul>
          <button className="bg-[#6025D8FF] px-6 py-4 rounded-full text-white font-semibold">
            Get Started For Free
          </button>
          <p className="text-[16px] text-gray-400 mt-20 ml-[15rem]">
            TRUSTED BY OVER <span className="text-[#117B34FF]">2000+</span>{" "}
            STUDENTS
          </p>
        </div>
        <div className="flex flex-col items-center gap-[1rem]">
          <img
            className="float-end w-[30rem] h-[20rem] object-cover object-left-top rounded-2xl border-2 border-[#4069E5FF]"
            src={assets.student1}
            alt="student img"
          />
          <p className="flex border-b-2 border-b-[#171A1FFF] pb-4  items-center space-x-2 font-semibold text-[#171A1FFF]">
            <span>
              <PiStudentBold className="text-xl" />
            </span>
            <span>SCHOLAR OF THE WEEK</span>
          </p>
          <div className="">
            <div className="relative w-[380px] shadow-2xl p-4 flex flex-col items-start justify-between text-[#484d56] text-[18px]">
              <p>
                No matter the season, if you water your plant always they will
                never die, &quot;we&apos;re not talking about plants&quot;
              </p>
              <p className="border-t py-4 flex w-full mt-4 flex-col justify-between">
                <span>Digital Makers</span>
                <span className="text-gray-400">Developers</span>
              </p>
              <div className="quote absolute top-[-1rem] left-[-1rem] bg-[#9095A0FF] text-white w-[36px] h-[36px] rounded-full flex items-center justify-center">
                <BiSolidQuoteRight />
              </div>
            </div>

            <div className="mt-4 flex items-center gap-[2rem] text-[18px] font-bold">
              <p className="flex items-center space-x-2 text-gray-400 alegreya">
                <span>
                  <ImStatsBars2 />
                </span>
                <span>BRAINSTORM GROUP</span>
              </p>
              <p className="flex items-center space-x-2 text-gray-400 alegreya">
                <span><FaGgCircle /></span>
                <span>DIGITAL MAKERS</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
