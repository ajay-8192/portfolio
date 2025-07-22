export function App() {
	return (
		<div className="h-screen overflow-y-auto hide-scrollbar background-img bg-black text-white">

			{/* Navbar */}
			<header className="h-20 px-6 md:px-16 xl:px-32 max-w-screen-2xl w-full mx-auto backdrop-blur-xl saturate-100 sticky top-0 z-10" id="home">
				<nav className="h-full flex justify-center md:justify-between items-center">
					<p className="text-xl font-medium">Ajay <span className="text-[#F65F62] italic font-bold">Chowdary</span></p>
					<ul className="hidden md:flex gap-4 font-medium">
						<li className="hover:underline hover:text-[#F65F62]"><a href="/">Home</a></li>
						<li className="hover:underline hover:text-[#F65F62]"><a href="#about">About</a></li>
						<li className="hover:underline hover:text-[#F65F62]"><a href="#expertise">Expertise</a></li>
						<li className="hover:underline hover:text-[#F65F62]"><a href="#projects">Featured Work</a></li>
						<li className="hover:underline hover:text-[#F65F62]"><a href="#code-and-principles">Code & Principles</a></li>
						<li className="hover:underline hover:text-[#F65F62]"><a href="#contact">Contact</a></li>
					</ul>
				</nav>
			</header>

			{/* Main Content */}
			<main className="relative">

				{/* Ajay Chowdary Intro */}
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

				{/* About Me */}
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

				{/* My Expertise */}
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

				{/* Featured Work */}
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

				{/* Code Principles */}
				<section id="code-and-principles" className="backdrop-blur-lg saturate-100 bg-[#f65f62bf] text-black text-2xl">
					<div className="max-w-screen-2xl w-full mx-auto py-10 px-6 md:py-14 md:px-16 xl:px-32 space-y-8">
						<h2 className="text-xl font-medium">CODE & PRINCIPLES</h2>
						<p className="font-medium text-4xl">Beyond the Interface: Delving into Technical Excellence</p>
						<p>
							My projects are built on a foundation of clean code, modular architecture, and a strong emphasis on performance and security. Here’s a glimpse into my technical approach and code samples.
						</p>

						<div className="grid grid-cols-1 gap-y-6">
							<div className="space-y-4">
								<h3 className="font-medium">Frontend Component Snippets</h3>

								<pre className="bg-[#e95255ff] p-4 rounded-lg overflow-x-auto">
									<code className="whitespace-pre text-base">
	{`import React from 'react';

	export type CaptionProps = {
	children: React.ReactNode | string;
	variant: 'primary' | 'secondary' | 'tertiary';
	customClass?: string;
	};

	const Caption: React.FC<CaptionProps> = ({ children, variant, customClass }) => {

	const variantStyles: Record<CaptionProps['variant'], string> = {
		primary: 'text-16',
		secondary: 'text-14',
		tertiary: 'text-12'
	};

	const captionClass = \`\${variantStyles[variant]} leading-3/2 \${customClass}\`

	return (
		<div className={captionClass}>
		{children}
		</div>
	);
	};

	export default Caption;
	`}
									</code>
								</pre>
								<p>Demonstrates a clean, reusable React component adhering to best practices.</p>
							</div>
							<div className="space-y-4">
								<h3 className="font-medium">Backend API Endpoint</h3>

								<pre className="bg-[#e95255ff] p-4 rounded-lg overflow-x-auto">
									<code className="whitespace-pre text-base">
	{`protectedRoutes := routeGroup.Group("/v1", userHandler.UserMiddleware(redisClient))
	{
		userRoutes := protectedRoutes.Group("/user")
		{
			userRoutes.GET("/me", userHandler.GetProfileDetails)
			userRoutes.GET("/search", userHandler.SearchUser)
		}
		orgRoutes := protectedRoutes.Group("/org")
		{
			orgRoutes.GET("", chathandler.GetOrganisations)
			orgRoutes.POST("/create", chathandler.CreateOrganisation)
		}
		chatRoutes := protectedRoutes.Group("/:orgId")
		{
			chatRoutes.GET("", chathandler.GetConversationsByOrgId)
			chatRoutes.POST("/create",)
		}
	}
	`}
									</code>
								</pre>
								<p>Illustrates a secure API endpoint with token-based authentication.</p>
							</div>
						</div>
						<p>
							I also focus on performance optimisation techniques like lazy loading and code splitting to ensure optimal user experience. All projects are well-documented and available on GitHub for detailed review.
						</p>
					</div>
				</section>

				{/* Contact Me */}
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

				{/* Thank You */}
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
						<button className="ml-12 font-medium border-2 bg-[#F65F62] border-[#F65F62] text-black px-8 py-2 rounded-md">View My Projects</button>
					</div>
					<p>
						I look forward to the possibility of working together and building the next generation of web applications.
					</p>
				</section>
			</main>
		</div>
	);
}

export default App;
