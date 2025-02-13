import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Technology in Computer Science Engineering',
      location: 'Hyderabad, IN',
      institution: 'Narsimha Reddy Engineering College',
      grade: 'CGPA: 9.0',
      year: '2021 – Expected: 2025',
    },
    {
      degree: '12th Grade (Science - MPC)',
      location: 'Warangal, IN',
      institution: 'SR Junior College',
      grade: 'Percentage: 88.9',
      year: '2019 – 2021',
    },
    {
      degree: 'Secondary Education',
      location: 'Warangal, IN',
      institution: 'SR Digi School',
      grade: 'GPA: 9.7',
      year: '2018 – 2019',
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-800 py-16 px-8 lg:px-24">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-12">Education</h2>
      <div className="relative border-l-4 border-blue-500 dark:border-blue-400">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="mb-8 pl-8 relative"
          >
            <div className="absolute -left-4 w-8 h-8 bg-blue-500 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-900"></div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{edu.degree}</h3>
            <p className="text-gray-600 dark:text-gray-300">{edu.institution} - {edu.location}</p>
            <p className="text-gray-600 dark:text-gray-300">{edu.grade}</p>
            <p className="text-gray-500 dark:text-gray-400 italic">{edu.year}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
