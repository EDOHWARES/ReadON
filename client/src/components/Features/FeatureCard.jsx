import PropTypes from 'prop-types';

const FeatureCard = ({t1, t2, t3, icon, icon_bgColor, icon_textColor}) => {
  return (
    <div className='flex items-start space-x-4 shadow-[0_4px_10px_0_rgba(131,83,226,0.7)] p-4 border bg-white rounded-[8px] hover:scale-95 duration-500'>
      <div className={`w-[56px] h-[56px] text-3xl ${icon_bgColor} rounded-[8px] flex items-center justify-center ${icon_textColor}`}>
        {icon}
      </div>
      <div>
        <p className='text-[14px] text-[#9095A0FF]'>{t1}</p>
        <h3 className='text-[#171A1FFF] text-[24px] font-bold mb-2'>{t2}</h3>
        <p className='text-[12px] text-[#6E7787FF]'>{t3}</p>
      </div>
    </div>
  )
};

FeatureCard.propTypes = {
    t1: PropTypes.string,
    t2: PropTypes.string,
    t3: PropTypes.string,
    icon: PropTypes.object,
    icon_bgColor: PropTypes.string,
    icon_textColor: PropTypes.string,
}

export default FeatureCard
