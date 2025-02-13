const Skills = () => {
    return (
      <section id="skills" className="py-16 bg-white dark:bg-gray-800 transition-all duration-500">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
            Skills
          </h2>
  
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-3">Domain</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'Web Development (MERN)',
                  'Competitive Programming',
                  'Data Structures and Algorithm',
                  'Video Editing',
                  'Object-Oriented Programming',
                  'Canva',
                  'DBMS',
                  'Word',
                  'Excel',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-lg shadow-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
  
            <div>
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-3">Languages</h3>
              <div className="flex flex-wrap gap-3">
                {['C++', 'C', 'JAVA', 'Python', 'SQL', 'HTML', 'CSS', 'JavaScript'].map((lang) => (
                  <span
                    key={lang}
                    className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-lg shadow-md"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
  
            <div>
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-3">Frameworks</h3>
              <div className="flex flex-wrap gap-3">
                {['React.js', 'Bootstrap', 'Tailwind CSS', 'Node.js', 'Express.js', 'Next.js', 'Material UI'].map((framework) => (
                  <span
                    key={framework}
                    className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-lg shadow-md"
                  >
                    {framework}
                  </span>
                ))}
              </div>
            </div>
  
            <div>
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-3">Tools</h3>
              <div className="flex flex-wrap gap-3">
                {['Git/GitHub', 'VS Code', 'Terminal'].map((tool) => (
                  <span
                    key={tool}
                    className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-lg shadow-md"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
  
            <div>
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-3">Databases</h3>
              <div className="flex flex-wrap gap-3">
                {['MongoDB', 'MySQL'].map((db) => (
                  <span
                    key={db}
                    className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-lg shadow-md"
                  >
                    {db}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
  