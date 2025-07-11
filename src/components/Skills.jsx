const Skills = () => {
  const skills = ['C++', 'Python', 'JavaScript', 'React', 'Django', 'MySQL', 'Git', 'DSA'];
  return (
    <section id="skills" className="py-16 bg-gray-200 text-center">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <span key={index} className="bg-white shadow px-4 py-2 rounded-full">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;