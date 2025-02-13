import { FaCode, FaExternalLinkAlt } from 'react-icons/fa';

const CodingPlatforms = () => {
  const platforms = [
    {
      name: 'LeetCode',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png',
      link: 'https://leetcode.com/u/Jasvanth_Aa/',
    },
    {
      name: 'CodeChef',
      logo: 'https://upload.wikimedia.org/wikipedia/en/7/7b/Codechef%28new%29_logo.svg',
      link: 'https://www.codechef.com/users/jasvanth',
    },
    {
      name: 'GeeksforGeeks',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg',
      link: 'https://www.geeksforgeeks.org/user/bhukyajasvanth/',
    },
    {
      name: 'HackerRank',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png',
      link: 'https://www.hackerrank.com/profile/bhukyajasvanth',
    },
    {
      name: 'Coding Ninjas',
      logo: 'https://www.svgrepo.com/show/330198/codingninjas.svg',
      link: 'https://www.naukri.com/code360/profile/Jasvanth_Aa',
    },
  ];

  return (
    <section id="coding-platforms" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 flex items-center gap-2">
          <FaCode /> Coding Platforms
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105"
            >
              <img
                src={platform.logo}
                alt={`${platform.name} Logo`}
                className="w-16 h-16 object-contain mb-2"
              />
              <p className="text-gray-800 dark:text-white font-medium">{platform.name}</p>
              <FaExternalLinkAlt className="text-gray-600 dark:text-gray-400 mt-1" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingPlatforms;
