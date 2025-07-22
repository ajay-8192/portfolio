const AboutMe = () => {
    return (
        <section id="about" className="max-w-screen-2xl w-full mx-auto backdrop-blur-lg saturate-100 py-10 px-6 md:py-14 md:px-16 xl:px-32 space-y-8 text-2xl">
            <h2 className="text-xl font-medium">ABOUT ME</h2>
            <p className="font-medium text-4xl">Frontend Prowess, Full Stack Power</p>
            <p>
                I am a dedicated Full Stack Engineer with a strong inclination towards crafting exceptional frontend experiences. My expertise spans across modern JavaScript frameworks like React.js, Angular, and Vue.js, complemented by robust backend skills in Node.js and Express, with MongoDB for data persistence. I am passionate about building scalable, performant, and intuitive web applications that deliver real value.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-8">
                <div className="border border-l-8 border-[#F65F62] rounded-2xl p-8">
                    <h3 className="font-medium mb-4">Frontend Focus</h3>
                    <p>
                        Specialising in responsive and user-centric UI/UX, ensuring an engaging experience for every user.
                    </p>
                </div>
                <div className="border border-l-8 border-[#F65F62] rounded-2xl p-8">
                    <h3 className="font-medium mb-4">Full Stack Capabilities</h3>
                    <p>
                        Proficient in end-to-end development, from database design to API integration and deployment.
                    </p>
                </div>
                <div className="border border-l-8 border-[#F65F62] rounded-2xl p-8 md:col-span-2 xl:col-span-1">
                    <h3 className="font-medium mb-4">Key Technologies</h3>
                    <p>
                        React.js, Node.js, Express, MongoDB, Go, PostgreSQL, REST APIs are my core development tools.
                    </p>
                </div>
            </div>
        </section>
    )
};

export default AboutMe;
