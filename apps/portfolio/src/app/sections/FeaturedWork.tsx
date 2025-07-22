const FeaturedWork = () => {
    return (
        <section id="projects" className="max-w-screen-2xl w-full mx-auto backdrop-blur-lg saturate-100 py-10 px-6 md:py-14 md:px-16 xl:px-32 space-y-8 text-2xl">
            <h2 className="text-xl font-medium">FEATURED WORK</h2>
            <p className="font-medium text-4xl">Showcasing Real-World Applications</p>
            <p>
                Explore a selection of my key projects, demonstrating my ability to build complex, scalable, and user-friendly web applications from conception to deployment.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 !mt-12">
                <div className="border-[#F65F62] border border-t-8 rounded-lg relative p-6">
                    <p className="w-12 h-12 -translate-y-1/2 -mt-7 font-medium rounded-full mx-auto bg-[#F65F62] text-black flex items-center justify-center">1</p>

                    <h3 className="font-medium mb-4">Content Management System</h3>
                    <p>
                        A flexible and intuitive content management system that empowers users to easily create, manage, and publish digital content. Developed using a modern tech stack including React, Node.js, and MongoDB. Achieved a 30% improvement in page load times through careful optimization.
                    </p>

                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-4 gap-x-4 font-medium w-full mt-6">
                        <button className="w-full border-2 bg-[#F65F62] border-[#F65F62] text-black md:px-10 xl:px-4 py-2 rounded-md">Live Demo</button>
                        <button className="w-full border-2 border-[#F65F62] md:px-10 xl:px-4 py-2 rounded-md">GitHub</button>
                    </div>
                </div>
                <div className="border-[#F65F62] border border-t-8 rounded-lg relative p-6">
                    <p className="w-12 h-12 -translate-y-1/2 -mt-7 font-medium rounded-full mx-auto bg-[#F65F62] text-black flex items-center justify-center">2</p>

                    <h3 className="font-medium mb-4">Video Chat Application</h3>
                    <p>
                        A real-time video chat platform supporting one-on-one and group calls, instant messaging. Built using React, WebRTC, and Socket.IO, with seamless session handling and media streaming. Scaled to support over 5,000 concurrent users with optimized bandwidth management and connection reliability.
                    </p>

                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-4 gap-x-4 font-medium w-full mt-6">
                        <button className="w-full border-2 bg-[#F65F62] border-[#F65F62] text-black md:px-10 xl:px-4 py-2 rounded-md">Live Demo</button>
                        <button className="w-full border-2 border-[#F65F62] md:px-10 xl:px-4 py-2 rounded-md">GitHub</button>
                    </div>
                </div>
                <div className="border-[#F65F62] border border-t-8 rounded-lg relative p-6">
                    <p className="w-12 h-12 -translate-y-1/2 -mt-7 font-medium rounded-full mx-auto bg-[#F65F62] text-black flex items-center justify-center">3</p>

                    <h3 className="font-medium mb-4">Simon Game</h3>
                    <p>
                        An interactive memory-based Simon Game with progressive difficulty levels and dynamic color/audio feedback. Developed using React and TypeScript with responsive design and accessibility support. Achieved 100% Lighthouse performance score and optimized for mobile and desktop experiences.
                    </p>

                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-4 gap-x-4 font-medium w-full mt-6">
                        <button className="w-full border-2 bg-[#F65F62] border-[#F65F62] text-black md:px-10 xl:px-4 py-2 rounded-md">Live Demo</button>
                        <button className="w-full border-2 border-[#F65F62] md:px-10 xl:px-4 py-2 rounded-md">GitHub</button>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default FeaturedWork;
