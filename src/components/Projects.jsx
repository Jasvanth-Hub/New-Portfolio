const projectsData = [
  {
    title: 'Study Sync',
    description: 'An academic project focused on collaborative learning and content sharing among the students to help them better understand all the concepts.',
    imageUrl: '/images/studySync.png',
    techStack: ['HTML','CSS','Responsive design','Effective UI'],
    liveLink: 'https://study-sync-fnr7.onrender.com/',
    githubLink: 'https://github.com/Jasvanth-Hub/Study_Sync',
  },
  {
    title: 'ChatTo - The Chat Application',
    description: 'A real-time chat application with backend and frontend integration using React, Node.js, and Socket.io.',
    imageUrl: '/images/chatApplication.png',
    techStack: ['React','Express.js', 'Node.js', 'Socket.io', 'Material UI','MongoDB','Cloudinary'],
    liveLink: 'https://chatto-app.onrender.com/',
    githubLink: 'https://github.com/Jasvanth-Hub/ChatTo-The-chat-app',
  },
  {
    title: 'Login Authentication System',
    description: 'User authentication system with login, registration, password update, and secure account management.',
    imageUrl: '/images/loginAuthentication.png',
    techStack: ['React', 'Node.js','Express.js','Cloudinary', 'MongoDB','express.js','material UI'],
    liveLink: 'https://login-authentication-app-z451.onrender.com/',
    githubLink: 'https://github.com/Jasvanth-Hub/Login-Authentication-App',
  },
  {
    title: 'New Todo Application',
    description: 'A Todo List app built for efficient task management with dynamic updates like time and date of adding & completing the tasks.',
    imageUrl: '/images/todo.png',
    techStack: ['Vite+React', 'Tailwind CSS','JavaScript'],
    liveLink: 'https://new-to-do-application.onrender.com/',
    githubLink: 'https://github.com/Jasvanth-Hub/New-To-do-Application',
  },
  {
    title: 'My old Portfolio Website',
    description: 'A responsive basic portfolio website showcasing personal projects and skills which I built it as my first portfolio.',
    imageUrl: '/images/portfolio.png',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://old-portfolio-website.onrender.com/',
    githubLink: 'https://github.com/Jasvanth-Hub/Old-Portfolio-website',
  },
  {
    title: 'Tic-Tac-Toe Game',
    description: 'Interactive 2-players Tic-Tac-Toe game with background music, played with "X" and "O" options. It has nice animation on winning the game.',
    imageUrl: '/images/tictoktoe.png',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://jasvanth-hub.github.io/Tic-Toc-Toe-Game/',
    githubLink: 'https://github.com/Jasvanth-Hub/Tic-Toc-Toe-Game',
  },
  {
    title: 'SMS-Spam Detection using NLP',
    description: 'Machine Learning project to classify SMS messages as spam or not using Natural Language Processing techniques.',
    imageUrl: '/images/smsSpamDetection.png',
    techStack: ['Python', 'NLP', 'Machine Learning','Numpy','Pands'],
    liveLink: '#Sorry',
    githubLink: 'https://github.com/Jasvanth-Hub/SMS-Spam-Detection-using-NLP',
  },
  {
    title: 'Weather App',
    description: 'Weather application displaying real-time weather data using an external API for the given location.',
    imageUrl: '/images/weatherApp.png',
    techStack: ['HTML',  'CSS','API Integration','JavaScript'],
    liveLink: 'https://jasvanth-hub.github.io/Weather-App/Weather_app.html',
    githubLink: 'https://github.com/Jasvanth-Hub/Weather-App',
  },
  {
    title: 'Simple Calculator',
    description: 'A basic web calculator that performs arithmetic operations with clear, delete options and can handle every undefined conditions.',
    imageUrl: '/images/calculator.png',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://jasvanth-hub.github.io/Simple-Calculator/Calculator.html',
    githubLink: 'https://github.com/Jasvanth-Hub/Simple-Calculator',
  },
  {
    title: 'QR Code Generation',
    description: 'A tool that generates QR codes from user input using an external API.',
    imageUrl: '/images/QRcode.png',
    techStack: ['JavaScript', 'API', 'HTML', 'CSS'],
    liveLink: 'https://jasvanth-hub.github.io/QR-code-Generator/QR_code_generator.html',
    githubLink: 'https://github.com/Jasvanth-Hub/QR-code-Generator',
  },
  {
    title: 'Captcha Verification',
    description: 'A form verification project using Captcha to enhance security.',
    imageUrl: '/images/captcha.png',
    techStack: ['CSS', 'HTML', 'JavaScript'],
    liveLink: 'https://jasvanth-hub.github.io/Captcha-Verification/Captcha_Validation.html',
    githubLink: 'https://github.com/Jasvanth-Hub/Captcha-Verification',
  },
  {
    title: 'Form Validation',
    description: 'A project ensuring proper validation of user input fields in forms.',
    imageUrl: '/images/formValidation.png',
    techStack: ['JavaScript', 'CSS', 'HTML'],
    liveLink: 'https://jasvanth-hub.github.io/Form-Validation/Form_Validation.html',
    githubLink: 'https://github.com/Jasvanth-Hub/Form-Validation',
  },
  {
    title: 'Stop Watch',
    description: 'A simple stopwatch application that has start, pause and reset options.',
    imageUrl: '/images/stopWatch.png',
    techStack: ['HTML', 'CSS','JavaScript'],
    liveLink: 'https://jasvanth-hub.github.io/Stop-Watch/Stop_Watch.html',
    githubLink: 'https://github.com/Jasvanth-Hub/Stop-Watch',
  },
  {
    title: 'Text to Speech',
    description: 'An application that converts text into speech using browser speech synthesis API.',
    imageUrl: '/images/textToSpeech.png',
    techStack: ['HTML','API Integration', 'JavaScript', 'CSS'],
    liveLink: 'https://jasvanth-hub.github.io/Text-to-Speech/Text_to_speech.html',
    githubLink: 'https://github.com/Jasvanth-Hub/Text-to-Speech',
  }
];
  
  const Projects = () => {
    return (
      <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900 transition-all duration-500">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Projects
          </h2>
  
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105"
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs font-semibold px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                      View Live
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  