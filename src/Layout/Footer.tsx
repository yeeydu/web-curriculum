import ThemeToggle from "../components/ThemeToggle";
import { SiLinktree } from "react-icons/si";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="flex border-0 vector-nav dark:bg-gray-900 w-full m-0 px-20 text-white p-4 justify-between">
      <h1 className="flex text-sm justify-start">© 2023 Web Curriculum</h1>
      <div className="flex space-x-2 mb-1 ">
        <a href="https://linktr.ee/yeeyson" rel="noreferrer" target="_blank">
          <SiLinktree
            className="hover:-translate-y-1 transition-transform cursor-pointer  text-neutral-200 dark:text-neutral-100"
            size={24}
          />
        </a>
        <a href="https://github.com/yeeydu" rel="noreferrer" target="_blank">
          <AiOutlineGithub
            className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-200 dark:text-neutral-100"
            size={24}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/yeeyson-duarte-6545041a7/"
          rel="noreferrer"
          target="_blank"
        >
          <AiOutlineLinkedin
            className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-200 dark:text-neutral-100"
            size={24}
          />
        </a>
        <a
          href="https://www.youtube.com/channel/"
          rel="noreferrer"
          target="_blank"
        >
          <AiOutlineYoutube
            className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-200 dark:text-neutral-100"
            size={24}
          />
        </a>
      </div>
      <ThemeToggle />
    </footer>
  );
}
