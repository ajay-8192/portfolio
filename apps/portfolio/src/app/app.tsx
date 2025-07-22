import AboutMe from "./sections/AboutMe";
import CodePrinciples from "./sections/CodePrinciples";
import ContactMe from "./sections/ContactMe";
import FeaturedWork from "./sections/FeaturedWork";
import Intro from "./sections/Intro";
import MyExpertise from "./sections/MyExpertise";
import NavBar from "./sections/NavBar";
import ThankYou from "./sections/ThankYou";

export function App() {
	return (
		<div className="h-screen overflow-y-auto hide-scrollbar background-img bg-black text-white">
			{/* Navbar */}
			<NavBar />

			{/* Main Content */}
			<main className="relative">
				{/* Ajay Chowdary Intro */}
				<Intro />

				{/* About Me */}
				<AboutMe />

				{/* My Expertise */}
				<MyExpertise />

				{/* Featured Work */}
				<FeaturedWork />

				{/* Code Principles */}
				<CodePrinciples />

				{/* Contact Me */}
				<ContactMe />

				{/* Thank You */}
				<ThankYou />
			</main>
		</div>
	);
}

export default App;
