const MyExpertise = () => {
    return (
        <section id="expertise" className="max-w-screen-2xl w-full mx-auto backdrop-blur-lg saturate-100 py-10 px-6 md:py-14 md:px-16 xl:px-32 space-y-8 text-2xl">
            <h2 className="text-xl font-medium">MY EXPERTISE</h2>
            <p className="font-medium text-4xl">Diverse Skill Set for Dynamic Solutions</p>
            <p>
                My technical proficiency covers a wide array of tools and technologies, enabling me to tackle diverse development challenges and deliver comprehensive solutions.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8">
                <div>
                    <div className="flex gap-x-6 items-center mb-2">
                        <span className="material-symbols-outlined text-6xl text-[#F65F62]">
                            code
                        </span>
                        <h3 className="font-medium">Frontend Development</h3>
                    </div>
                    <p className="ml-[5.25rem]">
                        HTML5, CSS3, JavaScript (ES6+), React, Angular, Vue.js, TypeScript. Crafting engaging and interactive user interfaces.
                    </p>
                </div>
                <div>
                    <div className="flex gap-x-6 items-center mb-2">
                        <span className="material-symbols-outlined text-6xl text-[#F65F62]">
                            dns
                        </span>
                        <h3 className="font-medium">Backend Development</h3>
                    </div>
                    <p className="ml-[5.25rem]">
                        Node.js, Express.js, RESTful API development. Building robust and efficient server-side applications.
                    </p>
                </div>
                <div>
                    <div className="flex gap-x-6 items-center mb-2">
                        <span className="material-symbols-outlined text-6xl text-[#F65F62]">
                            database
                        </span>
                        <h3 className="font-medium">Databases</h3>
                    </div>
                    <p className="ml-[5.25rem]">
                        MongoDB, PostgreSQL. Managing and optimising data storage and retrieval for various applications.
                    </p>
                </div>
                <div>
                    <div className="flex gap-x-6 items-center mb-2">
                        <span className="material-symbols-outlined text-6xl text-[#F65F62]">
                            cloud
                        </span>
                        <h3 className="font-medium">Tools & Platforms</h3>
                    </div>
                    <p className="ml-[5.25rem]">
                        Git, Docker, AWS (EC2, S3, ECS, etc.,), CI/CD pipelines. Streamlining development workflows and deployment processes.
                    </p>
                </div>
            </div>
        </section>
    )
};

export default MyExpertise;
