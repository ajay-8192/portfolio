const Intro = () => {
    return (
        <section id="home" className="max-w-screen-2xl w-full mx-auto flex flex-col md:flex-row backdrop-blur-lg saturate-100 justify-between text-2xl items-center md:py-12 md:px-16 xl:px-32">
            <div className="flex flex-col space-y-10 md:w-3/5 py-10 px-6 md:py-14 md:pr-16 md:px-0">
                <h1 className="text-5xl font-medium">Ajay Chowdary</h1>
                <p>
                    Transforming innovative ideas into seamless, user-friendly web applications. As a Frontend-focused Full Stack Engineer with 4 years of experience, I bring a holistic approach to development, prioritising clean code and captivating design.
                </p>
                <div className="flex flex-col xl:flex-row gap-y-4 gap-x-4 font-medium w-full md:w-fit">
                    <button className="border-2 bg-[#F65F62] border-[#F65F62] text-black md:px-16 xl:px-8 py-2 rounded-md">View My Projects</button>
                    <button className="border-2 border-[#F65F62] md:px-16 xl:px-8 py-2 rounded-md">Get in Touch</button>
                </div>
            </div>
            <img src="/ajay.jpg" alt="Ajay Chowdary" title="Ajay Chowdary" className="w-full md:w-2/5 md:p-0 aspect-square object-center object-cover md:rounded-lg" />
        </section>
    )
};

export default Intro;
