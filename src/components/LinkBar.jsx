import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const LinkBar = () => {
  return (
    <div className="flex space-x-4 justify-center">
      <a
        href="https://github.com/williamj20"
        target="_blank"
        rel="noopener noreferrer"
        className=" hover:text-gray-600 transition-colors"
      >
        <FaGithubSquare size={40} />
      </a>
      <a
        href="https://www.linkedin.com/in/william-jiang/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-600 transition-colors"
      >
        <FaLinkedin size={40} />
      </a>
    </div>
  );
};

export default LinkBar;
