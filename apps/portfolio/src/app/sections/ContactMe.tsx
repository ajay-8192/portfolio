const ContactMe = () => {
    return (
        <section id="contact" className="max-w-screen-2xl w-full mx-auto backdrop-blur-lg saturate-100 py-10 px-6 md:py-14 md:px-16 xl:px-32 space-y-8 text-2xl">
            <h2 className="text-xl font-medium">GET IN TOUCH</h2>
            <p className="font-medium text-4xl">Let's Build Something Great Together</p>
            <p>
                Whether you have a project in mind, a collaboration opportunity, or just want to connect, I’m always open to new possibilities. Feel free to reach out through any of the channels below.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8">
                <div className="bg-[#790709ff] rounded-lg p-6 font-medium space-y-4">
                    <h3>Email</h3>
                    <p className="text-[#F65F62] underline">
                        <a href="mailto:ajaychowdary8192@gmail.com">
                            ajaychowdary8192@gmail.com
                        </a>
                    </p>
                </div>
                {/* <div className="bg-[#790709ff] rounded-lg p-6 font-medium space-y-4">
							<h3>Phone</h3>
							<p className="text-[#F65F62]">
								<a href="tel:+91 8328******">
									+91 8328******
								</a>
							</p>
						</div> */}
                <div className="bg-[#790709ff] rounded-lg p-6 font-medium space-y-4">
                    <h3>LinkedIn</h3>
                    <p className="text-[#F65F62] underline">
                        <a href="https://linkedin.com/in/ajay-chowdary-8192n">
                            linkedin.com/in/ajay-chowdary-8192n
                        </a>
                    </p>
                </div>
                <div className="bg-[#790709ff] rounded-lg p-6 font-medium space-y-4">
                    <h3>GitHub</h3>
                    <p className="text-[#F65F62] underline">
                        <a href="https://github.com/ajay-8192">
                            github.com/ajay-8192
                        </a>
                    </p>
                </div>
            </div>
        </section>
    )
};

export default ContactMe;
