/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import pic from '../../../assets/Free-startup-task-management.png';

const Banner = () => {
    const bannerStyle = {
        backgroundImage: `url(${pic})`,
    };

    return (
        <div
            className="flex items-center justify-center h-[70vh] mb-8 bg-cover bg-center"
            style={bannerStyle}
        >
           <Link to="/login"> <button className='bg-red-500 font-bold px-3 py-1 rounded-lg mb-32 text-white'>Let's Explore</button></Link>
        </div>
    );
};

export default Banner;
