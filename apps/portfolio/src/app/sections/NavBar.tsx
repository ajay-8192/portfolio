const NavBar = () => {
    return (
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
    )
};

export default NavBar;
