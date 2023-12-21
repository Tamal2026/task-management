import img1 from '../../assets/download.png'
import img2 from '../../assets/download1.png'
import img3 from '../../assets/download2.png'

const DeveloperHub = () => {
    return (
        <div className="container mx-auto my-8 text-center">
            <section className="bg-gray-100 p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-semibold mb-4 text-center text-gray-800">Unlock Your Potential as a Developer</h2>
                <p className="text-lg text-center text-gray-600 mb-8">Join our Developer Hub and discover a world of opportunities tailored for developers like you.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="benefit-item">
                        <img  src={img1} alt="Coding Icon" className="mx-auto mb-4 h-[200px] w-auto" />
                        <h3 className="text-xl font-semibold mb-2">Stay Ahead in Tech</h3>
                        <p className="text-gray-700">Access the latest technologies, frameworks, and coding best practices to stay at the forefront of the industry.</p>
                    </div>

                    <div className="benefit-item">
                        <img src={img2} alt="Networking Icon" className="mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Connect with Peers</h3>
                        <p className="text-gray-700">Engage with a vibrant community of developers, share insights, and collaborate on exciting projects.</p>
                    </div>

                    <div className="benefit-item">
                        <img src={img3} alt="Problem Solving Icon" className="mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Enhance Problem-Solving Skills</h3>
                        <p className="text-gray-700">Participate in coding challenges, discussions, and find solutions to sharpen your problem-solving abilities.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DeveloperHub;
