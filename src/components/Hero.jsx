const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center p-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Sanjeev 👋</h1>
      <p className="text-lg md:text-xl max-w-xl">
        I'm a Computer Science student passionate about Web Dev, AI, and DSA.
        I love building efficient, scalable apps and solving tough problems.
      </p>
      <a href="#projects" className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
        View Projects
      </a>
    </section>
  );
};

export default Hero;