/* eslint-disable react/no-unescaped-entities */
import pic from '../../../assets/Free-startup-task-management.png';

const Banner = () => {
    const bannerStyle = {
        backgroundImage: `url(${pic})`,
    };

    return (
        <div
            className="flex items-center justify-center h-[70vh] bg-cover bg-center"
            style={bannerStyle}
        >
            <button className='bg-red-500 font-bold px-3 py-1 rounded-lg mb-32 text-white'>Let's Explore</button>
        </div>
    );
};

export default Banner;
