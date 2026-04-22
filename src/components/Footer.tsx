import { Link } from '@/components';
import { FaGithub } from "react-icons/fa";
import { GITHUB_LINK } from '@/core/constants';

export const Footer = () => {
  return (
    <div>
      <nav className="flex gap-4 p-4 bg-zinc-800">
        <div className="text-xl text-white-900 flex justify-center items-center">
          <div className="mt-1 mr-3">
            <FaGithub />
          </div>
          <div>
            <a href={GITHUB_LINK} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </nav>
    </div>
  );
};