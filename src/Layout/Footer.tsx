import ThemeToggle from "../components/ThemeToggle";

export default function Footer() {
  return (
    <footer className="flex border-0 vector-nav dark:bg-gray-900 w-full m-0 px-20 text-white p-4 justify-between">
      <h1 className="flex text-sm ">© 2023 Yeeyson Curriculum</h1>
      <ThemeToggle />
    </footer>
  );
}
