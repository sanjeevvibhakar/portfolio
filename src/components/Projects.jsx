const Projects = () => {
  const projects = [
    {
      title: 'Face Mask Detection',
      description: 'A real-time face mask detection system using OpenCV and TensorFlow.',
      link: 'https://github.com/sanjeev/face-mask-detection',
    },
    {
      title: 'NERIST Study Material Manager',
      description: 'Django + React app for uploading, viewing, and managing study material.',
      link: 'https://github.com/sanjeev/nerist-study-material',
    },
  ];

  return (
    <section id="projects" className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6 px-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;