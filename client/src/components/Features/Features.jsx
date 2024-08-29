import FeatureCard from "./FeatureCard";
import { MdOutlineListAlt } from "react-icons/md";
import { BsShieldLockFill } from "react-icons/bs";
import { FaFilePdf } from "react-icons/fa6";
import { TbFreeRights } from "react-icons/tb";


const Features = () => {
  return (
    <div className="mb-20">
      <div className="content">
        <h1 className="text-[64px] font-bold text-center text-[#8353E2FF] mb-20">Features</h1>
        <div>
            <ul className="grid grid-cols-2 gap-[2rem]">
                <li>
                  <FeatureCard 
                    t1={'Learning Online'}
                    t2={'Get Pre Recorded Tutorials'}
                    t3={'Never miss out on any vido content'}
                    icon={<MdOutlineListAlt />}
                    icon_bgColor={'bg-[#FDF2F2FF]'}
                    icon_textColor={'text-[#E05858FF]'}
                  />
                </li>
                <li>
                <FeatureCard 
                    t1={'Secure User Interface'}
                    t2={'Fast and secure payments systems'}
                    t3={'Auto monthly plans, Live tutorials, premium packages are all housed under this platform'}
                    icon={<BsShieldLockFill />}
                    icon_bgColor={'bg-[#EBFDFFFF]'}
                    icon_textColor={'text-[#00BDD6FF]'}
                  />
                </li>
                <li>
                <FeatureCard 
                    t1={'PDFs available'}
                    t2={'Access PDFs from any Level'}
                    t3={'Gain access to old and current PDFs and Download them from the cloud'}
                    icon={<FaFilePdf />}
                    icon_bgColor={'bg-[#F1F8FDFF]'}
                    icon_textColor={'text-[#379AE6FF]'}
                  />
                </li>
                <li>
                <FeatureCard 
                    t1={'Get Access to ongoing scholarship and discounts'}
                    t2={'Free Resources'}
                    t3={'Join Digital makers community to gain access to education and free tech resources'}
                    icon={<TbFreeRights />}
                    icon_bgColor={'bg-[#FEF6F1FF]'}
                    icon_textColor={'text-[#8353E2FF]'}
                  />
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Features
