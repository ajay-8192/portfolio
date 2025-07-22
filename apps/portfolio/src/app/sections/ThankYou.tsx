const ThankYou = () => {
    return (
        <section id="thank-you" className="max-w-screen-2xl w-full mx-auto backdrop-blur-lg saturate-100 py-10 px-6 md:py-14 md:px-16 xl:px-32 space-y-8 text-2xl">
            <h2 className="text-xl font-medium">THANK YOU</h2>
            <p className="font-medium text-4xl">Showcasing Real-World Applications</p>
            <p>
                Explore a selection of my key projects, demonstrating my ability to build complex, scalable, and user-friendly web applications from conception to deployment.
            </p>
            <div className="rounded-lg bg-[#022349] p-6 space-y-4">
                <div className="flex items-center gap-x-6">
                    <span className="material-symbols-outlined text-[#8dd4fb]">
                        info
                    </span>
                    <h3 className="text-2xl font-medium">Ready to Collaborate?</h3>
                </div>
                <p className="ml-12">
                    I thrive on new challenges and am always eager to contribute to innovative projects. Let's connect and discuss how my expertise can bring your ideas to life.
                </p>
                <button className="ml-12 font-medium border-2 bg-[#F65F62] border-[#F65F62] text-black px-8 py-2 rounded-md">Contact Me Now</button>
            </div>
            <p>
                I look forward to the possibility of working together and building the next generation of web applications.
            </p>
        </section>
    )
};

export default ThankYou;
