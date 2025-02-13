import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-4 text-center">
      <p className="mb-3 text-gray-600 dark:text-gray-300">
        © 2025 Jasvanth. All Rights Reserved.
      </p>
      <div className="flex justify-center space-x-6">
        <a href="https://github.com/Jasvanth-Hub" target="_blank" rel="noopener noreferrer">
          <Github />
        </a>
        <a href="https://www.linkedin.com/in/jasvanth-bhukya-8a1b16256/" target="_blank" rel="noopener noreferrer">
          <Linkedin />
        </a>
        <a href="mailto:bhukyajasvanth@gmail.com">
          <Mail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
